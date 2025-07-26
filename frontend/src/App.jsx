import './App.css'
import HomePage from './pages/HomePage/HomePage'
import DashBoardPage from './pages/DashBoardPage/DashBoardPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './hooks/AuthContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashBoardPage />
            </ProtectedRoute>
            } />
            
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        
      </Router>
    </AuthProvider>
  )
}

export default App
