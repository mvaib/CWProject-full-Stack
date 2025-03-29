import Footer from "../../components/Footer/Footer"
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay"
import "./Product.css"
const Product = () => {
  return (
    <div className="product-container">
        <ProductDisplay/>
        <Footer/>
    </div>
  )
}

export default Product