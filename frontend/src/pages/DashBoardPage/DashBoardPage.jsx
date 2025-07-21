import "./DashBoardPage.css"
import NavBar from "../../components/NavBar/NavBar"
import SideBar from "./SideBar/SideBar";

export default function DashBoardPage(){
    return (
        <div className="dashboard-container">
            <NavBar />
            <section className="dashboard-section">
                <SideBar />
            </section>
        </div>
    );
}