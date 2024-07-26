import Footer from "../Components/Footer";
import logo4 from '../images/WinePort.png';
import errorImage from '../images/error-web.jpg';
import NavBarCellar from "../Components/NavBarCellar";

function Error({type}) {
  return (
    <div>
 <img className="logo" src={logo4} alt="logo-web" style={{width: "72px"}} />
      <NavBarCellar type={type}/>
      <h4>Sorry! Something crashed</h4>
      <h5>Try again later, please</h5>

  <img className="crashes" src={errorImage} alt="error-image" />
<Footer />
    </div>
  )
}

export default Error