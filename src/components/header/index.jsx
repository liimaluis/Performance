import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";

import banner from "../../imgs/banner.png";
import "./header.css";

function Header() {
  return (
    <header>
      <nav>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Performance</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  href="https://sobreperformanceoc.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conheça mais sobre nós
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#agnição">
                  Empresas com profunda agnição
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>

      <img className="bannerimg" src={banner} alt="banner"></img>
    </header>
  );
}

export default Header;
