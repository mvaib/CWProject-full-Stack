import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {type : String, required : true},
    price : {type : Number, required : true},
    image : {type : String, required : true},
    category : {type :String, required : true},
    avaliablity : {type : Number, required : true}
})

const ProductModel = mongoose.models.product || mongoose.model("product",productSchema)

export default ProductModel