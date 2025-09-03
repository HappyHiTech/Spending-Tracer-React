import "./HomePage.css"
import NavBar from '@components/layout/NavBar/Navbar.jsx'


export default function HomePage(){
    return (
        <div className="homepage-container">
            <NavBar />
            <div className="homepage-hero">
                <h1 className="homepage-title">Welcome to Spender</h1>
                <p className="homepage-subtitle">Track your spending, manage your budget, and take control of your finances</p>
            </div>
        </div>
    );
}