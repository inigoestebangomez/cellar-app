import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader'

function WineModal({winery, wine, rating, location, image}) {
  
  const navigate = useNavigate();

  const [ fechaDeCompra, setFechaDeCompra ] = useState("")
  const [ cantidad, setCantidad ] = useState("")
  const [ precio, setPrecio ] = useState("")
  const [ show, setShow ] = useState (false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCellar = async (e) => {
    e.preventDefault();

    const addBottleToCellar = {
      fechaDeCompra: fechaDeCompra,
      cantidad: cantidad,
      precio: precio,
      image: image,
      wine: wine,
      winery: winery
    }
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/inventories`, addBottleToCellar)
      
      navigate(`/cellar`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Button className="" variant="primary" onClick={handleShow}>
      Add to cellar
      </Button>

      <Modal show={show} onHide={handleClose} bg="light" data-bs-theme="dark">
        <ModalHeader closeButton>
          <Modal.Title className="bg-dark text-white">Add to cellar:</Modal.Title>
        </ModalHeader>
        <Modal.Body className="bg-dark text-white">
        <div style={{display: "flex", justifyContent: "center"}}>
        <img src={image} alt="bottle-image"/>
        </div>
          <h4>Winery: {winery}</h4>
          <h4>Wine: {wine}</h4>    
          <p>{location}</p>
          <p>⭐ {rating.average}</p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Add bottles: </Form.Label>
              <Form.Control
                type="number"
                name="cantidad"
                value={cantidad}
                placeholder="For example: 10"
                onChange={(e) => setCantidad(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price per bottle: </Form.Label>
              <Form.Control
                type="number"
                name="precio"
                value={precio}
                placeholder= "For example: 120"
                onChange={(e) => setPrecio(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Purchase year: </Form.Label>
              <Form.Control
                type="number"
                name="fechaDeCompra"
                value={fechaDeCompra}
                placeholder= "For example: 2024"
                onChange={(e) => setFechaDeCompra(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleAddCellar}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default WineModal