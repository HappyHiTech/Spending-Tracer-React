from flask import Flask, request, Response, Blueprint, jsonify
from flask_cors import cross_origin
from .database_manager import DataBaseManager
from .jwt_manager import JWTManager
from .stats_manager import StatsManager
import uuid

main = Blueprint('main', __name__)

DBM = DataBaseManager()
JWTM = JWTManager()
SM = StatsManager(DBM.db())


@main.route('/api/message')
def temp():
    print("hellooo")
    return Response("OK", status=200)

@main.route('/api/add_data', methods=["POST"])
@cross_origin(origins="http://localhost:5173")
@JWTM.verify_jwt
def add_data():
    user_id = request.user_id
    DBM.insert_transaction(user_id, request.form)
    item_list = DBM.get_documents(user_id)
    return jsonify(item_list)


@main.route('/api/get_data')
@cross_origin(origins="http://localhost:5173")
@JWTM.verify_jwt
def get_data():
    user_id = request.user_id
    item_list = DBM.get_documents(user_id)
    return jsonify(item_list)

@main.route('/api/remove_data', methods=["POST", "OPTIONS"])
@cross_origin(origins="http://localhost:5173")
@JWTM.verify_jwt
def remove_data():
    user_id = request.user_id
    data = request.get_json()
    item_id = data.get("item_id")
    DBM.delete_docuement(item_id)
    item_list = DBM.get_documents(user_id)
    return jsonify(item_list)

@main.route("/api/get_total_spent", methods=["POST"])
@cross_origin(origins="http://localhost:5173")
@JWTM.verify_jwt
def get_total_spent():
    user_id = request.user_id
    total_spent = DBM.get_total_spent(user_id)
    return jsonify({"total_spent": total_spent})

@main.route("/api/get_percent_per_category", methods=["POST"])
@cross_origin(origins="http://localhost:5173")
@JWTM.verify_jwt
def get_percent_per_category():
    user_id = request.user_id
    category_dict = SM.get_percent_per_category(user_id)
    return jsonify(category_dict)

@main.route('/api/signup', methods=["POST"])
@cross_origin(origins="http://localhost:5173")
def signup():
    DBM.insert_user(str(uuid.uuid4()), request.form)
    return Response("OK", status=200)

@main.route('/api/login', methods=["POST", "OPTIONS"])
@cross_origin(origins=["http://localhost:5173", "http://127.0.0.1:5173"])
def login():
    is_there_user = DBM.search_user(request.form)
    print("HELLo")
    if is_there_user:
        print("THERE IS A USER")
        token = JWTM.generate_JWT(is_there_user["user_id"], is_there_user["username"])
        return jsonify({
            "success": True,
            "token": token,
            "user": is_there_user["username"].capitalize(),
            "message": "Login sucessful"
        })
    else:
        print("THERE ISN'T A USER")
        return jsonify({
            "success": False,
            "error": "No user",
        })


