from flask import Blueprint, request, jsonify
from models.destination import Destination
from services.destination_service import DestinationService

destination_controller = Blueprint('destination_controller', __name__)
destination_service = DestinationService()

@destination_controller.route('/get/', methods=['GET'])
def get():
    destinations = destination_service.get_all()
    return jsonify([destination.serialize() for destination in destinations]), 200

@destination_controller.route('/get/<string:location>', methods=['GET'])
def get_by_location(location):
    destinations = destination_service.get_by_location(location)
    return jsonify([destination.serialize() for destination in destinations]), 200

@destination_controller.route('/get/special-offers', methods=['GET'])
def get_special_offers():
    destinations = destination_service.get_all_special_offers()
    return jsonify([destination.serialize() for destination in destinations]), 200

@destination_controller.route('/get/<int:id>', methods=['GET'])
def get_by_id(id):
    destination = destination_service.get_by_id(id)
    if destination is None:
        return jsonify({'error': 'Destination does not exist'}), 400
    return jsonify(destination.serialize()), 200

@destination_controller.route('/check-availability', methods=['POST'])
def check_availability_between_dates():
    data = request.get_json()
    destination_id = data['destination_id']
    start_date = data['start_date']
    end_date = data['end_date']

    is_available = destination_service.check_availability_between_dates(destination_id, start_date, end_date)

    return jsonify({'is_available': is_available}), 200

@destination_controller.route('/add', methods=['POST'])
def add_destination():
    data = request.get_json()
    destination = Destination(data['name'], data['description'], data['location'], data['price'], data['slots'], data['image'], data['is_special_offer'], data['special_price'])

    saved_destination = destination_service.add(destination)

    if saved_destination is None:
        return jsonify({'error': 'Destination already exists'}), 400
    return jsonify(saved_destination.serialize()), 200

@destination_controller.route('/update/<int:id>', methods=['PUT'])
def update_destination(id):
    data = request.get_json()
    destination = Destination(data['name'], data['description'], data['location'], data['price'], data['slots'], data['image'], data['is_special_offer'], data['special_price'])

    updated_destination = destination_service.update_by_id(destination, id)

    if updated_destination is None:
        return jsonify({'error': 'Destination does not exist'}), 400
    return jsonify(updated_destination.serialize()), 200

@destination_controller.route('/delete/<int:id>', methods=['DELETE'])
def delete_destination(id):
    if destination_service.delete_by_id(id):
        return jsonify({'message': 'Destination deleted'}), 200
    return jsonify({'error': 'Failed to delete'}), 400

