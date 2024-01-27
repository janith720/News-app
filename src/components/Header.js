import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { otherPages } from "../App";

export default function Header({ handleCat }) {
  return (
    <div>
      <Navbar
        onToggle={() => console.log("Toggle")}
        onSelect={(eventKey) => console.log(eventKey)}
        collapseOnSelect
        expand="sm"
        style={{ backgroundColor: "black" }}
      >
        <Container>
          <Navbar.Brand style={{ color: "white" }} href="/">
            WAVE OF NEWS
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ borderColor: "white", fontSize: "20px" }}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {otherPages.map((val, key) => {
                return (
                  <NavLink
                    key={key}
                    activeStyle={{
                      color: "#EF5350",
                      backgroundColor: "#212121",
                    }}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                    to={val.path}
                    onClick={handleCat}
                  >
                    {val.title}
                  </NavLink>
                );
              })}
            </Nav>

            <Nav>
              <NavDropdown id="collasible-nav-dropdown"></NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
