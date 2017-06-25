import r from 'rethinkdb';

async function dbCreateIfMissing(conn, database) {
  return r.dbList().contains(database)
    .do((databaseExists) => {
      return r.branch(
        databaseExists,
        {db_created: 0},
        r.dbCreate(database)
      );
    }).run(conn);
}

async function tableCreateIfMissing(conn, database, table) {
  return r.db(database).tableList().contains(table)
    .do((tableExists) => {
      return r.branch(
        tableExists,
        {tables_created: 0},
        r.db(database).tableCreate(table)
      );
    }).run(conn);
}

async function migrate() {
  const conn = await r.connect();

  const database = 'danabel';

  await dbCreateIfMissing(conn, database);
  await tableCreateIfMissing(conn, database, 'reservations');

  conn.close();
}

migrate();
