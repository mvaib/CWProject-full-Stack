import { useContext, useState } from "react"
import "./LoginPopup.css"
import { StoreContext } from "../../context/StoreContext"
import axios from "axios"
import { set } from "mongoose"

const LoginPopup = ({setShowLogin,}) => {
    const {url,setToken,currentState,setCurrentState} = useContext(StoreContext)
    
    const [data,setData] = useState({
        name : "",
        email : "",
        password : ""
    })

    const onChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData((prev) => ({...prev, [name] : value}))
    }

    const setAuthToken = (token) => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    };
    
    // In your handleLogin function:
    const handleLogin = async (e) => {
        e.preventDefault();
        let newUrl = url;
        if (currentState === "Login") {
            newUrl += "/api/user/login";
        } else {
            newUrl += "/api/user/register";
        }
    
        try {
            const response = await axios.post(newUrl, data);
            
            if (currentState === "Sign Up" && response.data.success) {
                setCurrentState("Login");
                
                setData({
                    name: "",
                    email: "",
                    password: ""
                });
            } else {
                alert(response.data.msg || "An error occurred");
            }
    
            if (currentState === "Login" && response.data.success) {
                setToken(response.data.token);
                setAuthToken(response.data.token); // Set the Authorization header
                
                setData({
                    name: "",
                    email: "",
                    password: ""
                });
                setShowLogin(false);
            } else {
                alert(response.data.msg || "An error occurred");
            }
        } catch (error) {
            const errorMsg = error.response ? error.response.data.msg : "Network error, please try again later.";
            alert(errorMsg);
        }
    };
    
   
  return (
    <div className="login-popup">
        <form className="login-popup-container" onSubmit={handleLogin}>
            {
                currentState === "Sign Up"?
                <>
                    <div className="login-popup-title">
                        <h2>{currentState}</h2>
                        <h2 className="close-icon" onClick={() => setShowLogin(false)}>X</h2>
                    </div>
                    <div className="login-popup-input">
                        <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="your name" required />
                        <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="email" required />
                        <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="password" required />
                    </div>
                    <button type="submit">Register</button>
                </>:
                <>
                    <div className="login-popup-title">
                        <h2>{currentState}</h2>
                        <h2 className="close-icon" onClick={() => setShowLogin(false)}>X</h2>
                    </div>
                    <div className="login-popup-input">
                        <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="email" required />
                        <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="password" required />
                    </div>
                    <button type="submit">Login</button>
                </>
            }
            
            <div className="login-popup-footer">
                <span onClick={()=>{
                    setCurrentState("Login")
                    setData({
                        name : "",
                        email : "",
                        password : ""
                    })
                    }}>Already have an account?</span>
                 || 
                <span onClick={()=>{
                    setCurrentState("Sign Up")
                    setData({
                        name : "",
                        email : "",
                        password : ""
                    })
                    }}>Sign Up</span>
            </div>
        </form>
    </div>
  )
}

export default LoginPopup