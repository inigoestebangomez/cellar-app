import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";

function EditWineModal({ getOurBottles, id }) {

  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [fechaDeCompra, setFechaDeCompra] = useState("");
  const [image, setImage] = useState("");
  const [wine, setWine] = useState("");
  const [winery, setWinery] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/inventories/${id}`
      );

      setPrecio(response.data.precio);
      setCantidad(response.data.cantidad);
      setFechaDeCompra(response.data.fechaDeCompra);
      setImage(response.data.image);
      setWine(response.data.wine);
      setWinery(response.data.winery);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditWine = async (e) => {
    e.preventDefault();

    const updatedWine = {
      image,
      wine,
      winery,
      fechaDeCompra,
      cantidad,
      precio,
    };
    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/inventories/${id}`,
        updatedWine
      );
      handleClose();
      getOurBottles();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteWine = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/inventories/${id}`
      );
      handleClose();
      getOurBottles()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="edit-modal">
      <Button className="edit-button-modal" variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} bg="light" data-bs-theme="dark">
        <ModalHeader closeButton>
          <Modal.Title className="bg-dark text-white">Edit inventory:</Modal.Title>
        </ModalHeader>
        <Modal.Body className="bg-dark text-white">
          <div style={{display: "flex", justifyContent: "center"}}>
          <img src={image} alt="bottle-image" />
          </div>
          <h4>Winery: {winery}</h4>
          <h4>Wine: {wine}</h4>
          {/* <p>{location}</p> */}
          {/*  ! <p>⭐ {rating.average}</p> */}
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Bottle stock: </Form.Label>
              <Form.Control
                type="number"
                name="cantidad"
                value={cantidad}
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
                onChange={(e) => setFechaDeCompra(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button-save" variant="primary" onClick={handleEditWine}>
            Save
          </Button>
        </Modal.Footer>
        <Modal.Footer>
          <Button className="button-delete" type="button" class="btn btn-outline-delete" variant="danger" onClick={handleDeleteWine}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditWineModal;
