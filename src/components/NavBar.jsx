import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import AddListingButton from "./AddListingButton.jsx";
import InlineSearch from "./InlineSearch";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home">Where Dreams Connect</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <InlineSearch />
            <Nav className="mr-auto text-muted font-weight-bold">
              <Nav.Link href="#home">How It Works</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <AddListingButton />
            </Nav>
          </Navbar.Collapse>

          <Nav.Link
            href="#login"
            className="mr-auto text-muted font-weight-bold"
          >
            Log In
          </Nav.Link>
          <Button
            variant="warning"
            className="mr-auto text-muted font-weight-bold"
          >
            Sign Up
          </Button>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
