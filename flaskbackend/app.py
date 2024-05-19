from flask import Flask
from flask_cors import CORS
from database.db import db
from controllers.user_controller import user_controller
from controllers.destination_controller import destination_controller
from controllers.reservation_controller import  reservation_controller

app = Flask(__name__)
CORS(app)
# connect to posgresql database called travel with user postgres and password root
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost/travel'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
# create all tables
with app.app_context():
    db.create_all()

app.register_blueprint(user_controller, url_prefix='/user')
app.register_blueprint(destination_controller, url_prefix='/destination')
app.register_blueprint(reservation_controller, url_prefix='/reservation')

if __name__ == '__main__':
    app.run(debug='true', ssl_context='adhoc')
