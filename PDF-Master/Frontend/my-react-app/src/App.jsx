
import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import DropDown from './components/DropDown/DropDown'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  const [isTools,setIsTools] = useState(false)

  return (
    <div className='App'>
      {isTools && <DropDown/>}
      <Navbar isTools={isTools} setIsTools={setIsTools}/>
      <Home isTools={isTools} setIsTools={setIsTools}/>
      <Footer/>
    </div>
  )
}

export default App
