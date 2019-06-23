from flask_sqlalchemy import SQLAlchemy

from backend.services.models.models import Sale, ProductsSale
from backend.services.products import Products


class Sales:
    def __init__(self, db: SQLAlchemy, products: Products):
        self.db = db
        self.products = products

    def create(self, sales_fields: dict) -> dict:
        detail_list = sales_fields.pop("products")
        sale = Sale(**sales_fields)
        self.db.session.add(sale)
        self.db.session.commit()
        products_sale = [self._product_sale(sale, detail) for detail in detail_list]
        self.db.session.bulk_save_objects(products_sale)
        self.db.session.commit()
        return self.to_dict(sale)

    def _product_sale(self, sale: Sale, detail: dict) -> ProductsSale:
        product_id = detail.pop("id")
        quantity = detail.get("quantity", 0)
        self.products.decrease(product_id, quantity)
        return ProductsSale(quantity=quantity, sale_id=sale.id, product_id=product_id)

    def get(self, sales_id: int) -> dict:
        sale = Sale.query.get(sales_id)
        return self.to_dict(sale)

    def get_all(self, shop_id: int) -> dict:
        sales = Sale.query.filter_by(shop_id=shop_id).all()
        return {"sales": [self.to_dict(sale) for sale in sales]}

    @staticmethod
    def to_dict(sale: Sale) -> dict:
        return {
            "id": sale.id,
            "client": sale.client,
            "phone": sale.phone,
            "price": sale.price,
            "products": [Products.to_dict(product) for product in sale.shop_sales.products],
            "shop_id": sale.shop_id
        }
