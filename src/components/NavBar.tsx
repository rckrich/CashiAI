import { useState } from "react";
import { Navbar, Nav, Container, Dropdown, DropdownButton } from "react-bootstrap";
import logo from '../img/RCK Logo.png';

import { UnityHandler } from "./UnityHandler";

export const NavBar = () => {


  const [activeBuild, setActiveBuild] = useState(0);

  return (
    <div >
    <div style={{width: 'auto', height: 'auto', justifyContent: 'center', alignItems: 'center', display: "flex", flexDirection: "row"}}>

      <Navbar expand="md" style={{backgroundColor: "black"}} >
        <Container  >
          <Navbar.Brand>
            <img src={logo} style={{width: "100px", height: "auto"}} alt="Logo" />
          </Navbar.Brand>
          <h2 style={{color: "white", paddingTop: "20px"}}>Casino Demo</h2>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            </Nav>
            <Nav className="ms-auto">
              <DropdownButton  variant ={"secondary"} title="Games">
                <Dropdown.Item onClick={() => setActiveBuild(1)}>Egypt</Dropdown.Item>
                <Dropdown.Item onClick={() => setActiveBuild(2)}>Dragon</Dropdown.Item>
                <Dropdown.Item onClick={() => setActiveBuild(3)}>Ireland</Dropdown.Item>
                <Dropdown.Item onClick={() => setActiveBuild(4)}>Poseidon</Dropdown.Item>
                <Dropdown.Item onClick={() => setActiveBuild(5)}>Halloween</Dropdown.Item>
                </DropdownButton>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              </div>
                  <button
                        type="button" 
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href='https://rckgames.com';
                          }}
                    > Check our HomePage</button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
      <div style={{display: "flex", justifyContent: "center"}}> <UnityHandler identifier= {activeBuild}></UnityHandler> </div>

    
    </div>
  )
}
