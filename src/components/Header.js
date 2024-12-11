// src/components/Header.jsx
import React from 'react';
import "../styles/Header.css";
import { Navbar, Container } from 'react-bootstrap'; // Importing Bootstrap components

const Header = ({ userName }) => {
  const firstLetter = userName ? userName[0].toUpperCase() : 'Y'; // Get the first letter of the user name

  return (
    <Navbar variant="dark" className="" style={{ backgroundColor: '#1C2FBA' }}>
      <Container className="d-flex justify-content-between align-items-center">
        {/* Left side: Logo */}
        <div className="logo">
          <img
            src="/assets/chiselonlogo.png" // Use your logo image URL
            alt="Chiselon Logo"
            className="logo-img"
          />
        </div>

        {/* Middle: Title */}
        <Navbar.Brand className="mx-auto">Candidate Data</Navbar.Brand>

        {/* Right side: User Avatar */}
        <div className="user-avatar">
          <span className="avatar-text">{firstLetter}</span>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
