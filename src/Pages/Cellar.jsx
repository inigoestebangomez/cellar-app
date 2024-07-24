import axios from "axios"
import { useEffect, useState } from "react"

import EditWineModal from "../Components/EditWineModal"
import NavBarCellar from "../Components/NavBarCellar"

// cuando abrimos en detalle cada vino: llamada a la API correspondiente
function Cellar() {
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
  return <h3>...buscando data</h3>
 }
  return (
    <div>
      <NavBarCellar />
      <h1>BODEGA</h1>
      <div>
      {inventory.map ((eachInventory, index) => {
        return (
          <div key={index} className="wine-card">
          <img src={eachInventory.image} alt="bottle-image"/>
          <h4>Bodega: {eachInventory.winery}</h4>
          <h4>Vino: {eachInventory.wine}</h4>
          <p>Año de compra: {eachInventory.fechaDeCompra}</p>
          <p>Precio por botella: {eachInventory.precio} €</p>
          <p>Cantidad: {eachInventory.cantidad} uds</p>

          <EditWineModal id ={eachInventory.id}  inFechaDeCompra={eachInventory.fechaDeCompra} inPrecio={eachInventory.precio} inCantidad={eachInventory.cantidad} getOurBottles={getOurBottles}/>

          </div>
        )
      })}
      </div>
    </div>
  )
}
export default Cellar




















