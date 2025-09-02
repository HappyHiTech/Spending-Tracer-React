from .auth_routes import auth_bp
from .items_routes import item_bp
from .stats_routes import stats_bp
from .budget_routes import budget_bp

blueprints = [auth_bp, item_bp, stats_bp, budget_bp]