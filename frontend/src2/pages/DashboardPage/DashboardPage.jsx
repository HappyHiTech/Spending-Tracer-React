import "./DashboardPage.css"
import NavBar from '@components/layout/NavBar/Navbar.jsx'
import CurrentMonth from "./subpage/CurrentMonth/CurrentMonth";
import Budget from "./subpage/Budget/Budget";
import { SideBar } from "@features/spending";
import { useState, useEffect } from "react";

export default function DashboardPage(){
    const [activeComponent, setActiveComponent] = useState("currentMonth");

    const handleSideBarClick = (component) => {
        setActiveComponent(component);
    }

    return (
        <div className="dashboard-container">
            <NavBar />
            <section className="dashboard-section">
                <SideBar onComponentChange={handleSideBarClick}/>
                {activeComponent === 'currentMonth' && <CurrentMonth />}
                {activeComponent === "budget" && <Budget />}

            </section>
        </div>
    );
}