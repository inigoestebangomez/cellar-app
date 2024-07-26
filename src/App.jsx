
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'
import Error from './Pages/Error'
import WinesList from './Pages/WinesList'
import Cellar from './Pages/Cellar'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


  return (
    <>
      
    <Routes>
    <Route path = "/" element = {<HomePage />} />
    <Route path = "/about" element = {<About />} />
    <Route path="/wines/:type" element={ <WinesList /> }/>
    <Route path = "/cellar" element = {<Cellar />} />
    <Route path = "*" element = {<NotFound />} />
    <Route path = "/error" element = {<Error />} />

    </Routes> 

    </>
  )
}

export default App
