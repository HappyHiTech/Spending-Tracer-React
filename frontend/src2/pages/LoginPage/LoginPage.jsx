import "./LoginPage.css"
import NavBar from "@components/layout/NavBar/NavBar"
import { LoginForm } from "@features/authentication"

export default function LoginPage(){
    return (
        <div className="login-container">
            <NavBar />
            <LoginForm />
        </div>
    );
}