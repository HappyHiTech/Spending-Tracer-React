from flask import Flask, request, Response, Blueprint, jsonify

main = Blueprint('main', __name__)



@main.route('/api/message')
def temp():
    print("hellooo")
    return Response("OK", status=200)