from flask_sqlalchemy import SQLAlchemy
from backend.services.app.views import app

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
db = SQLAlchemy(app)


class Shop(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    products = db.relationship("Product", backref="shop_products", lazy=True)
    sales = db.relationship("Sale", backref="shop_sales", lazy=True)

    def __repr__(self):
        return "<Shop %r>" % self.name


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    price = db.Column(db.Integer)
    quantity = db.Column(db.Integer)
    shop_id = db.Column(db.Integer, db.ForeignKey("shop.id"), nullable=False)
    products_detail_sales = db.relationship(
        "ProductsSale", backref="product_products_sale", lazy=True
    )

    def __repr__(self):
        return "<Product %r>" % self.name


class Sale(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    client = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(120), unique=True, nullable=False)
    price = db.Column(db.Integer)
    shop_id = db.Column(db.Integer, db.ForeignKey("shop.id"), nullable=False)
    products_detail_sales = db.relationship(
        "ProductsSale", backref="sale_products_sale", lazy=True
    )

    def __repr__(self):
        return "<Sale %r>" % self.id


class ProductsSale(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer)
    sale_id = db.Column(db.Integer, db.ForeignKey("sale.id"), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey("product.id"), nullable=False)

    def __repr__(self):
        return "<ProductsSale %r>" % self.id
