import './App.css'
import HomePage from './pages/HomePage/HomePage'
import DashBoardPage from './pages/DashBoardPage/DashBoardPage'
import LoginPage from './pages/LoginPage/LoginPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      
    </Router>
  )
}

export default App
