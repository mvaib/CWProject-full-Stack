import { useContext, useState } from "react";
import assets from "../../assets/assest"
import "./Nav.css"
import Form from "../Form/Form";
import { StoreCotext } from "../../contextapi/storeContext";

const Nav = () => {
    const [isProfileClicked, setIsProfileClicked] = useState(false);
    const [isPlayClicked, setIsPlayClicked] = useState(false);
    const {toShow} = useContext(StoreCotext)

    const handlePlay = () => {
      setIsPlayClicked(!isPlayClicked);
    }

    const handleDetail = () => {
      setIsProfileClicked(!isProfileClicked);
    }

    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

  return (
    <>
        <section className="Header">
            <nav className="nav">
                <div className="title">
                    <h2>{toShow}</h2>
                </div>
                <div className="profile">
                    <ul>
                        <li><div className="profile-container">
                            <div className="time">
                                <img onClick={handlePlay} src={assets.play} alt="" width={"40px"} height={"40px"}/>
                                <Form isPlayClicked={isPlayClicked} setIsPlayClicked={setIsPlayClicked}/>
                            </div>
                            <div className="profile-logo"  style={{paddingLeft: !isProfileClicked && "0px"}} onClick={handleDetail}>
                                <img src={assets.user} alt="" width={"50px"} height={"50px"}/>
                                <div className="dropdown" style={{display : isProfileClicked && "flex", right : !isProfileClicked && "-100px", opacity : !isProfileClicked && "0"}}>
                                    <ul>
                                        <li>john doe</li>
                                        <li>volunteer</li>
                                    </ul>
                                </div>
                            </div>
                            <div onClick={handleLogout} className="details" style={{right: !isProfileClicked && "30px", opacity : !isProfileClicked && "0"}}>
                                <img src={assets.logout} alt="" width={"50px"} height={"50px"}/>                               
                            </div>
                        </div></li>
                    </ul>
                </div>
            </nav>
        </section>
    </>
  )
}

export default Nav