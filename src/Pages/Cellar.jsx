import axios from "axios"
import { useEffect, useState } from "react"

// en el cellar hay que añadir información de imagen y nombre
// cuando abrimos en detalle cada vino: llamada a la API correspondiente


function Cellar() {

 const [ inventory, setInventory ] = useState( null )
console.log(inventory)

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
          
          </div>
        )
      })}
      </div>
    </div>
  )
}
export default Cellar

