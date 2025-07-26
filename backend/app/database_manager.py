from dotenv import load_dotenv, find_dotenv
import os 
import pprint
from pymongo import MongoClient
from pymongo.database import Database as MongoDatabase
from werkzeug.datastructures import ImmutableMultiDict
import bcrypt

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

    def get_documents(self) -> list:
        transaction_collection = self._db["transactions"]
        return [{**doc, "_id": str(doc["_id"])} for doc in transaction_collection.find()]
    
    def insert_user(self, user_id, form_data: ImmutableMultiDict) -> None:
        users_collection = self._db["users"]

        hashed = bcrypt.hashpw(form_data["password"].encode('utf-8'), bcrypt.gensalt())

        entry_document = {
            "user_id": user_id,
            "username": form_data["username"],
            "password": hashed.decode('utf-8')
        }

        users_collection.insert_one(entry_document)

    def search_user(self, form_data: ImmutableMultiDict) -> dict | bool:
        return_dict = {}
        username = form_data["username"]
        password = form_data["password"]

        users_collection = self._db["users"]

        results = users_collection.find({"username": username})
        for entry in results:
            hashed_password_str = entry.get("password")
            user_id = entry.get("user_id")
            hashed_password = hashed_password_str.encode("utf-8")
            if bcrypt.checkpw(password.encode("utf-8"), hashed_password):
                return {
                    "user_id": user_id,
                    "username": username
                }
        return False









