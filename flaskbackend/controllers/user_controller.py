from flask import Blueprint, request, jsonify
from models.user import User
from services.user_service import UserService

user_controller = Blueprint('user_controller', __name__)
user_service = UserService()

@user_controller.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    user = User(data['email'], data['first_name'], data['last_name'], data['password'], data['role'])

    saved_user = user_service.register(user)

    if saved_user is None:
        return jsonify({'error': 'User already exists'}), 400
    return jsonify(saved_user.serialize()), 200

@user_controller.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    success, user_logged_in = user_service.login(data['email'], data['password'])

    if success is False or user_logged_in is None:
        return jsonify({'error': 'Invalid credentials'}), 401
    return jsonify(user_logged_in.serialize()), 200