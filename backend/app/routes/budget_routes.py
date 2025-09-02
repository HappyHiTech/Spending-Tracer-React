from flask import Flask, request, Response, Blueprint, jsonify
from flask_cors import cross_origin
from app.database_manager import DataBaseManager
from app.jwt_manager import JWTManager
from app.stats_manager import StatsManager
from app.budget_manager import BudgetManager
import uuid


DBM = DataBaseManager()
JWTM = JWTManager()
SM = StatsManager(DBM.db())
BM = BudgetManager(DBM.db())


budget_bp = Blueprint("budget", __name__)

@budget_bp.route('/api/get_categories')
@cross_origin(origins=["http://localhost:5173", "http://127.0.0.1:5173", "https://happyhitech.github.io", "https://hoppscotch.io"])
@JWTM.verify_jwt
def get_categories():
    user_id = request.user_id
    categories = BM.get_categories(user_id)
    return jsonify(categories)

@budget_bp.route("/api/add_budget", methods=["POST"])
@cross_origin(origins=["http://localhost:5173", "http://127.0.0.1:5173", "https://happyhitech.github.io", "https://hoppscotch.io"])
@JWTM.verify_jwt
def add_budget():
    user_id = request.user_id

    DBM.insert_budget(user_id, request.form)
    budget_list = DBM.get_budget(user_id)
    return jsonify(budget_list)

@budget_bp.route("/api/get_budget")
@cross_origin(origins=["http://localhost:5173", "http://127.0.0.1:5173", "https://happyhitech.github.io", "https://hoppscotch.io"])
@JWTM.verify_jwt
def get_budget():
    user_id = request.user_id
    budget_list = DBM.get_budget(user_id)
    return jsonify(budget_list)

@budget_bp.route('/api/delete_budget', methods=["POST"])
@cross_origin(origins=["http://localhost:5173", "http://127.0.0.1:5173", "https://happyhitech.github.io", "https://hoppscotch.io"])
@JWTM.verify_jwt
def delete_budget():
    user_id = request.user_id
    category = request.get_json()["category"]
    DBM.delete_budget(user_id, category)
    budget_list = DBM.get_budget(user_id)
    return jsonify(budget_list)
