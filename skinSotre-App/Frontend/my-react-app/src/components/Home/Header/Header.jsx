import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Header.css"
import Slider from "react-slick";
import { assets } from "../../../assets/assets";

const Header = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed: 3000
    }
  return (
    <Slider  {...settings}>
      <div className="img-container">
        <img src={assets.header1} alt="" className="img1" />
      </div>
      <div className="img-container">
        <img src={assets.header2} alt="" className="img2" />
      </div>
      <div className="img-container">
        <img src={assets.header3} alt="" className="img3" />
      </div>
    </Slider>
  )
}

export default Header