from flask_sqlalchemy import SQLAlchemy


class Shops:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def get(self, shop_id):
        pass

    def create(self, shop_fields: dict):
        pass

    def get_all(self):
        pass
