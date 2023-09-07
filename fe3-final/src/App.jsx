
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Inicio from './Components/Pages/Inicio'
import Contacto from './Components/Pages/Contacto'
import Detalle from './Components/Pages/Detalle'
import Destacados from './Components/Pages/Destacados'

function App() {
 

  return (

    <> 
            
      <Navbar/>
      <Routes>      
        <Route path='/' element={<Inicio/>}/>
        <Route path='/contact' element={<Contacto />}/>
        <Route path='/dentist/:id' element={<Detalle />}/>
        <Route path='/fav' element={<Destacados />}/>
      </Routes>
      <Footer/>     
      
    </>
  )
}

export default App
