import { useContext, useState } from "react"
import "./Product-Item.css"
import { StoreContext } from "../../context/StoreContext"

const Product_Item = ({id,name,image,price,category}) => {
    const {cartItem,setCartItem,addToCart,removeFromCart,url,token} = useContext(StoreContext)
    const [isAdded,setIsAdded] = useState(false)
    async function handleAddToCart(){
        if(token){
            setIsAdded(true)
            addToCart(id)
            setTimeout(() => {
                setIsAdded(false)
            }, 1000);

        }else{
            alert("Please login to add to cart")
        }
    }
  return (
    <div className="product-item">
        <div className="product-item-img-container">
            <img className="product-item-img" src={url+"/images/"+image} alt="" />
        </div>
        <div className="product-item-info">
            <p>{name}</p>
            <p className="product-item-price">${price} </p>
            <p className="product-item-category">{category}</p>
        </div>
        <button className="product-item-btn" style={isAdded ? {backgroundColor : "grey"} : {backgroundColor : "black"}}  onClick={handleAddToCart}>{isAdded ? "Item Added" : "Add to Cart"}</button>
    </div>
  )
}

export default Product_Item