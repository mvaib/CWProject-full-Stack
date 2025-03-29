import { useContext } from "react"
import "./ProductDisplay.css"
import { StoreContext } from "../../context/StoreContext"
import Product_Item from "../Product-Item/Product-Item"

const ProductDisplay = () => {
    const {product_list} = useContext(StoreContext)
  return (
    <div className="product-display" id="product-display">
        <h2>Skin Care</h2>
        <div className="product-display-sub-title">Shop professional-strength, dermatologist recommended skin care products from top skin care brands including SkinCeuticals, SkinMedica, EltaMD, Obagi Medical, Dr. Whitney Bowe Beauty and more. Choose from a variety of cleansers, toners and exfoliators to help clear your skin of dirt, oil and impurities. Shop skin care with SPF and help protect your skin from harmful UV rays and reduce signs of aging. Find skin care products with your favorite ingredients such as vitamin c, hyaluronic acid, retinol and take on any skin care concerns. Weather you have dry, oily or combination skin, you'll be able to find skin care products that best fit your skin type and concerns.
        </div>
        <div className="product-list">
            {product_list.map((product,index)=>{
                return <Product_Item key={index} id={product._id} name={product.name} image={product.image} price={product.price}  category={product.category}/>
            })}
        </div>
    </div>
  )
}

export default ProductDisplay