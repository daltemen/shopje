from flask import request, jsonify

from services.app import app

from services.models.models import db
from services.products import Products
from services.sales import Sales
from services.shops import Shops

_PRODUCTS = Products(db)
_SALES = Sales(db, _PRODUCTS)
_SHOPS = Shops(db)
_BASE_API_PATH = "/api/v1"


@app.route("/health")
def health():
    return "Hi Peiky!"

# Products
@app.route(f"{_BASE_API_PATH}/products/", methods=["POST"])
def products():
    all_products = _PRODUCTS.create(request.get_json())
    return jsonify(all_products)


@app.route(f"{_BASE_API_PATH}/products/shop/<int:shop_id>")
def products_shop(shop_id):
    all_products = _PRODUCTS.get_all(shop_id)
    return jsonify(all_products)


@app.route(
    f"{_BASE_API_PATH}/products/<int:product_id>", methods=["GET", "PUT", "DELETE"]
)
def product(product_id):
    product_shop = {}
    if request.method == "GET":
        product_shop = _PRODUCTS.get(product_id)
    if request.method == "PUT":
        product_shop = _PRODUCTS.update(product_id, request.get_json())
    if request.method == "DELETE":
        product_shop = _PRODUCTS.delete(product_id)
    return jsonify(product_shop)

# Sales
@app.route(f"{_BASE_API_PATH}/sales/", methods=["POST"])
def sales():
    all_sales = _SALES.create(request.get_json())
    return jsonify(all_sales)


@app.route(f"{_BASE_API_PATH}/sales/shop/<int:shop_id>")
def sales_shop(shop_id):
    all_sales = _SALES.get_all(shop_id)
    return jsonify(all_sales)


@app.route(f"{_BASE_API_PATH}/sales/<int:sale_id>")
def sale(sale_id):
    sale_element = _SALES.get(sale_id)
    return jsonify(sale_element)

# Shops
@app.route(f"{_BASE_API_PATH}/shops", methods=["GET", "POST"])
def shops():
    all_shops = {}
    if request.method == "GET":
        all_shops = _SHOPS.get_all()
    if request.method == "POST":
        all_shops = _SHOPS.create(request.get_json())
    return jsonify(all_shops)


@app.route(f"{_BASE_API_PATH}/shops/<int:shop_id>")
def shop(shop_id):
    shop_response = _SHOPS.get(shop_id)
    return jsonify(shop_response)
