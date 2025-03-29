import { Link } from "react-router-dom"
import { assets } from "../../assets/assets"
import "./Drawer.css"
import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
const Drawer = ({setShowDrawer, setShowLogin}) => {
    const {currentState,setCurrentState} = useContext(StoreContext)
    function handleClose(){
        setShowDrawer(false)
    }
    function handleLogin(){
        setShowLogin(true)
        setCurrentState("Login")
    }
    function handleRegister(){
        setShowLogin(true)
        setCurrentState("Sign Up")
    }
  return (
    <div className="Drawer">
        <div className="Drawer-container">
            <div className="Drawer-logo"><img src={assets.logo} alt="" width={"190px"} height={"40px"}/></div>
            <hr />
            <div className="Drawer-header">
                <Link to={"/"}><div onClick={handleClose}><img src={assets.home_logo} alt=""  width={"30px"} height={"30px"}/></div></Link>
                <div onClick={handleClose} className="Drawer-close-icon">X</div>
            </div>
            <hr />
            <br />
            <div className="Drawer-btn">
                {localStorage.getItem("token") ? <><p>Hii User, Welcome to DermStore</p></> 
                :
                <>
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleRegister}>Register</button> 
                </>
                }
            </div>
            <br />
            <div className="Drawer-menu">
                <p className="Drawer-menu-title">Brands</p>
                <br />
                <br />
                <hr />
                <br />
                <p className="Drawer-menu-title">By Categories</p>
                <br />
                <ul>
                    <Link to={"/product"}><li onClick={handleClose}><p>Skin Care</p><p>{">"}</p></li></Link>
                    <Link to={"/product"}><li onClick={handleClose}><p>Hair Care</p>{">"}</li></Link>
                    <Link to={"/product"}><li onClick={handleClose}><p>Make Up</p>{">"}</li></Link>
                    <Link to={"/product"}><li onClick={handleClose}><p>Tools & Dev</p>{">"}</li></Link>
                </ul>
                <br />
                <hr />
            </div>
        </div>
    </div>
  )
}

export default Drawer