import "./LoginForm.css";
import { useState, useRef } from "react";
import { useAuth } from "../../../hooks/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const { login, isLoggedIn } = useAuth();
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        
        let hasErrors = false;
        let passwordErrors = [];
        
        // Validate username is not empty
        if (!username.trim()) {
            setUsernameError("Username cannot be empty");
            hasErrors = true;
        } else {
            setUsernameError("");
        }
        
        // Validate password is not empty
        if (!password.trim()) {
            passwordErrors.push("Password cannot be empty");
            hasErrors = true;
        }
        
        // Validate passwords match
        if (password !== confirmPassword) {
            passwordErrors.push("Passwords do not match");
            hasErrors = true;
        }
        
        // Set password error message
        if (passwordErrors.length > 0) {
            setPasswordError(passwordErrors.join(", "));
        } else {
            setPasswordError("");
        }
        
        if (hasErrors) {
            return;
        }
        
        console.log("Sign Up");

        fetch("http://127.0.0.1:5000/api/signup", {
            method: "POST",
            body: new FormData(e.target)
        })
            .then((response) => {
                console.log(response)
            })
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        console.log("Login in")

         fetch("http://127.0.0.1:5000/api/login", {
            method: "POST",
            body: new FormData(e.target)
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                login(data.token)
            })
            .then(() => {
                console.log("SJF:LKFJDF")
                console.log(isLoggedIn.current)
                if (isLoggedIn.current) {
                    navigate("/dashboard")
                }
            })

        

    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        if (usernameError) setUsernameError("");
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (passwordError) setPasswordError("");
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (passwordError) setPasswordError("");
    }

    return (
        <div className="login-form-container">
            <header className="login-form-header">
                <h1 className="login-form-title">{isSignup ? "Sign Up" : "Login"}</h1>
            </header>
            <section className="login-form-section">
                <form className="login-form-form" onSubmit={isSignup ? handleSignUp : handleLogIn}>
                    <div className="login-form-input">
                        <label htmlFor="username" className="login-form-input-title">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            className="login-form-input-box" 
                            placeholder="Enter your username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className="login-form-input">
                        <label htmlFor="password" className="login-form-input-title">Password</label>
                        <div className="password-input-container">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                id="password" 
                                name="password" 
                                className="login-form-input-box password-input" 
                                placeholder="Enter your password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <button 
                                type="button" 
                                className="password-toggle-btn"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "👁️" : "👁️‍🗨️"}
                            </button>
                        </div>
                    </div>
                    {isSignup && (
                        <div className="login-form-input">
                            <label htmlFor="confirm" className="login-form-input-title">Confirm Password</label>
                            <div className="password-input-container">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    id="confirm" 
                                    name="confirm" 
                                    className="login-form-input-box password-input" 
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                />
                                <button 
                                    type="button" 
                                    className="password-toggle-btn"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "👁️" : "👁️‍🗨️"}
                                </button>
                            </div>
                            <div className="error-messages">
                                {usernameError && <div className="username-error">{usernameError}</div>}
                                {passwordError && <div className="password-error">{passwordError}</div>}
                            </div>
                        </div>
                    )}
                    <button type="submit" className="login-form-submit-btn">{isSignup ? "Sign Up" : "Login"}</button>
                </form>
                <div className="login-form-toggle">
                    {isSignup ? (
                        <span>Already have an account? <button type="button" onClick={() => setIsSignup(false)}>Login</button></span>
                    ) : (
                        <span>Don't have an account? <button type="button" onClick={() => setIsSignup(true)}>Sign Up</button></span>
                    )}
                </div>
            </section>
        </div>
    );
}