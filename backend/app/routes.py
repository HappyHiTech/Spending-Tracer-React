from flask import Flask, request, Response, Blueprint, jsonify
from flask_cors import cross_origin
from .database_manager import DataBaseManager
from .jwt_manager import JWTManager
import uuid

main = Blueprint('main', __name__)

DBM = DataBaseManager()
JWTM = JWTManager()


@main.route('/api/message')
def temp():
    print("hellooo")
    return Response("OK", status=200)

@main.route('/api/add_data', methods=["POST"])
@JWTM.verify_jwt
def add_data():
    DBM.insert_transaction("Harvey", request.form)
    item_list = DBM.get_documents()
    return jsonify(item_list)


@main.route('/api/get_data')
@cross_origin(origins="http://localhost:5173")
@JWTM.verify_jwt
def get_data():
    item_list = DBM.get_documents()
    return jsonify(item_list)


@main.route('/api/signup', methods=["POST"])
def signup():
    DBM.insert_user(str(uuid.uuid4()), request.form)
    return Response("OK", status=200)

@main.route('/api/login', methods=["POST"])
@cross_origin(origins="http://localhost:5173")
def login():
    is_there_user = DBM.search_user(request.form)
    if is_there_user:
        print("THERE IS A USER")
        token = JWTM.generate_JWT(is_there_user["user_id"], is_there_user["username"])
        return jsonify({
            "success": True,
            "token": token,
            "message": "Login sucessful"
        })
    else:
        print("THERE ISN'T A USER")
        return jsonify({
            "success": False,
            "error": "No user",
        })
