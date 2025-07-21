import "./HomePage.css"

export default function HomePage(){
    return (
        <div className="homepage-container">
            <nav className="navbar">
                <div className="nav-brand">
                    <h2>MyApp</h2>
                </div>
                <div className="nav-links">
                    <a href="#" className="nav-link active">Home</a>
                    <a href="#" className="nav-link">Login</a>
                </div>
            </nav>
            <main className="main-content">
                <h1>Hello</h1>
            </main>
        </div>
    );
}