import _ from 'lodash';
import express from 'express';
import Reservations from '../lib/reservations';
import dbConnectionMiddleware from '../middlewares/database';

const router = express.Router();

router.post('/', dbConnectionMiddleware, (req, res) => {
  const reservation = req.body;

  if (_.isObject(reservation)) {
    const conn = req.rConn;

    Reservations.addReservation(conn, reservation)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => res.json(400, { error: err }));
  } else {
    res.json(400, { error: 'Reservation data not valid to add.' });
  }
});

router.get('/', dbConnectionMiddleware, (req, res) => {
  const conn = req.rConn;

  Reservations.getAllReservations(conn)
    .then((results) => {
      res.json(results);
    })
    .catch((err) => res.json(400, { error: err }));
});

router.put('/:reservationId', dbConnectionMiddleware, (req, res) =>{
  const reservationId = req.params.reservationId;
  const reservation = req.body;

  if (reservationId && reservation) {
    const conn = req.rConn;

    Reservations.updateReservation(conn, reservationId, reservation)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => res.json(400, { error: err }));
  } else {
    res.json(400, { error: 'Missing reservationId or reservation data to update reservation.' });
  }
});

router.delete('/:reservationId', dbConnectionMiddleware, (req, res) =>{
  const reservationId = req.params.reservationId;

  if (reservationId) {
    const conn = req.rConn;

    Reservations.deleteReservation(conn, reservationId)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => res.json(400, { error: err }));
  } else {
    res.json(400, { error: 'Missing reservationId to delete reservation.' });
  }
});

export default router;
