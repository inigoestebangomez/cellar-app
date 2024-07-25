import { useEffect, useState } from "react";
import axios from "axios";
import WineModal from "../Components/WineModal";
import NavBarWines from "../Components/NavBarWines";
import SearchAndFilter from "../Components/SearchAndFilter";
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";

function WinesList() {
  const {type} = useParams()

  const [wines, setWines] = useState(null);
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
  const [ classVisible, setClassVisible ] = useState("wine-card-invisible")
  
  const handleCheckBox = (event) => {
    console.log(event.target.value)
    setSearchLocation({ 
       ...searchLocation,
      [event.target.name]: event.target.checked
    })
}

  useEffect(() => {
    getData();
  }, [type]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.sampleapis.com/wines/${type}`
      );
      console.log(response);
      setWines(response.data);

      setTimeout(() => {
          setClassVisible("wine-card-visible")
      }, 1) // esto es para forzar que primero se renderize invisible y luego visible, causando la transición de css

    } catch (error) {
      console.log(error);
    }
  };
  if (wines === null) {
    return <Spinner animation="grow" />;
  }
// queremos que si type es red, el classname del div es el background de wine-red
// si type es white, classname es wine-white... etc

  return (
    <div className={`container-wine-list ${type}`}>
      <NavBarWines />
      <SearchAndFilter wines={wines} setSearchWine={setSearchWine} handleCheckBox={handleCheckBox} searchLocation={searchLocation}/>
      {wines
        .filter((eachWine) => {
          return eachWine.wine.toLowerCase().includes(searchWine.toLowerCase());
        }).filter((eachWine) => {
          // return Object.values(searchLocation).includes(true) ? searchLocation[eachWine.location.toLowerCase().slice(0, eachWine.location.indexOf("·")).trim()] : true
          
           const locationClean = eachWine.location.toLowerCase().slice(0, eachWine.location.indexOf("·")).trim()
          // console.log(locationClean)
          // console.log(searchLocation.spain)
          // searchLocation.spain => nos dirá true o false
          // eachWine.location => nos dirá spain. portugal, italia...
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
          

        }).map((eachWine, index) => {
          return (
            <div key={index} className={`wine-card ${classVisible}`}>
              <img src={eachWine.image} alt="bottle-image" />
              <h4>Winery: {eachWine.winery}</h4>
              <h4>Wine: {eachWine.wine}</h4>
              <p>📍 {eachWine.location}</p>
              <p>⭐ {eachWine.rating.average}</p>
              <WineModal
                winery={eachWine.winery}
                wine={eachWine.wine}
                rating={eachWine.rating}
                location={eachWine.location}
                image={eachWine.image}
              />
            </div>
          );
        })}
    </div>
  );
}

export default WinesList;
