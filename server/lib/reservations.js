import r from 'rethinkdb';

const table = 'reservations';

function getAllReservations(conn) {
  return r.table(table).run(conn)
    .then((cursor) => {
      return cursor.toArray();
    });
}

function getReservationsByEmail(conn, email) {
  return r.table(table).filter({email}).run(conn)
    .then((cursor) => {
      return cursor.toArray();
    });
}

export default {
  getAllReservations,
  getReservationsByEmail
};
