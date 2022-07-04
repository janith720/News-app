import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavLinks = [
  {
    title: "Business",
    link: "/business",
    new: "business",
  },
  {
    title: "Entertainment",
    link: "/entertainment",
    new: "entertainment",
  },
  
  {
    title: "Health",
    link: "/health",
    new: "health",
  },
  {
    title: "Science",
    link: "/science",
    new: "science",
  },
  {
    title: "Sports",
    link: "/sports",
    new: "sports",
  },
  {
    title: "Technology",
    link: "/technology",
    new: "technology",
  },
];

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
              {NavLinks.map((val, key) => {
                return (
                  <NavLink
                    key={key}
                    activeStyle={{
                      //fontWeight: "bold",
                      color: "#EF5350",
                      backgroundColor: "#212121",

                    }}
                    onClick={handleCat}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                    to={val.link}

                  >
                    {val.title}
                  </NavLink>
                  
                  // <Link
                   
                  //   key={key}
                  //   to={val.link}
                  //   style={{
                  //     color: "white",
                  //     textDecoration: "none",
                  //     paddingLeft: "10px",
                  //     paddingRight: "10px",
                  //   }}
                  //   onClick={handleCat}
                  // >
                  //   {val.title}
                  // </Link>
                );
              })}
            </Nav>

            <Nav>
              <NavDropdown
                //title={<span style={{color: 'white'}}>Country ({country})</span>}
                id="collasible-nav-dropdown"
              >
                {/* {dropItems.map((val,key) => {
                            return(
                                <NavDropdown.Item key={key} country={country} onClick={() => setCountry(val.tag)}>{val.dropName}</NavDropdown.Item>
                            )
                        })} */}
                {/* href="#action/3.1" */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
