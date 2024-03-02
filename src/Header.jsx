// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleNavbar = () => setIsOpen(!isOpen);

//   return (
//     <header>
//       <nav className="navbar">
//         <div className="logo-container">
//           <img src="images/Musgrave.png" alt="Logo" />
//         </div>
//         <button className="hamburger" onClick={toggleNavbar}>
//           &#9776; {/* Hamburger icon */}
//         </button>
//         <ul className={`nav-links ${isOpen ? "open" : ""}`}>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/town">Town Council</Link>
//           </li>
//           <li>
//             <Link to="/community">Our Community</Link>
//           </li>
//           <li>
//             <Link to="/banting-park">Banting Memorial Park</Link>
//           </li>
//           <li>
//             <Link to="/fire">Fire Department</Link>
//           </li>
//           <li>
//             <Link to="/festival">Scuff 'n Scoff Festival</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "/images/Musgrave.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="120"
            height="120"
            className="d-inline-block align-top"
            alt="Municipality Logo"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/town">
              Town Council
            </Nav.Link>
            <Nav.Link as={Link} to="/community">
              Our Community
            </Nav.Link>
            <Nav.Link as={Link} to="/banting-park">
              Banting Memorial Park
            </Nav.Link>
            <Nav.Link as={Link} to="/fire">
              Fire Department
            </Nav.Link>
            <Nav.Link as={Link} to="/festival">
              Scuff 'n Scoff Festival
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
