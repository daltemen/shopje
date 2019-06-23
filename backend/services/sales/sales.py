from typing import List

from flask_sqlalchemy import SQLAlchemy


class Sales:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def create(self, sales_fields: dict):
        pass

    def get(self, sales_id: int):
        pass

    def get_all(self, shop_id: int):
        pass


class ProductsSales:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def create(self, shop_id: int, product_ids: List[int]):
        pass

    def get_all_detail(self, shop_id):
        pass
