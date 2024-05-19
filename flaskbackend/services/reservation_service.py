from models.reservation import Reservation
from database.db import db

class ReservationService:
    def add(self, reservation):
        db.session.add(reservation)
        db.session.commit()
        return reservation

    def get_reservations_by_destination_id_and_dates(self, destination_id, start_date, end_date):
        reservations = Reservation.query.filter(Reservation.destination_id == destination_id, Reservation.start_date <= end_date, Reservation.end_date >= start_date).all()
        return reservations

    def get_reservations_by_destination_id(self, destination_id):
        reservations = Reservation.query.filter(Reservation.destination_id == destination_id).all()
        return reservations
