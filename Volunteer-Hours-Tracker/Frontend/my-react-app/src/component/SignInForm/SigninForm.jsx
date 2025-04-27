import { useContext, useState } from "react"
import "./SigninForm.css"
import { StoreCotext } from "../../contextapi/storeContext"

const SigninForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {url,setCurrentState} = useContext(StoreCotext)

  const handleSignin = async (e) => {
    e.preventDefault()

    const data = {
        name,
        email,
        password
    }

    const response = await fetch(`${url}/api/user/register`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })

    const res = await response.json();

    if(!res.success) {
        alert(res.msg)
        return;
    }

    alert(res.msg)
    setName("")
    setEmail("")
    setPassword("")
    setCurrentState("Login")
  }
  return (
    <div className="signin-container">
        <form action="" onSubmit={handleSignin}>
            <label htmlFor="">
              <span>Name</span>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label htmlFor="">
              <span>Email</span>
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label htmlFor="">
              <span>Password</span>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button type="submit">Sign In</button>
            <div>Already have an account? <span onClick={() => setCurrentState("Login")}>Sign In</span></div>
        </form>
    </div>
  )
}

export default SigninForm