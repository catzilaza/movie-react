import React from "react";
import './NavbarBootStepComponent.scss';
import { Navbar, Container, Nav, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarBootStepComponent() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="md">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="./global.png"
            width={"50px"}
            height={"50px"}
            alt="logo"
          ></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/netflixclone">
              NetflixClone
            </Nav.Link>
            <Nav.Link as={Link} to="/todo">
              Todo List
            </Nav.Link>
            <Nav.Link as={Link} to="/dessert">
              Dessert Online-Store
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Link
          id="linkToRegister"
          to="/register"
          // style={{
          //   border: "1px solid #737373",
          //   borderRadius: "5px",
          //   padding: "0.5rem 1rem",
          //   textDecoration: "none",
          //   color: "#fff",
          // }}

        >
          Register
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavbarBootStepComponent;
