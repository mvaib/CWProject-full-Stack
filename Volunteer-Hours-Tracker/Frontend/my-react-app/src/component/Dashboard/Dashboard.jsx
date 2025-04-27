import { useContext } from "react"
import "./Dashboard.css"
import { StoreCotext } from "../../contextapi/storeContext"

const Dashboard = () => {
    const {data} = useContext(StoreCotext)
  return (
    <div className="dashboard-container">
        <div className="todays-hours-container">
            {data.map((item, index) => (
                <div key={index} className="todays-hours">
                    <p>Date : {item.date.split("T")[0]}</p>
                    <p>Hours : {item.hours}</p>
                    <p>Activity : {item.activity}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Dashboard