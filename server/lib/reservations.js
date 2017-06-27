import _ from 'lodash';
import r from 'rethinkdb';

const table = 'reservations';

function getAllReservations(conn) {
  return r.table(table).run(conn)
    .then((cursor) => {
      return cursor.toArray();
    });
}

function getReservationByEmail(conn, email) {
  return r.table(table).filter({email}).run(conn)
    .then((cursor) => {
      return cursor.toArray();
    })
    .then((results) => {
      return _.head(results);
    });
}

function addReservation(conn, reservation) {
  const email = reservation.email;

  return getReservationByEmail(conn, email)
    .then((existingReservation) => {
      if (!existingReservation) {
        reservation.id = email;

        const newReservation = Object.assign(reservation, {timestamp: new Date()});

        return r.table(table).insert(newReservation, {conflict: 'replace'}).run(conn);
      } else {
        return existingReservation;
      }
    });
}

function updateReservation(conn, reservationId, reservation) {
  const updatedReservation = Object.assign(reservation, {modified_timestamp: new Date()});

  return r.table(table).get(reservationId).update(updatedReservation).run(conn);
}

function deleteReservation(conn, reservationId) {
  return r.table(table).get(reservationId).delete().run(conn);
}

export default {
  getAllReservations,
  getReservationByEmail,
  addReservation,
  updateReservation,
  deleteReservation
};
