import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarWines({type}) {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Cellar Web</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Pagina de inicio</Nav.Link>
              <Nav.Link href="/cellar">Cellar</Nav.Link>
              <NavDropdown title={`${type}`} id="basic-nav-dropdown">
                <NavDropdown.Item href="/wines/reds">Reds</NavDropdown.Item>
                <NavDropdown.Item href="/wines/whites">Whites</NavDropdown.Item>
                <NavDropdown.Item href="/wines/rose">Rose</NavDropdown.Item>
                <NavDropdown.Item href="/wines/sparkling">
                  Sparkling
                </NavDropdown.Item>
                <NavDropdown.Item href="/wines/dessert">
                  Dessert
                </NavDropdown.Item>
                <NavDropdown.Item href="/wines/port">Port</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarWines;
