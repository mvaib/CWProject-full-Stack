import { useContext, useState } from "react";
import "./Login.css";
import { StoreCotext } from "../../contextapi/storeContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { url, setToken, setCurrentState , setUserId} = useContext(StoreCotext); // Include setCurrentState
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = { email, password };

        try {
            const response = await fetch(`${url}/api/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const res = await response.json();

            if (!res.success) {
                alert(res.msg);
                return;
            }
            const receivedToken = res.token; // Renamed variable to avoid conflict
            setToken(receivedToken);
            setUserId(res.user._id)

            localStorage.setItem("token", receivedToken);
            alert(res.msg);

            // Redirect to Home page after successful login
            setEmail("");
            setPassword("");
            navigate("/");
            window.location.reload();
        } catch (error) {
            alert("An error occurred during login.");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <label htmlFor="">
                    <span>Email</span>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor="">
                    <span>Password</span>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Login</button>
                <div>
                    Don't have an account? <span onClick={() => setCurrentState("Sign Up")} style={{ cursor: "pointer" }}>Signup</span>
                </div>
            </form>
        </div>
    );
}

export default Login;
