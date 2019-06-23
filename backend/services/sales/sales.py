from typing import List


class Sales:

    def __init__(self):
        pass

    def create(self, sales_fields: dict):
        pass

    def get(self, shop_id: int, sales_id: int):
        pass

    def get_all(self, shop_id: int):
        pass


class ProductsSales:

    def __init__(self):
        pass

    def create(self, shop_id: int, product_ids: List[int]):
        pass

    def get_all_detail(self, shop_id):
        pass
