import { useContext } from "react"
import assets from "../../assets/assest"
import "./Sidebar.css"
import { StoreCotext } from "../../contextapi/storeContext"

const Sidebar = () => {
    const {setToShow} = useContext(StoreCotext)
  return (
    <>
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-logo-container">
                    <img className="sidebar-logo" src={assets.logo} alt="" width={"80px"} height={"80px"}/>
                </div>
                <h1 className="sidebar-logo-title">Tracker</h1>
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li onClick={() => setToShow("dashboard")}><img src={assets.dashboard} alt="" width={"20px"} height={"20px"}/>Dashboard</li>
                    <li onClick={() => setToShow("timesheet")}><img src={assets.time} alt="" width={"30px"} height={"30px"}/>Time Sheet</li>
                    <br />
                </ul>
            </div>
            <hr />
        </div>
    </>
  )
}

export default Sidebar