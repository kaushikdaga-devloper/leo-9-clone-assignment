import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../index.css"; // Imports navbar-specific styles

function CustomNavbar() {
  const [darkMode, setDarkMode] = useState(false);

  // This function toggles the dark-mode class on the entire page's body tag
  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand href="#">Leo9 Clone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-custom">Home</Nav.Link>
            <Nav.Link href="#services" className="nav-custom">Services</Nav.Link>
            <Nav.Link href="#portfolio" className="nav-custom">Portfolio</Nav.Link>
            <Nav.Link href="#contact" className="nav-custom">Contact</Nav.Link>
            <button
              onClick={toggleMode}
              className="btn btn-outline-secondary ms-3"
            >
              {darkMode ? "Bright" : "Dark"}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;