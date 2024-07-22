import { Link, Route, Routes } from "react-router-dom";

function HomePage() {
  
  return (
    <div>

<h1>CHOOSE OPTION</h1>

{/* <Link to={`/wines/reds`}>
<img className="red-wines-img" src="../src/images/vino-tinto.webp" alt="red wines" width={300}/>
</Link>

<Link to={`/wines/whites`}>
<img className="white-wines-img" src="../src/images/vino-blanco.png" alt="white wines"width={300}/>
</Link> */}

<Link to={`/wines/reds`}>
<button>reds</button>
</Link>
<Link to={`/wines/whites`}>
<button>whites</button>
</Link>

    </div>
  )
}

export default HomePage