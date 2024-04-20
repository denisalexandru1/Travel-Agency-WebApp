from database.db import db

class Destination(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    location = db.Column(db.String(80), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    slots = db.Column(db.Integer, nullable=False)
    image = db.Column(db.String(500), nullable=False)
    is_special_offer = db.Column(db.Boolean, nullable=False)
    special_price = db.Column(db.Integer, nullable=False)

    def __init__(self, name, description, location, price, slots, image, is_special_offer, special_price):
        self.name = name
        self.description = description
        self.location = location
        self.price = price
        self.slots = slots
        self.image = image
        self.is_special_offer = is_special_offer
        self.special_price = special_price

    def repr(self):
        return '<Destination %r>' % self.name

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'location': self.location,
            'price': self.price,
            'slots': self.slots,
            'image': self.image,
            'is_special_offer': self.is_special_offer,
            'special_price': self.special_price
        }