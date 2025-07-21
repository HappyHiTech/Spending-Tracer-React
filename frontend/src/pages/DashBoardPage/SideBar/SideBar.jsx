import "./SideBar.css"

export default function SideBar() {
    return (
        <div className="sidebar">
            <h1 className="sidebar-logo">Spender</h1>

            <nav className="sidebar-nav">
                <a href="#" className="sidebar-link">🏠 Current Month</a>
                <a href="#" className="sidebar-link">📅 Previous Months</a>
                <a href="#" className="sidebar-link">📊 Stats</a>
            </nav>
        </div>
    );
}