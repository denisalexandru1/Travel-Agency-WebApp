from flask import Flask
from models.destination import Destination
from database.db import db

class DestinationService:
    def get_all(self):
        destinations = Destination.query.all()
        if destinations is None:
            return []
        return destinations

    def get_by_location(self, location):
        # Get all destinations by location from the database, case insensitive
        destinations = Destination.query.filter(Destination.location.ilike(location)).all()
        if destinations is None:
            return []
        return destinations

    def get_all_special_offers(self):
        # Get all destinations that are special offers from the database
        destinations = Destination.query.filter(Destination.is_special_offer == True).all()
        if destinations is None:
            return []
        return destinations

    def get_by_id(self, id):
        # Get destination by id from the database
        destination = Destination.query.get(id)
        if destination is None:
            return None
        return destination

    def delete_by_id(self, id):
        # Delete destination by id from the database
        destination = Destination.query.get(id)
        if destination is None:
            return False
        db.session.delete(destination)
        db.session.commit()
        return True

    def update_by_id(self, destination, id):
        # Update destination by id in the database
        destination_to_update = Destination.query.get(id)
        if destination_to_update is None:
            return None
        destination_to_update.name = destination.name
        destination_to_update.description = destination.description
        destination_to_update.location = destination.location
        destination_to_update.price = destination.price
        destination_to_update.slots = destination.slots
        destination_to_update.image = destination.image
        destination_to_update.is_special_offer = destination.is_special_offer
        destination_to_update.special_price = destination.special_price
        db.session.commit()
        return destination_to_update

    def add(self, destination):
        db.session.add(destination)
        db.session.commit()
        return destination