
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from "./Components/Footer"
import About from './Pages/About'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'
import WinesList from './Pages/WinesList'
import Cellar from './Pages/Cellar'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


  return (
    <>
      
    <Routes>
    <Route path = "/" element = {<HomePage />} />
    <Route path = "/about" element = {<About />} />
    <Route path="/wines/reds" element={<WinesList type="reds"/>}/>
    <Route path="/wines/whites" element={<WinesList type="whites"/>}/> 
    {/* <Route path="/wines/reds" element={<WinesList type="reds"/>}/> */}
    <Route path = "/cellar" element = {<Cellar />} />
    <Route path = "*" element = {<NotFound />} />
    </Routes> 

    <Footer />

    </>
  )
}

export default App
