import { useContext, useState } from "react"
import "./Cart.css"
import { StoreContext } from "../../context/StoreContext"
const Cart = () => {
  const {cartItem, product_list,removeFromCart,clearCart,addToCart,getTotalCartAmount,url} = useContext(StoreContext)

  function handleCheckOut(){
    clearCart()
    alert("Order Placed Successfully")
  }

  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          product_list.map((item, index)=>{
            if(cartItem[item._id] > 0){
              return(
                <>
                  <div className="cart-item-title cart-item-data">
                    <img src={url+"/images/"+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p className="cart-item-quantity"><button onClick={()=> addToCart(item._id)}>+</button>{cartItem[item._id]}</p>
                    <p>${cartItem[item._id] * item.price}</p>
                    <button onClick={()=> removeFromCart(item._id)}>Remove</button>
                  </div>
                  <hr />
                </>
              )
            }
          })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 15}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? getTotalCartAmount() + 0 : getTotalCartAmount()+ 15}</b>
            </div>
          </div>
          <button onClick={handleCheckOut}>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart