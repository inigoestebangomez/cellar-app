import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";


function WinesList() {
  
  const [ wines, setWines ] = useState(null)
  
  useEffect(() => {
    getDataWhites()
    getDataReds()
  },[])
  const getDataReds = async () => {
    try {
      const response = await axios.get(`https://api.sampleapis.com/wines/reds`);
      console.log(response)
      setWines(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getDataWhites = async () => {
    try {
      const response = await axios.get(`https://api.sampleapis.com/wines/whites`);
      console.log(response)
      setWines(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  if (wines === null) {
    return <h3>...buscando vinos...</h3>
  }

  return (
    <div>
      <h1>HOLA VINO</h1>
    </div>
  )
}

export default WinesList