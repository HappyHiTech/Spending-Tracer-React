import "./DashBoardPage.css"
import NavBar from "../../components/NavBar/NavBar"
import SideBar from "./SideBar/SideBar";
import CurrentMonth from "./CurrentMonth/CurrentMonth";
import { UploadProvider, useUpload } from "../../hooks/UploadContext";

export default function DashBoardPage(){
    return (
        <div className="dashboard-container">
            <UploadProvider>
                <NavBar />
                <section className="dashboard-section">
                    <SideBar />
                    <CurrentMonth />
                </section>
            </UploadProvider>
            
        </div>
    );
}