from flask import Flask
from models.user import User
from database.db import db

class UserService:
    def register(self, user):
        existing_user = User.query.filter_by(email=user.email).first()
        if existing_user is not None:
            return None
        db.session.add(user)
        db.session.commit()
        return user

    def login(self, email, password):
        user = User.query.filter_by(email=email).first()
        if user is None or user.password != password:
            return False, None
        return True, user