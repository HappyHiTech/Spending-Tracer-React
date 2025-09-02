from flask import Flask
from flask_cors import CORS
from app.routes import blueprints

def create_app():
    app = Flask(__name__)

    CORS(app, origins=["http://localhost:5173", "http://127.0.0.1:5173", "https://happyhitech.github.io", "https://hoppscotch.io"])
  

    for bp in blueprints:
        app.register_blueprint(bp)
    # app.register_blueprint(main_blueprint)

    return app