const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to MogoDB Atlas`)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {connectDB}