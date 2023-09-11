
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Contact from './Routes/Contact'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import { useContextGlobal } from './Components/utils/global.context'

function App() {
 
  const { state } = useContextGlobal();
  return (
    

    <div className={`${state.theme}`}> 
            
      <Navbar/>
      <Routes>      
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dentist/:id' element={<Detail />}/>
        <Route path='/favs' element={<Favs />}/>
      </Routes>
      <Footer/>     
      
    </div>
  )
}

export default App
