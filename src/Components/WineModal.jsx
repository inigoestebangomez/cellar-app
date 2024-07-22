import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader'

function WineModal({winery, wine, rating, location, image}) {
  
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
      precio: precio
    }
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/inventories`, addBottleToCellar)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Button className="" variant="primary" onClick={handleShow}>
        Más detalles
      </Button>

      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <Modal.Title>Añadir a bodega:</Modal.Title>
        </ModalHeader>
        <Modal.Body>
        <img src={image} alt="bottle-image"/>
          <h4>Bodega: {winery}</h4>
          <h4>Vino: {wine}</h4>    
          <p>{location}</p>
          <p>⭐ {rating.average}</p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Añadir botellas: </Form.Label>
              <Form.Control
                type="number"
                name="cantidad"
                value={cantidad}
                placeholder="número de botellas"
                onChange={(e) => setCantidad(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Precio por botella: </Form.Label>
              <Form.Control
                type="number"
                name="precio"
                value={precio}
                placeholder= "precio por botella"
                onChange={(e) => setPrecio(e.target.value)}

                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Año de compra: </Form.Label>
              <Form.Control
                type="number"
                name="fechaDeCompra"
                value={fechaDeCompra}
                placeholder= "año de compra"
                onChange={(e) => setFechaDeCompra(e.target.value)}

                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleAddCellar}>
            Añadir a bodega
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default WineModal