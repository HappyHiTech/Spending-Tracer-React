import "./SideBar.css"

import { useState } from "react";

export default function SideBar({ onComponentChange }) {
    const [componentToRender, setComponentToRender] = useState("currentMonth");

    const handleCurrentMonthClick = ()  => {
        onComponentChange("currentMonth")
    }

    const handleBudgetClick = () => {
        onComponentChange("budget")
    }

    return (
        <div className="sidebar">
            <h1 className="sidebar-logo">Spender</h1>

            <nav className="sidebar-nav">
                <a href="#" className="sidebar-link" onClick={handleCurrentMonthClick}>🏠 Spending Overview</a>
                <a href="#" className="sidebar-link" onClick={handleBudgetClick}>📊 Budget</a>
            </nav>
        </div>
    );
}