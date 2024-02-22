import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <li><Link to="/home-page">Home</Link></li>
            <li><Link to="/town">Town Council</Link></li>
            <li><Link to="/community">Our Community</Link></li>
            <li><Link to="/banting-park">Banting Memorial Park</Link></li> 
            <li><Link to="/fire">Fire Department</Link></li>
            <li><Link to="/festival">Scuff 'n Scoff Festival</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  