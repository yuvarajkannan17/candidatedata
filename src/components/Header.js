import React from "react";
import { useLocation, Link } from "react-router-dom"; // Import React Router hooks and Link
import "../styles/Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = ({ userName }) => {
  // const firstLetter = userName ? userName[0].toUpperCase() : "Y";
  const location = useLocation(); // Get the current route

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <Navbar
      variant="dark"
      expand="lg"
      style={{ backgroundColor: "#1C2FBA" }}
      className="header-navbar"
    >
      <Container className="d-flex justify-content-between align-items-center">
        {/* Left Side: Logo and Title */}
        <div className="d-flex align-items-center">
          <img
            src="/assets/chiselonlogo.png"
            alt="Chiselon Logo"
            className="logo-img"
          />
          <div className="title">
            <div className="title-main">Chiselon</div>
            <div className="title-sub">Recruitment Process Outsourcing</div>
          </div>
        </div>

        {/* Right Side: Navbar */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-link-item ${isActive("/") ? "active-link" : ""}`}
            >
              Add Candidate
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/search-candidate"
              className={`nav-link-item ${
                isActive("/search-candidate") ? "active-link" : ""
              }`}
            >
              Search Candidate
            </Nav.Link>
            <Nav.Link
              as={Link}
              
              className="nav-link-item logout-link"
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
