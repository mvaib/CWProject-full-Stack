import { useContext } from "react"
import Dashboard from "../../component/Dashboard/Dashboard"
import Nav from "../../component/Navbar/Nav"
import Sidebar from "../../component/Sidebar/Sidebar"
import "./Home.css"
import { StoreCotext } from "../../contextapi/storeContext"
import TimeSheet from "../../component/TimeSheet/TImeSheet"

const Home = () => {
    const {toShow} = useContext(StoreCotext)
  return (
    <>
        <div className="home-container">
            <Sidebar/>
            <Nav/>
            {toShow === "dashboard" ? <Dashboard/> : toShow === "timesheet" ? <TimeSheet/> : null}
        </div>
    </>
  )
}

export default Home