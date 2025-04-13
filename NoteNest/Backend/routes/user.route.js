const express = require("express")
const { UserModel } = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { registerValidation, loginValidation } = require("../middlewares/validations.middleware")
const { FolderModel } = require("../models/folder.model")
const userRouter = express.Router()
require("dotenv").config()


userRouter.post("/register", registerValidation,async (req, res) => {
    const { name, email, password} = req.body
    try {
        const user = await UserModel.findOne({email})
        if(user) return res.status(400).json({success : false, msg : "User already exists"})

        const salt = await bcrypt.genSalt(+process.env.SALT_ROUND)
        const hash = await bcrypt.hash(password, salt)

        if(!hash) return res.status(400).json({success : false, msg : "Error"})

        const newUser = new UserModel({
            name,
            email,
            password : hash,
        })

        await newUser.save()
        return res.status(200).json({success : true, msg : "User registered successfully!"})

    } catch (error) {
        console.log(error)
        return res.status(400).json({success : false, msg : `Error : ${error.message}`})
    }
})

userRouter.post("/login", loginValidation,async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await UserModel.findOne({email})
        if(!user) return res.status(400).json({success : false, msg : "User not found"})

        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword) return res.status(400).json({success : false, msg : "Invalid Password"})

        const token = jwt.sign({userId : user._id, name : user.name},process.env.SECRET_KEY, {expiresIn : "3d"})

        return res.status(200).json({success : true, msg : "User logged in successfully!", token})

    } catch (error) {
        console.log(error)
        return res.status(400).json({success : false, msg : `Error : ${error.message}`})
    }
})

module.exports = {userRouter}