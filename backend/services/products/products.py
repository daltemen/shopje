from flask_sqlalchemy import SQLAlchemy
from backend.services.models.models import Product


class Products:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def create(self, product_fields: dict) -> dict:
        product = Product(**product_fields)
        self.db.session.add(product)
        self.db.session.commit()
        return self.to_dict(product)

    def get(self, id_product: int) -> dict:
        product = Product.query.get(id_product)
        return self.to_dict(product)

    def update(self, id_product: int, product_fields: dict) -> dict:
        Product.query.filter_by(id=id_product).update(product_fields)
        self.db.session.commit()
        return self.to_dict(Product.query.get(id_product))

    def get_all(self, shop_id: int) -> dict:
        products = Product.query.filter_by(shop_id=shop_id).all()
        return {"products": [self.to_dict(product) for product in products]}

    def delete(self, id_product: int) -> dict:
        Product.query.filter_by(id=id_product).delete()
        self.db.session.commit()
        return {"ok": True}

    def decrease(self, id_product: int, quantity: int):
        product = Product.query.get(id_product)
        product.quantity -= quantity
        self.db.session.commit()

    @staticmethod
    def to_dict(product: Product) -> dict:
        return {
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "quantity": product.quantity,
            "shop_id": product.shop_id,
        }
