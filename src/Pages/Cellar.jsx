import axios from "axios"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner';
import EditWineModal from "../Components/EditWineModal"
import NavBarCellar from "../Components/NavBarCellar"

// cuando abrimos en detalle cada vino: llamada a la API correspondiente
function Cellar({type}) {
 const [ inventory, setInventory ] = useState( null )
 useEffect(() => {
  getOurBottles()
 }, [])
 const getOurBottles = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/inventories`)
    setInventory(response.data)
  } catch (error) {
  console.log(error)
 }
}
 if ( inventory === null){
  return <Spinner animation="grow" />;
 }
  return (
    <div className="cellar">
      <NavBarCellar type={type}/>
      <h1 className="title-cellar">CELLAR</h1>
      <div>
      {inventory.map ((eachInventory, index) => {
        return (
          <div key={index} className="wine-card-cellar">
          <img src={eachInventory.image} alt="bottle-image"/>
          <h4><span className="winery">Winery: </span>{eachInventory.winery}</h4>
          <h4><span className="winery">Wine: </span>{eachInventory.wine}</h4>
          <p><span>Purchase year: </span>{eachInventory.fechaDeCompra}</p>
          <p><span>Price per bottle: </span>{eachInventory.precio} €</p>
          <p><span>Quantity: </span>{eachInventory.cantidad} units</p>

          <EditWineModal id ={eachInventory.id}  inFechaDeCompra={eachInventory.fechaDeCompra} inPrecio={eachInventory.precio} inCantidad={eachInventory.cantidad} getOurBottles={getOurBottles}/>
          </div>
        )
      })}
      </div>
    </div>
  )
}
export default Cellar




















