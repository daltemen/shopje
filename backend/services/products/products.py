from flask_sqlalchemy import SQLAlchemy


class Products:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def create(self, product_fields: dict) -> dict:
        pass

    def get(self, id_product: int) -> dict:
        pass

    def update(self, id_product: int, product_fields: dict) -> dict:
        pass

    def delete(self, id_product: int) -> dict:
        pass

    def get_all(self, shop_id: int) -> dict:
        pass
