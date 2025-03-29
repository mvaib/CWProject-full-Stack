import QuickBuyButton from "../Home/Buttons/QuickbuyButton/QuickBuyButton"
import "./Card.css"
const Card = ({image,name,price,string, handleClick}) => {
  return (
    <div className="card-container" onClick={handleClick}>
        <div className="image-container">
            <img src={image} alt="" className="card-img" />
        </div>
        <div className="card-info">
            <p>{name}</p>
            <p>${price}</p>
        </div>
        <QuickBuyButton string={string}/>
    </div>
  )
}

export default Card