import { useEffect, useState } from "react";
import axios from "axios";
import WineModal from "../Components/WineModal";
import NavBarWines from "../Components/NavBarWines";
import SearchAndFilter from "../Components/SearchAndFilter";

function WinesList({ type }) {
  const [wines, setWines] = useState(null);
  const [searchWine, setSearchWine] = useState("");
  const [ searchLocation, setSearchLocation ] = useState(
    {
      spain: false,
      france: false,
      portugal: false,
      unitedStates: false,
      italy: false,
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
    getData();
  }, [type]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.sampleapis.com/wines/${type}`
      );
      console.log(response);
      setWines(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  if (wines === null) {
    return <h3>...buscando data</h3>;
  }

  return (
    <div>
      <NavBarWines type={type[0].toUpperCase() + type.slice(1)} />
      <SearchAndFilter wines={wines} setSearchWine={setSearchWine} handleCheckBox={handleCheckBox} searchLocation={searchLocation}/>
      {wines
        .filter((eachWine) => {
          return eachWine.wine.toLowerCase().includes(searchWine.toLowerCase());
        }).filter((eachWine) => {
          const locationClean = eachWine.location.toLowerCase().slice(0, eachWine.location.indexOf("·")).trim()
          console.log(locationClean)
          console.log(searchLocation.spain)
          // searchLocation.spain => nos dirá true o false
          // eachWine.location => nos dirá spain. portugal, italia...
          // si todos los checks son falsos retorna todos los vinos
          if( searchLocation.spain === false && searchLocation.france === false && searchLocation.portugal === false  && searchLocation.unitedStates === false && searchLocation.italy === false ){
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
          } else {
            return false
          }

        }).map((eachWine, index) => {
          return (
            <div key={index} className="wine-card">
              <img src={eachWine.image} alt="bottle-image" />
              <h4>Bodega: {eachWine.winery}</h4>
              <h4>Vino: {eachWine.wine}</h4>
              <p>{eachWine.location}</p>
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
