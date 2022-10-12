import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./Header.css";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand style={{ fontSize: "40px" }} href="/">
          Interview Scheduler
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="mar" href="/upcoming">
            <Button variant="warning">Upcoming Interviews</Button>
          </Nav.Link>
          <Nav.Link href="/schedule">
            <Button variant="success">Schedule Interviews</Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
