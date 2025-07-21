import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="nav-link">Home</a>
        <a href="/dashboard" className="nav-link">Dashboard</a>
      </div>
      <div className="navbar-right">
        <a href="/login" className="nav-link">Login</a>
      </div>
    </nav>
  );
};

export default NavBar;