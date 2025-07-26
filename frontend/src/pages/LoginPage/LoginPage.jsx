import "./LoginPage.css"
import NavBar from "../../components/NavBar/NavBar"
import LoginForm from "./LoginForm/LoginForm";

export default function LoginPage(){
    return (
        <div className="login-container">
            <NavBar />
            <LoginForm />
        </div>
    );
}