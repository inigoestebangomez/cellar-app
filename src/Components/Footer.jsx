import { Link } from "react-router-dom"
import logogithub from "../images/githublogo.png"

function Footer() {
  return (
    <div className="footer">
      <Link to ={"https://github.com/inigoestebangomez/cellar-app.git"}><img src={logogithub} alt="logo-git-hub" style={{width: "69px"}}/></Link>
    
    </div>
  )
}

export default Footer