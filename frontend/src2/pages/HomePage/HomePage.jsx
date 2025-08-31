import "./HomePage.css"
import NavBar from '@components/layout/NavBar/Navbar.jsx'


export default function HomePage(){
    return (
        <div className="homepage-container">
            <NavBar />
            <h1>Home</h1>
        </div>
    );
}