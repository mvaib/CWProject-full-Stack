import EndComp from "../../components/EndComp/EndComp"
import MiddleComp from "../../components/MiddleComp/MiddleComp"
import StartComp from "../../components/StartComp/StartComp"
import "./MainPage.css"

const MainPage = () => {

  return (
    <div className="mainpage-container">
         <StartComp/>
        <MiddleComp/>
        <EndComp />
    </div>
  )
}

export default MainPage