import "./DashboardPage.css"
import NavBar from '@components/layout/NavBar/Navbar.jsx'
import CurrentMonth from "./subpage/CurrentMonth/CurrentMonth";
import { SideBar } from "@features/spending";

export default function DashboardPage(){
    return (
        <div className="dashboard-container">
            <NavBar />
            <section className="dashboard-section">
                <SideBar />
                <CurrentMonth />
            </section>
        </div>
    );
}