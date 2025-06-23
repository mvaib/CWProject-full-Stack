import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Product from "./pages/Product/Product"
import Cart from "./pages/Cart/Cart"
import Placeorder from "./pages/Placeorder/Placeorder"
import Footer from "./components/Footer/Footer"
import LoginPopup from "./components/LoginPopup/LoginPopup"
import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Drawer from "./components/Drawer/Drawer"
import Chatbot from "./components/Chatbot/Chatbot"

const App = ()=>{
  const [showLogin, setShowLogin] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)
  return(
    <>
      {showLogin? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      {showDrawer ? <Drawer setShowDrawer={setShowDrawer} setShowLogin={setShowLogin}/> : <></> }
      <div className="app">
        <Navbar setShowLogin={setShowLogin} showLogin={showLogin} setShowDrawer={setShowDrawer} />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/placeorder" element={<Placeorder/>}/>
        </Routes>
      </div>
      <Chatbot />
    </>
  )
}

export default App