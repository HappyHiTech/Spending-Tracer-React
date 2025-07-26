from dotenv import load_dotenv, find_dotenv
from functools import wraps
from flask import request, jsonify
import jwt
import datetime
import os

class JWTManager():
    def __init__(self):
        load_dotenv(find_dotenv())
        self._secret_key = os.environ.get("JWT_SECRET_KEY")

    def generate_JWT(self, user_id, username):
        payload = {
            'user_id': user_id,
            'username': username,
            'exp': datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(hours=1),
            "iat": datetime.datetime.now(datetime.timezone.utc)
        }

        token = jwt.encode(payload, self._secret_key, algorithm="HS256")
        return token
    
    def verify_jwt(self, f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            # Get token from Authorization header
            
            auth_header = request.headers.get('Authorization')

            if not auth_header:
                return jsonify({'error': "No Token provided"}), 401
                
            
            try:
                
                #Extract token from "Bearer <token>"
                token = auth_header.split(' ')[1]
                #verify and decode the token
                payload = jwt.decode(token, self._secret_key, algorithms=["HS256"])
                #Add user info to request context
                request.user_id = payload['user_id']
                
                request.user_username = payload['username']
                return f(*args, **kwargs)
            except jwt.ExpiredSignatureError:
                return jsonify({"error": "Token has expired"}), 401
            except jwt.InvalidTokenError:
                return jsonify({"error": "Invalid token"}), 401
            except Exception as e:
                return jsonify({"error": "Token verification failed"}), 401
            
        return decorated_function

# JWTM = JWTManager()
