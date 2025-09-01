import "./NavBar.css"
import { useNavigate } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext.jsx";

export default function NavBar() {
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useAuth();

    const handleNavigateDashboard = () => {
        navigate("/Spending-Tracker-React/dashboard");
    };

    const handleNavigateHome = () => {
        navigate("/Spending-Tracker-React");
    };

    const handleNavigateLogin = () => { 
        navigate("/Spending-Tracker-React/login");
    };

    const handleLogout = () => {
        logout();
        navigate("/Spending-Tracker-React/");
    };

    return (
        <nav className="navbar-container">
            <div className="navbar-left">
                <a onClick={handleNavigateHome} className="navbar-link">Home</a>
                <a onClick={handleNavigateDashboard} className="navbar-link">Dashboard</a>
            </div>
            <div className="navbar-right">
                {isLoggedIn.current ? (
                    <a onClick={handleLogout} className="navbar-link">Logout</a>
                ) : (
                    <a onClick={handleNavigateLogin} className="navbar-link">Login</a>
                )}
            </div>
        </nav>
    );
}