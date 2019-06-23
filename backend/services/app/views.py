from flask import request, jsonify

from backend.services.app import app

from backend.services.models.models import db
from backend.services.products import Products
from backend.services.sales import Sales
from backend.services.shops import Shops

_PRODUCTS = Products(db)
_SALES = Sales(db)
_SHOPS = Shops(db)
_BASE_API_PATH = "/api/v1"


@app.route("/health")
def health():
    return "Hi Peiky!"


@app.route(f"{_BASE_API_PATH}/products/shop/<int:shop_id>", methods=["GET", "POST"])
def products(shop_id):
    all_products = {}
    shop_id = shop_id
    if request.method == "GET":
        all_products = _PRODUCTS.get_all(shop_id)
    if request.method == "POST":
        all_products = _PRODUCTS.create(request.get_json())
    return jsonify(all_products)


@app.route(
    f"{_BASE_API_PATH}/products/<int:product_id>", methods=["GET", "PUT", "DELETE"]
)
def product(product_id):
    product_shop = {}
    product_id = int(product_id)
    if request.method == "GET":
        product_shop = _PRODUCTS.get(product_id)
    if request.method == "PUT":
        product_shop = _PRODUCTS.update(product_id, request.get_json())
    if request.method == "DELETE":
        product_shop = _PRODUCTS.delete(product_id)
    return jsonify(product_shop)


@app.route(f"{_BASE_API_PATH}/sales/shop/<int:shop_id>")
def sales(shop_id):
    all_sales = _SALES.get_all(int(shop_id))
    return jsonify(all_sales)


@app.route(f"{_BASE_API_PATH}/sales/<int:sale_id>", methods=["GET", "POST"])
def sale(sale_id):
    sales_shop = {}
    sale_id = int(sale_id)
    if request.method == "GET":
        sales_shop = _SALES.get(sale_id)
    if request.method == "POST":
        sales_shop = _SALES.create(request.get_json())
    return jsonify(sales_shop)


@app.route(f"{_BASE_API_PATH}/shops")
def shops():
    all_shops = _SHOPS.get_all()
    return jsonify(all_shops)


@app.route(f"{_BASE_API_PATH}/shops/<int:shop_id>", methods=["GET", "POST"])
def shop(shop_id):
    shop_response = {}
    shop_id = int(shop_id)
    if request.method == "GET":
        shop_response = _SHOPS.get(shop_id)
    if request.method == "POST":
        shop_response = _SALES.create(request.get_json())
    return jsonify(shop_response)
