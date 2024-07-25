
import { Route, Routes } from 'react-router-dom'
import './App.css'
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
    {/* <Route path="/wines/reds" element={<WinesList type="reds"/>}/>
    <Route path="/wines/whites" element={<WinesList type="whites"/>}/> 
    <Route path="/wines/rose" element={<WinesList type="rose"/>}/>
    <Route path="/wines/sparkling" element={<WinesList type="sparkling"/>}/>
    <Route path="/wines/dessert" element={<WinesList type="dessert"/>}/>
    <Route path="/wines/port" element={<WinesList type="port"/>}/> */}

    <Route path="/wines/:type" element={ <WinesList /> }/>

    <Route path = "/cellar" element = {<Cellar />} />
    <Route path = "*" element = {<NotFound />} />
    </Routes> 

    </>
  )
}

export default App
