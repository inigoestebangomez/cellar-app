import NavBarAbout from "../Components/NavBarAbout";
import { useState } from "react";
import Footer from "../Components/Footer";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { Link } from "react-router-dom";
import logo3 from '../images/WineRose.png'

function About() {

  const [ show, setShow ] = useState (false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Link to= "/"><img className="logo" src={logo3} alt="logo-web" style={{width: "70px"}} /></Link>
      <NavBarAbout />
<div className="container-names">
<h2>Iñigo Esteban Gómez</h2>
<Button className="button-about-me" size="sm" variant="primary" onClick={handleShow}>
      Meet me!
      </Button>
      <Modal show={show} onHide={handleClose} bg="light" data-bs-theme="dark">
        <ModalHeader closeButton>
          <Modal.Title className="bg-dark text-white">Follow me:</Modal.Title>
        </ModalHeader>
        <Modal.Body className="bg-dark text-white">
          <Link to= "https://www.linkedin.com/in/inigo-esteban-gomez/"><h6>LinkedIn</h6></Link>
          <Link to= "https://github.com/inigoestebangomez?tab=repositories"><h6>GitHub</h6></Link>
        </Modal.Body>
      </Modal>

<h2>Félix Romero González</h2>
<Button className="button-about-me" size="sm" variant="primary" onClick={handleShow}>
      Meet me!
      </Button>
      <Modal show={show} onHide={handleClose} bg="light" data-bs-theme="dark">
        <ModalHeader closeButton>
          <Modal.Title className="bg-dark text-white">Follow me:</Modal.Title>
        </ModalHeader>
        <Modal.Body className="bg-dark text-white">
          <Link to= "https://www.linkedin.com/in/f%C3%A9lix-romero-gonz%C3%A1lez-731670319/"><h6>LinkedIn</h6></Link>
          <Link to= "https://github.com/FelixFS3D"><h6>GitHub</h6></Link>
        </Modal.Body>
      </Modal>
</div>

<Footer />
    </div>
  )
}

export default About
