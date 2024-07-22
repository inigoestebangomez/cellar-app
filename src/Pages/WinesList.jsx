import { useEffect, useState } from "react";
import axios from "axios";

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
      {wines.map ((eachWine, index)=>{
        return (
          <h1 key={index}>{eachWine.winery}</h1>
        )

      })}

    </div>
  )
}

export default WinesList