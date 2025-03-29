import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../../Card/Card";
import "./Skincare.css"
const Skincare = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive :[
            {
                breakpoint: 1060,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
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
  return (
    <div className="skincare-container">
        <b>Eminence Organic Skin Care: Buy 2 or more, Save 25%</b>
        <p>Save when you buy from the brand through 3/31/2025.</p>
        <div className="skincare-card-container">
            <div className="skincare-banner">
                <img src="https://www.dermstore.com/images?url=https://static.thcdn.com/widgets/208-us/18/original-eminence-144218.png&format=webp&auto=avif" alt="" />
            </div>
            <div>
            <Slider className="skincare-slider" {...settings}>
                <div>
                    <Card
                        image={"https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/11370441-2064871760791865.jpg&format=webp&auto=avif&width=640&height=640&fit=crop"}
                        name={"Eminence Organic Skin Care Rosehip Triple C+E Firming Oil 1 fl. oz"}
                        price={"118.00"}
                        string={"QUICK BUY"}
                    />
                </div>
                <div>
                    <Card 
                        image={"https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/12901548-1984872068787933.jpg&format=webp&auto=avif&width=640&height=640&fit=crop"}
                        name={"Eminence Organic Skin Care Monoi Age Corrective Night Cream for Face & Neck"}
                        price={"77.00"}
                        string={"QUICK BUY"}
                    />
                </div>
                <div>  
                    <Card
                        image={"https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/11370402-1954876752094299.jpg&format=webp&auto=avif&width=640&height=640&fit=crop"}
                        name={"Eminence Organic Skin Care Facial Recovery Oil 0.5 fl. oz"}
                        price={"85.00"}
                        string={"QUICK BUY"}
                    />
                </div>
                <div>
                    <Card
                        image={"https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/11370388-7024934560810401.jpg&format=webp&auto=avif&width=640&height=640&fit=crop"}
                        name={"Eminence Organic Skin Care Strawberry Rhubarb Hyaluronic Serum"}
                        price={"55.00"}
                        string={"QUICK BUY"}
                    />
                </div>
                <div>
                    <Card
                        image={"https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/12901392-1864872074236785.jpg&format=webp&auto=avif&width=640&height=640&fit=crop"}
                        name={"Eminence Organic Skin Care Coconut Age Corrective Moisturizer 2 fl. oz"}
                        price={"69.00"}
                        string={"QUICK BUY"}
                    />
                </div>
                <div>
                    <Card
                        image={"https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/11483590-1724871896638744.jpg&format=webp&auto=avif&width=640&height=640&fit=crop"}
                        name={"Eminence Organic Skin Care Stone Crop Cleansing Oil"}
                        price={"59.00"}
                        string={"QUICK BUY"}
                    />
                </div>
                <div>
                    <Card
                        image={"https://www.dermstore.com/images?url=https://static.thcdn.com/productimg/original/13556032-2984949337854859.jpg&format=webp&auto=avif&width=640&height=640&fit=crop"}
                        name={"Eminence Organic Skin Care Strawberry Rhubarb Hyaluronic Hydrator"}
                        price={"65.00"}
                        string={"QUICK BUY"}
                    />
                </div>
            </Slider>
            </div>
        </div>
    </div>
  )
}

export default Skincare