from flask import Flask, request, Response, Blueprint, jsonify
from flask_cors import cross_origin
from app.database_manager import DataBaseManager
from app.jwt_manager import JWTManager
from app.stats_manager import StatsManager
import uuid

DBM = DataBaseManager()
JWTM = JWTManager()
SM = StatsManager(DBM.db())

auth_bp = Blueprint("auth", __name__)


@auth_bp.route('/api/signup', methods=["POST"])
@cross_origin(origins=["http://localhost:5173", "http://127.0.0.1:5173", "https://happyhitech.github.io"])
def signup():
    DBM.insert_user(str(uuid.uuid4()), request.form)
    return Response("OK", status=200)

@auth_bp.route('/api/login', methods=["POST", "OPTIONS"])
@cross_origin(origins=["http://localhost:5173", "http://127.0.0.1:5173", "https://happyhitech.github.io"])
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



