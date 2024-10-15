// export default Header;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "/images/Musgrave.png";
import "./Header.css";
import { useAuth } from "../AuthContext";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const { user, logout } = useAuth();

  return (
    <Navbar bg="light" expand="lg" sticky="top" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/TownOfMusgraveHarbour">
          <img
            src={logo}
            width="150"
            height="150"
            className="d-inline-block align-top"
            alt="Municipality Logo"
          />{" "}
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          <FontAwesomeIcon icon={expanded ? faTimes : faBars} />
        </Navbar.Toggle>
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

            {user && (
              <NavDropdown title="Office Login" id="office-login-dropdown">
                <NavDropdown.Item as={Link} to="/staff-timesheet">
                  Staff Timesheets
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/council-availability">
                  Meeting Availability
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/reminders">
                  Reminders
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/staff-schedule">
                  Staff Work Schedule
                </NavDropdown.Item>
                <NavDropdown.Item as={Button} onClick={logout}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
