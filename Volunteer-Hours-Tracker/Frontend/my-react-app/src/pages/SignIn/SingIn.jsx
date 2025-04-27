import React, { useContext } from 'react'
import SigninForm from '../../component/SignInForm/SigninForm'
import { StoreCotext } from '../../contextapi/storeContext'
import Login from '../../component/Login/Login'

const SingIn = () => {
    const {url, currentState} = useContext(StoreCotext)

  return (
    <div>
        {currentState === "Sign Up" ? <SigninForm /> : currentState === "Login" ? <Login /> : null}
    </div>
  )
}

export default SingIn