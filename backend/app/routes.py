from flask import Flask, request, Response, Blueprint, jsonify
from .database_manager import DataBaseManager

main = Blueprint('main', __name__)

DBM = DataBaseManager()


@main.route('/api/message')
def temp():
    print("hellooo")
    return Response("OK", status=200)

@main.route('/api/add_data', methods=["POST"])
def add_data():
    DBM.insert_transaction("Harvey", request.form)
    return Response("OK", status=200)