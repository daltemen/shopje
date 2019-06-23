from flask import Flask

from backend.services.models.models import db
from backend.services.products import Products
from backend.services.sales import Sales
from backend.services.shops import Shops

app = Flask(__name__)
_PRODUCTS = Products(db)
_SALES = Sales(db)
_SHOPS = Shops(db)


_BASE_API_PATH = "/api/v1"


@app.route("/health")
def health():
    return "Hello World!"


@app.route(f"{_BASE_API_PATH}/products")
def products():
    pass


@app.route(f"{_BASE_API_PATH}/products/{id}", methods=["GET", "POST", "PUT", "DELETE"])
def product():
    pass


@app.route(f"{_BASE_API_PATH}/sales")
def sales():
    pass


@app.route(f"{_BASE_API_PATH}/sales/{id}", methods=["GET", "POST"])
def sale():
    pass


@app.route(f"{_BASE_API_PATH}/shops")
def shops():
    pass


@app.route(f"{_BASE_API_PATH}/shops/{id}", methods=["GET", "POST"])
def shop():
    pass
