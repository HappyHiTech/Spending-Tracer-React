import "./NavBar.css"
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();

    const handleNavigateDashboard = () => {
        console.log("Hello");
        navigate("/dashboard");
    };

    const handleNavigateHome = () => {
        navigate("/");
    };

    const handleNavigateLogin = () => { 
        navigate("/login");
    };

    return (
        <nav className="navbar-container">
            <div className="navbar-left">
                <a onClick={handleNavigateHome} className="navbar-link">Home</a>
                <a onClick={handleNavigateDashboard} className="navbar-link">Dashboard</a>
            </div>
            <div className="navbar-right">
                <a onClick={handleNavigateLogin} className="navbar-link">Login</a>
            </div>
        </nav>
    );
}