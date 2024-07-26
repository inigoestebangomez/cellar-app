import Footer from "../Components/Footer";
import logo4 from '../images/WinePort.png';
import errorImage from '../images/Error-image.png';
import NavBarCellar from "../Components/NavBarCellar"

function NotFound({type}) {
  return (
    <div>
 <img className="logo" src={logo4} alt="logo-web" style={{width: "72px"}} />
      <NavBarCellar type={type}/>
<h4>Maybe your are lost! Get back to your cellar</h4>
<img className="crashes" src={errorImage} alt="error-image" />
<Footer />
    </div>
  )
}

export default NotFound