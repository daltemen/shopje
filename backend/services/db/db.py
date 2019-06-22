from flask_sqlalchemy import SQLAlchemy
from backend.services.app.views import app

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
db = SQLAlchemy(app)
