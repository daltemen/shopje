from flask_sqlalchemy import SQLAlchemy

from services.models import Shop


class Shops:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def get(self, shop_id: int) -> dict:
        shop = Shop.query.get(shop_id)
        return self.to_dict(shop)

    def create(self, shop_fields: dict) -> dict:
        shop = Shop(**shop_fields)
        self.db.session.add(shop)
        self.db.session.commit()
        return self.to_dict(shop)

    def get_all(self) -> dict:
        shops = Shop.query.all()
        return {"shops": [self.to_dict(sale) for sale in shops]}

    @staticmethod
    def to_dict(shop: Shop) -> dict:
        return {
            "id": shop.id,
            "name": shop.name
        }
