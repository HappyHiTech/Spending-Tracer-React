from dotenv import load_dotenv, find_dotenv
import os 
import pprint
from pymongo import MongoClient
from pymongo.database import Database as MongoDatabase
from werkzeug.datastructures import ImmutableMultiDict


class DataBaseManager:
    def __init__(self):
        load_dotenv(find_dotenv())
        self._password = os.environ.get("MONGODB_PWD")
        self._connection_string = f"mongodb+srv://harveycytan:{self._password}@spender-clustor.maoqfo6.mongodb.net/?retryWrites=true&w=majority&appName=Spender-Clustor"
        self._client = MongoClient(self._connection_string)
        self._db = self._client["SpenderDB"]

    def client(self) -> MongoClient:
        return self._client
    
    def db(self) -> MongoDatabase:
        return self._db
    
    def insert_transaction(self, user_id: str, form_data: ImmutableMultiDict) -> None:
        transaction_collection = self._db["transactions"]
        entry_document = {
            "user_id": user_id,
            "date": form_data["date"],
            "item": form_data["item"],
            "price": form_data["price"],
            "category": form_data["category"]
        }

        transaction_collection.insert_one(entry_document)









