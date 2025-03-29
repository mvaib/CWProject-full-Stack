// import Card from "../../components/Card/Card"
import Footer from "../../components/Footer/Footer"
import Banner from "../../components/Home/Banner/Banner1/Banner"
import Banner2 from "../../components/Home/Banner/Banner2/Banner2"
import BestSeller from "../../components/Home/CardSlidder/BestSeller/BestSeller"
import FemalBeauty from "../../components/Home/CardSlidder/FemalBeauty/FemalBeauty"
import Freegift from "../../components/Home/CardSlidder/FreeGift/Freegift"
import GroupedButtons from "../../components/Home/GroupedButton/GroupedButtons"
import Header from "../../components/Home/Header/Header"
import Skincare from "../../components/Home/Section-Skincare/Skincare"
import "./Home.css"
const Home = () => {
  return (
    <div className="home-outerlayer">
        <div className="home-container">
            <Header/>
            <GroupedButtons/>
            <BestSeller/>
            <Banner url={"https://www.dermstore.com/images?url=https://static.thcdn.com/widgets/208-us/00/original-Page-005%5B1%5D-213200.png&format=webp&auto=avif&width=1920&fit=cover"}/>
            <Skincare/>
            <FemalBeauty/>
            <Freegift/>
            <Banner2/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home