import React from 'react';
import './Header.css';
// import logo from '/images/logo.png'

function Header() {
    return (
      <header>
        <nav className="navbar">
          <div>
            <div className="logo-container">
              <img src="public/images/musgrave.png" alt="Logo" />
            </div> 
          </div>
          <ul className="nav-links">
            <li><a href="#welcome-section">Home</a></li>
            <li><a href="#town">Town Council</a></li>
            <li><a href="#community">Our Community</a></li>
            <li><a href="#park">Banting Memorial Park</a></li>
            <li><a href="#fire">Fire Department</a></li>
            <li><a href="#festival">Scuff 'n Scoff Festival</a></li>
            <li><a href="#contact-section">Contact Us</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  