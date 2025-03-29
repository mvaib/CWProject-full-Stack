import { Link, useNavigate} from 'react-router-dom'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import Drawer from '../Drawer/Drawer'

const Navbar = ({setShowLogin,setShowDrawer}) => {
    const {token,setToken} = useContext(StoreContext)
    const navigate = useNavigate()


    function handleLogout(){
        setToken(null)
        navigate("/")

    }

    function handleShowDrawer(){
        setShowDrawer(true)
    }
  return (
    <div className='navbar'>
        <div className='nav1'>SAVE 25% ON EMINENCE ORGANIC SKIN CARE WHEN YOU BUY 2 OR MORE PRODUCTS. ENDS 3/31. SHOP NOW</div>
        <div className='nav2'>
            <div className='search-bar'>
                <input type="text" name="" id="" placeholder='SEARCH'/>
                <img onClick={handleShowDrawer} src={assets.burger_logo} alt="" className='burger' width={"25px"} height={"25px"}/>
                <img src={assets.search_icon} alt="" className="search-icon" width={"25px"} height={"25px"}/>
            </div>
            <Link to={"/"}><img src={assets.logo} alt="" className="logo" width={"190px"}/></Link>
            <ul className='navbar-menu'>
                {token ? 
                <div className='navbar-profile'>
                    <img src={assets.profile_logo} alt="" width={"35px"} height={"35px"}/>
                    <ul className='profile-dropdown'>
                        <li onClick={handleLogout}><img src={assets.logout_logo} alt="" width={"25px"} height={"25px"}/> <p>Logout</p> </li>
                    </ul>
                </div>
                : 
                <li onClick={()=>setShowLogin(true)}><img src={assets.user_logo} alt="" className="userlogo" width={"23px"} height={"23px"}/> <p>Sign In</p></li> 
                    
                }
                <Link to={'/cart'}><li><img src={assets.cart_logo} alt="" className="cartlogo" width={"25px"} height={"25px"}/> <p>Cart</p> </li></Link>
            </ul>
            <div className='search-bar2'>
                <img src={assets.search_icon} alt="" className="search-icon2" width={"25px"} height={"25px"}/>
            </div>
        </div>
        <div className='nav3'>
            <ul>
                <li>Brands</li>
                <li>By Category</li>
                <li>Bestsellers</li>
                <li>Sunscreen</li>
                <li>Sale & Offers</li>
                <li>Exclusives</li>
                <li>Discover</li>
                <li>New</li>
                <li>Blog</li>
                <li>Text An Expert</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar