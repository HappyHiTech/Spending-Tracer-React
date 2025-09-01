import "@assets/global.css"
import HomePage from "@pages/HomePage/HomePage"
import DashboardPage from "@pages/DashboardPage/DashboardPage"
import LoginPage from "@pages/LoginPage/LoginPage"
import ProtectedRoute from "@utils/ProtectedRoute"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from "@contexts/AuthContext"

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/Spending-Tracker-React/" element={<HomePage />}></Route>
                    <Route path="/Spending-Tracker-React/dashboard" element={
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                        }></Route>
                    <Route path="/Spending-Tracker-React/login" element={<LoginPage />}></Route>
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App
