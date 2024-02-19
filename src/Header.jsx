import React, { useState } from 'react';
import './Header.css';
// import logo from '/images/logo.png'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
      <header>
        <nav className="navbar">
          
            <div className="logo-container">
              <img src="images/Musgrave.png" alt="Logo" />
            </div> 
            <button className="hamburger" onClick={toggleNavbar}>
              &#9776; {/* Hamburger icon */}
            </button>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
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
  