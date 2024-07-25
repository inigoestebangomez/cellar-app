import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo1 from '../images/WineRed.png'
import logo2 from '../images/WineWhite.png'
import logo3 from '../images/WineRose.png'
import logo4 from '../images/WinePort.png'

function NavBarWines() {

  const {type} = useParams()

  return (
    <div className={`${type}`}> 
    <img src={logo1} alt="logo-web" style={{width: "72px"}} />
    <div className={`nav-bar-wines`}>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={ Link } to="/">Home</Nav.Link>
              <Nav.Link as={ Link } to="/cellar">Cellar</Nav.Link>
              <NavDropdown title={`${type[0].toLocaleUpperCase() + type.slice(1)}`} id="basic-nav-dropdown">
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
    </div>
  );
}

export default NavBarWines;
