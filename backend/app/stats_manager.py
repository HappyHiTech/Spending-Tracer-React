from datetime import date
from pymongo import ASCENDING, DESCENDING
from pymongo.database import Database as MongoDatabase
from decimal import Decimal


class StatsManager():
    def __init__(self, db: MongoDatabase):
        self._db = db

    def total_price(self, user_id: str) -> int:
        transaction_collection = self._db["transactions"].find({"user_id": user_id})
        total = sum(Decimal(tx["price"]) for tx in transaction_collection)
        return f"{float(total):.2f}"
    
    def get_percent_per_category(self, user_id: str) -> dict:
        category_dict = {}
        total_spending = float(self.total_price(user_id))

        transaction_collection = self._db["transactions"].find({"user_id": user_id})

        for entry in transaction_collection:
            category = entry["category"]
            price = float(entry["price"])
            category_dict[category] = category_dict.get(category, 0) + price

        return {
            category: f"{(amount / total_spending) * 100:.2f}%"
            for category, amount in category_dict.items()
        }
    
    def get_price_per_category(self, user_id: str) -> dict:
        category_dict = {}
        
        transaction_collection = self._db["transactions"].find({"user_id": user_id})

        for entry in transaction_collection:
            category = entry["category"]
            price = float(entry["price"])
            category_dict[category] = category_dict.get(category, 0) + price

        return {
            category: f"${amount:.2f}"
            for category, amount in category_dict.items()
        }

    

# SM = StatsManager(DBM.db())
# USER_ID= "2177a0af-d1f2-484f-bd3b-4ab0dc3c0aff"
# print(SM.get_percent_per_category(USER_ID))
# print(SM.total_price(USER_ID))