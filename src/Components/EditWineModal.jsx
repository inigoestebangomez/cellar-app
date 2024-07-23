import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader'

function EditWineModal({inFechaDeCompra, inPrecio, inCantidad, id }) {

//   const {params} = useParams()
// console.log({params})
  const[precio, setPrecio]= useState("")
  const[ cantidad, setCantidad] = useState("")
  const[ fechaDeCompra, setFechaDeCompra] = useState("")
  const[image, setImage]= useState("")
  const[ wine, setWine] = useState("")
  const[ winery, setWinery] = useState("")

  const [ show, setShow ] = useState (false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect(()=>{
    getData()
  },[])

  const getData = async ()=>{
    try {

      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/inventories/${id}`)

      setPrecio(response.data.precio)
      setCantidad(response.data.cantidad)
      setFechaDeCompra(response.data.fechaDeCompra)
      setImage(response.data.image)
      setWine(response.data.wine)
      setWinery(response.data.winery)
      
    } catch (error) {
      console.log(error)
    }
  };

  const handleEditWine = async (e) =>{

    e.preventDefault();

    const updatedWine = {
     fechaDeCompra,
     cantidad,
      precio
    }
try {

  await axios.put(`${import.meta.env.VITE_SERVER_URL}/inventories/${id}`,updatedWine )
  
}catch (error) {
  console.log(error) 
}

  
  };

  const deleteWine = async () =>{
    try {

      await axios.put(`${import.meta.env.VITE_SERVER_URL}/inventories/${id}`,updatedWine )
      
    }catch (error) {
      console.log(error) 
    }
    

  }

  return (
    <div>

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
          {/* <p>{location}</p> */}
          {/*  ! <p>⭐ {rating.average}</p> */}
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Existencia botellas: </Form.Label>
              <Form.Control
                type="number"
                name="cantidad"
                value={cantidad}
                placeholder={`${inCantidad}`}
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
                // placeholder= {`${inPrecio}`}
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
                // placeholder= {`${inFechaDeCompra}`}
                onChange={(e) => setFechaDeCompra(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={deleteWine}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleEditWine}>
            Editar
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )




  }
  


export default EditWineModal




// const handleModificarPrecio = (event) => setPrecio(event.target.value)
  // const handleModificarCantidad = (event) => setCantidad(event.target.value)
  // const handleModificarFechaDeCompra = (event) => setFechaDeCompra(event.target.value)

  // const handleEditWine = (event) => {
  //   event.preventDefault()

  //   const editedWine = {
  //     rating,
  //     location,
  //     winery,
  //     wine,
  //     image,
  //     precio,
  //     cantidad,
  //     fechaDeCompra
  //   }