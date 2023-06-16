import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="#home"><img src='https://icapgroupgmbh.com/Logo%20B%20Horizontal%20version.png' alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Start</Nav.Link>
            <Nav.Link href="#">Lösungen</Nav.Link>
            <Nav.Link href="#">Kontakt</Nav.Link>
            <Nav.Link href="#">Über uns</Nav.Link>
            <Nav.Link href="#">Impressum</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
