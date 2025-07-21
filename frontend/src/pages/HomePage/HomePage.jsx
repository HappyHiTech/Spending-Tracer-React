import "./HomePage.css"

import NavBar from "../../components/NavBar/NavBar";

export default function HomePage(){
    return (
        <div className="homepage-container">
            <NavBar />
            <h1>Home</h1>
        </div>
    );
}