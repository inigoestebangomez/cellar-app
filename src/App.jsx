
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from "./Components/Footer"
import About from './Pages/About'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'
import WinesList from './Pages/WinesList'

function App() {


  return (
    <>
      
    <Routes>
    <Route path = "/" element = {<HomePage />} />
    <Route path = "/about" element = {<About />} />
    <Route path = "/wines" element = {<WinesList />} />
    <Route path = "*" element = {<NotFound />} />
    </Routes>

    <Footer />

    </>
  )
}

export default App
