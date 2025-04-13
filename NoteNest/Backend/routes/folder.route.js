const express = require("express");
const { FolderModel } = require("../models/folder.model");
const { UserModel } = require("../models/user.model");
const { auth } = require("../middlewares/auth.middleware");
const jwt = require("jsonwebtoken")
const folderRouter = express.Router();
require("dotenv").config()

folderRouter.post("/create", auth, async (req, res) => {
    const { name, userId, user } = req.body;
    try {
        const newFolder = new FolderModel({
            name,
            userId,
            user
        });

        const savedFolder = await newFolder.save();

        const folderToken = jwt.sign({
            user: savedFolder.user,
            userId: savedFolder.userId,
            folder: savedFolder.name,
            folderId: savedFolder._id  
        }, process.env.SECRET_KEY);


        return res.status(200).json({ success: true, msg: "Folder created successfully!",folder : savedFolder ,folderToken });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, msg: `Error : ${error.message}` });
    }
});

folderRouter.get("/folderList", auth, async (req, res) => {
    try {
        const folder = await FolderModel.find({ userId : req.body.userId})

        return res.status(200).json({success : true, msg : "Folders fetched successfully!", folder})
    } catch (error) {
        console.log(error)
        return res.status(400).json({success : false, msg : `Error : ${error.message}`})
    }
})




module.exports = {folderRouter}