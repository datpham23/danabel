import r from 'rethinkdb';

export default function dbConnectionMiddleware(req, res, next) {
  r.connect({ db: 'danabel' })
    .then((conn) => {
      req.rConn = conn;
      next();
    })
    .catch((err) => {
      res.status(500);
      res.json({ error: err.message });
    });
};
