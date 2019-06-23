from flask_sqlalchemy import SQLAlchemy


class Products:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def create(self, product_fields: dict):
        pass

    def get(self, id_product: int):
        pass

    def update(self, product_fields: dict):
        pass

    def delete(self, id_product: dict):
        pass

    def get_all(self, shop_id: int):
        pass
