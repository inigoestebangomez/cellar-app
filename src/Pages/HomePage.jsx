import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import redWine from '../images/vino-tinto.jpg';
import whiteWine from '../images/vino-blanco.png';
import roseWine from '../images/vino-rosado.jpg';
import sparklingWine from '../images/vino-espumoso.jpg';
import dessertWine from '../images/vino-postre.jpg';
import portoWine from '../images/vino-oporto.jpg';



function HomePage() {
  
  return (
    <div>
  {/* <Link to={`/wines/reds`}>
      <img className="red-wines-img" src={redWine} alt="red wines" width={100}/>
  </Link>
  <Link to={`/wines/reds`}>
      <img className="white-wines-img" src={whiteWine} alt="white wines" width={100}/>
  </Link>
  <Link to={`/wines/reds`}>
      <img className="rose-wines-img" src={roseWine} alt="rose wines" width={100}/>
  </Link>
  <Link to={`/wines/reds`}>
      <img className="sparkling-wines-img" src={sparklingWine} alt="sparkling wines" width={100}/>
  </Link>
  <Link to={`/wines/reds`}>
      <img className="dessert-wines-img" src={dessertWine} alt="dessert wines" width={100}/>
  </Link>
  <Link to={`/wines/reds`}>
      <img className="porto-wines-img" src={portoWine} alt="porto wines" width={100}/>
  </Link> */}

<Link to={`/wines/reds`}>
<button className="red-wines-img" style={{
            backgroundImage: `url(${redWine})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '200px',
            height: '200px',
            color: 'white',
            border: 'none',
            margin: '10px',
          }}></button>
</Link>
<Link to={`/wines/whites`}>
<button className="white-wines-img" style={{
            backgroundImage: `url(${whiteWine})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '200px',
            height: '200px',
            color: 'white',
            border: 'none',
            margin: '10px',
          }}></button>
</Link>
<Link to={`/wines/rose`}>
<button className="rose-wines-img" style={{
            backgroundImage: `url(${roseWine})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '200px',
            height: '200px',
            color: 'white',
            border: 'none',
            margin: '10px',
          }}></button>
</Link>
<Link to={`/wines/sparkling`}>
<button className="sparkling-wines-img" style={{
            backgroundImage: `url(${sparklingWine})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '200px',
            height: '200px',
            color: 'white',
            border: 'none',
            margin: '10px',
          }}></button>
</Link>
<Link to={`/wines/dessert`}>
<button className="dessert-wines-img" style={{
            backgroundImage: `url(${dessertWine})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '200px',
            height: '200px',
            color: 'white',
            border: 'none',
            margin: '10px',
          }}></button>
</Link>
<Link to={`/wines/port`}>
<button className="porto-wines-img" style={{
            backgroundImage: `url(${portoWine})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '200px',
            height: '200px',
            color: 'white',
            border: 'none',
            margin: '10px',
          }}></button>
</Link>


    </div>
  )
}

export default HomePage