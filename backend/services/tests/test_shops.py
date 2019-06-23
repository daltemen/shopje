import unittest
from unittest.mock import MagicMock, patch

from services.models import Shop
from services.shops import Shops


class TestShops(unittest.TestCase):
    def test_create(self):
        db_mock = MagicMock()
        shops = Shops(db_mock)
        fields = {
            "name": "shop 1"
        }
        created = shops.create(fields)
        assert fields["name"] == created["name"]

    @patch("services.models.Shop.query.get")
    def test_get(self, get):
        db_mock = MagicMock()
        shops = Shops(db_mock)
        shop_mock = Shop(id=1, name="shop test 1")
        get.return_value = shop_mock
        expected = {
            "id": 1,
            "name": "shop test 1"
        }
        got = shops.get(1)
        assert expected["id"] == got["id"]
