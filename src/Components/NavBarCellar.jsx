import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarCellar() {
  return (
    <div className='nav-bar-cellar'>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={ Link } to="/">Home</Nav.Link>
              <NavDropdown title= "Select Wine" id="basic-nav-dropdown">
                <NavDropdown.Item as={ Link } to="/wines/reds">Reds</NavDropdown.Item>
                <NavDropdown.Item as={ Link } to="/wines/whites">Whites</NavDropdown.Item>
                <NavDropdown.Item as={ Link } to="/wines/rose">Rose</NavDropdown.Item>
                <NavDropdown.Item as={ Link } to="/wines/sparkling">
                  Sparkling
                </NavDropdown.Item>
                <NavDropdown.Item as={ Link } to="/wines/dessert">
                  Dessert
                </NavDropdown.Item>
                <NavDropdown.Item as={ Link } to="/wines/port">Port</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={ Link } to="/about">About us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarCellar;