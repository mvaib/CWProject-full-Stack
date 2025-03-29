import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../../../Card/Card"
import "./FreeGift.css"
import { useNavigate } from "react-router-dom";

const Freegift = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1111,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 794,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 682,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 359,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
  
          ]
        
    }
    const navigate = useNavigate()
    function handleClick(){
        navigate("/product")
    }
  return (
    <div className="freegift-container">
        <b>Free Gifts</b>
        <Slider className="Freegift" {...settings}>
        <div>
            <Card 
                image={"https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/11588281-8764882139037003.jpg&format=webp&auto=avif&width=640&height=640&fit=crop"}
                name={"SkinCeuticals C E Ferulic (1 fl. oz.)"}
                price={"182.00"}
                string={"QUICK BUY"}
                handleClick={handleClick}
                />
        </div>
        <div>
            <Card
                image={"https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/12492952-7085181509083203.jpg&format=webp&auto=avif&width=640&height=640&fit=crop"}
                name={"SkinMedica TNS Advanced+ Serum (1 fl. oz.)"}
                price={"295.00"}
                string={"QUICK BUY"}
                handleClick={handleClick}
            />
        </div>
        <div>
            <Card
                image={"https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/10915787-1224882139201778.jpg&format=webp&auto=avif&width=640&height=640&fit=crop"}
                name={"Dr Dennis Gross SpectraLite™ FaceWare Pro (1 piece)"}
                price={"455.00"}
                string={"QUICK BUY"}
                handleClick={handleClick}
            />
        </div>
        <div>
            <Card
                image={"https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/11588282-1185193990314409.jpg&format=webp&auto=avif&width=640&height=640&fit=crop"}
                name={"EltaMD Exclusive UV Clear SPF 46 Broad-Spectrum Duo ($88 Value)"}
                price={"84.00"}
                string={"QUICK BUY"}
                handleClick={handleClick}
            />
        </div>
        <div>
            <Card
                image={"https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/12492951-2444897217900442.jpg&format=webp&auto=avif&width=640&height=640&fit=crop"}
                name={"iS Clinical Cleansing Complex (6 oz.)"}
                price={"49.00"}
                string={"QUICK BUY"}
                handleClick={handleClick}
            />
        </div>
        <div>
            <Card
                image={"https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/12902140-1414882147735410.jpg&format=webp&auto=avif&width=640&height=640&fit=crop"}
                name={"Sunday Riley Good Genes All-In-One Lactic Acid Treatment 1.7oz"}
                price={"122.00"}
                string={"QUICK BUY"}
                handleClick={handleClick}
            />
        </div>
        <div>
            <Card
                image={"https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/12053028-3715181508704297.jpg&format=webp&auto=avif&width=640&height=640&fit=crop"}
                name={"Neocutis LUMIÈRE FIRM RICHE Extra Moisturizing Illuminating & Tightening Eye Cream (0.5 fl. oz.)"}
                price={"125.00"}
                string={"QUICK BUY"}
                handleClick={handleClick}
            />
        </div>
        <div>
            <Card
                image={"https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/12902505-1154897222823040.jpg&format=webp&auto=avif&width=640&height=640&fit=crop"}
                name={"Obagi Medical Professional-C Serum 20% (1 oz.)"}
                price={"150.00"}
                string={"QUICK BUY"}
                handleClick={handleClick}
            />
        </div>
        <div>
            <Card
                image={"https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/12913066-7594853428676949.jpg&format=webp&auto=avif&width=640&height=640&fit=crop"}
                name={"Oribe Gold Lust Repair and Restore Shampoo and Conditioner Bundle 8.5 fl oz"}
                price={"109.00"}
                string={"QUICK BUY"}
                handleClick={handleClick}
            />
        </div>
        <div>
            <Card
                image={"https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/11588289-2065181508509837.jpg&format=webp&auto=avif&width=640&height=640&fit=crop"}
                name={"PCA SKIN Hyaluronic Acid Boosting Serum (1 fl. oz.)"}
                price={"128.00"}
                string={"QUICK BUY"}
                handleClick={handleClick}
            />
        </div>
        </Slider>
    </div>
  )
}

export default Freegift