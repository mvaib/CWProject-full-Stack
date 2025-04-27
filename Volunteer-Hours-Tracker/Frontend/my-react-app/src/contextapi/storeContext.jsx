import { createContext, useEffect, useState } from "react";

export const StoreCotext= createContext()

const StoreProvider = ({children}) => {

    const url = "https://volunteer-hours-tracker-backend.onrender.com"
    const [token, setToken] = useState(() => {
        return localStorage.getItem("token" || null)
    })
    const [data, setData] = useState([])
    const [toShow, setToShow] = useState("dashboard")
    const [currentState, setCurrentState] = useState("Sign Up")
    const [userId, setUserId] = useState(null)
    
    const fetchData = async () => {
        try {
            if(!token) return
            const response = await fetch(`${url}/api/volunteer/volunteer-list`,{
                method : "POST",
                headers : {
                    "Authorization" : `Bearer ${token}`,
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify({
                    userId
                })
            })
            const res = await response.json()
            setData(res.data)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        fetchData()
    },[data])
    return(
        <StoreCotext.Provider value={{url, token, setToken, data, setData, toShow, setToShow, currentState, setCurrentState, userId, setUserId}}>
            {children}
        </StoreCotext.Provider>
    )
}

export default StoreProvider

