import { useEffect, useState } from "react";
import axios from "axios";

import WineModal from "../Components/WineModal";
import NavBarWines from "../Components/NavBarWines";

function WinesList({type}) {
  
  console.log(type)
  const [ wines, setWines ] = useState(null)
    
    useEffect(() => {
      getData()
    },[type])
  
    const getData = async () => {
      try {
        const response = await axios.get(`https://api.sampleapis.com/wines/${type}`);
        console.log(response)
        setWines(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    if (wines === null) {
      return <h3>...buscando data</h3>
    }
   
  return (
    <div>
      <NavBarWines type = {type[0].toUpperCase()+type.slice(1)}/>
      {wines.map ((eachWine, index)=>{
        return (
          <div key={index} className="wine-card">
          <img src={eachWine.image} alt="bottle-image"/>
          <h4>Bodega: {eachWine.winery}</h4>
          <h4>Vino: {eachWine.wine}</h4>    
          <p>{eachWine.location}</p>
          <p>⭐ {eachWine.rating.average}</p>
          <WineModal winery={eachWine.winery} wine={eachWine.wine} rating={eachWine.rating} location={eachWine.location} image={eachWine.image}/>
          </div>
        )

      })}

    </div>
  )
}

export default WinesList