from pymongo.database import Database as MongoDatabase
# from database_manager import DataBaseManager

class BudgetManager():
    def __init__(self, db: MongoDatabase):
        self._db = db


    def get_categories(self, user_id: str) -> list[str]:
        transaction_collection = self._db["transactions"].find({"user_id": user_id})
        categories = transaction_collection.distinct("category")
        return categories


# DBM = DataBaseManager()
# BM = BudgetManager(DBM.db())

# USER_ID = "2177a0af-d1f2-484f-bd3b-4ab0dc3c0aff"
# BM.get_categories(USER_ID)