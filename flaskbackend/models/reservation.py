from database.db import db

class Reservation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    destination_id = db.Column(db.Integer, db.ForeignKey('destination.id'), nullable=False)
    creation_date = db.Column(db.Date, nullable=False, default=db.func.current_date())
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    total_price = db.Column(db.Integer, nullable=False)

    def __init__(self, user_id, destination_id, start_date, end_date, total_price):
        self.user_id = user_id
        self.destination_id = destination_id
        self.start_date = start_date
        self.end_date = end_date
        self.total_price = total_price

    def __repr__(self):
        return '<Reservation %r>' % self.id

    def serialize(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'destination_id': self.destination_id,
            'creation_date': self.creation_date,
            'start_date': self.start_date,
            'end_date': self.end_date,
            'total_price': self.total_price
        }