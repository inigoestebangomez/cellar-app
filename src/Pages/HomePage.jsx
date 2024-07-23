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
<Link to={`/wines/rose`}>
<button>rose</button>
</Link>
<Link to={`/wines/sparkling`}>
<button>sparkling</button>
</Link>
<Link to={`/wines/dessert`}>
<button>dessert</button>
</Link>
<Link to={`/wines/port`}>
<button>port</button>
</Link>


    </div>
  )
}

export default HomePage