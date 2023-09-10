
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Contact from './Routes/Contact'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'

function App() {
 

  return (

    <> 
            
      <Navbar/>
      <Routes>      
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dentist/:id' element={<Detail />}/>
        <Route path='/favs' element={<Favs />}/>
      </Routes>
      <Footer/>     
      
    </>
  )
}

export default App
