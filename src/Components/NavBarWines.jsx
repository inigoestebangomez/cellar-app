import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarWines({type}) {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={ Link } to="/">Pagina de inicio</Nav.Link>
              <Nav.Link as={ Link } to="/cellar">Cellar</Nav.Link>
              <NavDropdown title={`${type}`} id="basic-nav-dropdown">
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

export default NavBarWines;
