import unittest
from unittest.mock import MagicMock, patch

from services.models import Product
from services.products import Products


class TestProducts(unittest.TestCase):
    def setUp(self):
        pass

    def test_create(self):
        db_mock = MagicMock()
        products = Products(db_mock)
        fields = {
            "name": "mouse",
            "price": 3201,
            "quantity": 5,
            "shop_id": 1
        }
        created = products.create(fields)
        assert fields["name"] == created["name"]
        assert fields["price"] == created["price"]
        assert fields["quantity"] == created["quantity"]

    @patch("services.models.Product.query.get")
    def test_get(self, get):
        db_mock = MagicMock()
        products = Products(db_mock)
        product_mock = Product(id=1, name="phone")
        get.return_value = product_mock
        expected = {
            "id": 1,
            "name": "phone"
        }
        got = products.get(1)
        assert expected["id"] == got["id"]
        assert expected["name"] == got["name"]

    @patch("services.models.Product.query.update")
    @patch("services.models.Product.query.get")
    def test_update(self, get, update):
        db_mock = MagicMock()
        products = Products(db_mock)
        product_mock = Product(id=1, name="phone_updated")
        get.return_value = product_mock
        expected = {
            "id": 1,
            "name": "phone_updated"
        }
        got = products.update(1, {"name": "phone_updated"})
        assert expected["id"] == got["id"]
        assert expected["name"] == got["name"]
