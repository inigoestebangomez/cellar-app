import axios from "axios"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner';
import EditWineModal from "../Components/EditWineModal"
import NavBarCellar from "../Components/NavBarCellar"
import Footer from "../Components/Footer";
import logo2 from '../images/WineWhite.png'
import { Link } from "react-router-dom";
import SearchAndFilter from "../Components/SearchAndFilter";


// cuando abrimos en detalle cada vino: llamada a la API correspondiente
function Cellar({type}) {
 const [ inventory, setInventory ] = useState( null )

 const [searchWine, setSearchWine] = useState("");
 const [ searchLocation, setSearchLocation ] = useState(
   {
     spain: false,
   france: false,
   portugal: false,
   unitedStates: false,
   italy: false,
   argentina: false,
   chile: false,
   canada: false,
   australia: false,
   southAfrica: false,
   macedonia: false,
   switzerland: false,
   germany: false,
   austria: false,
   hungary: false,
   newZealand: false,
   }
 )
 const handleCheckBox = (event) => {
  console.log(event.target.value)
  setSearchLocation({ 
     ...searchLocation,
    [event.target.name]: event.target.checked
  })
}
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
      <Link to= "/"><img className="logo" src={logo2} alt="logo-web" style={{width: "70px"}} /></Link>
      <NavBarCellar type={type}/>
      <SearchAndFilter setSearchWine={setSearchWine} handleCheckBox={handleCheckBox} searchLocation={searchLocation}/>
      <h1 className="title-cellar">CELLAR</h1>
      <div className="list-cards">
      {inventory.filter((eachInventory) => {
          return eachInventory.wine.toLowerCase().includes(searchWine.toLowerCase());
        }).filter((eachInventory) => {
          // return Object.values(searchLocation).includes(true) ? searchLocation[eachInventory.location.toLowerCase().slice(0, eachInventory.location.indexOf("·")).trim()] : true
          
           const locationClean = eachInventory.location.toLowerCase().slice(0, eachInventory.location.indexOf("·")).trim()
          // console.log(locationClean)
          // console.log(searchLocation.spain)
          // searchLocation.spain => nos dirá true o false
          // eachInventory.location => nos dirá spain. portugal, italia...
          // si todos los checks son falsos retorna todos los vinos
          if ( searchLocation.spain === false && searchLocation.france === false && searchLocation.portugal === false  && searchLocation.unitedStates === false && searchLocation.italy === false && searchLocation.argentina === false && searchLocation.chile === false && searchLocation.canada === false && searchLocation.australia === false && searchLocation.southAfrica === false && searchLocation.macedonia === false && searchLocation.switzerland === false && searchLocation.germany === false && searchLocation.austria === false && searchLocation.hungary === false && searchLocation.newZealand === false ){
            return true
          } 
          else if( locationClean === "spain" && searchLocation.spain === true ){
            return true
          } else if( locationClean === "france" && searchLocation.france === true ){
            return true
          } else if( locationClean === "portugal" && searchLocation.portugal === true ){
            return true
          } else if( locationClean === "united states" && searchLocation.unitedStates === true ){
            return true
          } else if( locationClean === "italy" && searchLocation.italy === true ){
            return true
          } else if( locationClean === "argentina" && searchLocation.argentina === true ){
            return true
          } else if( locationClean === "chile" && searchLocation.chile === true ){
            return true
          } else if( locationClean === "canada" && searchLocation.canada === true ){
            return true
          } else if( locationClean === "australia" && searchLocation.australia === true ){
            return true
          }else if( locationClean === "south africa" && searchLocation.southAfrica === true ){
            return true
          }else if( locationClean === "macedonia" && searchLocation.macedonia === true ){
            return true
          } else if( locationClean === "switzerland" && searchLocation.switzerland === true ){
            return true
          } else if( locationClean === "germany" && searchLocation.germany === true ){
            return true
          } else if( locationClean === "austria" && searchLocation.austria === true ){
            return true
          } else if( locationClean === "hungary" && searchLocation.hungary === true ){
            return true
          } else if( locationClean === "new zealand" && searchLocation.newZealand === true ){
            return true
          } else {
            return false
          }
          

        }).map ((eachInventory, index) => {
        return (
          <div key={index} className="wine-card-cellar">
          <img src={eachInventory.image} alt="bottle-image" style={{width: 80, height:300}}/>
          <h5><span className="winery">Winery: </span>{eachInventory.winery}</h5>
          <h5><span className="winery">Wine: </span>{eachInventory.wine}</h5>
          <p>📍 {eachInventory.location}</p>
          <p><span>Purchase year: </span>{eachInventory.fechaDeCompra}</p>
          <p><span>Price per bottle: </span>{eachInventory.precio} €</p>
          <p><span>Quantity: </span>{eachInventory.cantidad} units</p>

          <EditWineModal id ={eachInventory.id} inFechaDeCompra={eachInventory.fechaDeCompra} inPrecio={eachInventory.precio} inCantidad={eachInventory.cantidad} getOurBottles={getOurBottles}/>
          </div>
        )
      })}
      </div>
      <Footer />
    </div>
  )
}
export default Cellar




















