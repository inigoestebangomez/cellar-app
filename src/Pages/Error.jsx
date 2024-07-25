import Footer from "../Components/Footer";
import logo4 from '../images/WinePort.png';
import errorImage from '../images/Error-image.png';
import NavBarCellar from "../Components/NavBarCellar"

function Error({type}) {
  return (
    <div>
 <img className="logo" src={logo4} alt="logo-web" style={{width: "72px"}} />
      <NavBarCellar type={type}/>
<Route path = "/" element = {<HomePage />} />
<img src={errorImage} alt="error-image" style={{width: "500px"}} />
<Footer />
    </div>
  )
}

export default Error