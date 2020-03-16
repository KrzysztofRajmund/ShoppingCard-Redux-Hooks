import React from "react";
import {
  Navbar,
  Nav
} from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
        {/* FOOTER TOP */}
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Promo</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav className="mr-5">
          <Nav.Link href="#home">Facebook</Nav.Link>
          <Nav.Link href="#features">Tweeter</Nav.Link>
        </Nav>
      </Navbar>
    </footer>
  );
};

export default Footer;
