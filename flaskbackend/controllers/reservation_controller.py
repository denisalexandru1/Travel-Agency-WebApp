from flask import Blueprint, request, jsonify
from models.reservation import Reservation
from services.reservation_service import ReservationService

reservation_controller = Blueprint('reservation_controller', __name__)
reservation_service = ReservationService()

@reservation_controller.route('/add', methods=['POST'])
def add_reservation():
    data = request.get_json()
    reservation = Reservation(data['user_id'], data['destination_id'], data['start_date'], data['end_date'], data['total_price'])

    saved_reservation = reservation_service.add(reservation)

    if saved_reservation is None:
        return jsonify({'error': 'Reservation already exists'}), 400
    return jsonify(saved_reservation.serialize()), 200

@reservation_controller.route('/get/<int:destination_id>', methods=['GET'])
def get_reservations_by_destination_id(destination_id):
    reservations = reservation_service.get_reservations_by_destination_id(destination_id)
    return jsonify([reservation.serialize() for reservation in reservations]), 200