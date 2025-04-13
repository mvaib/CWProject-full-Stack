const express = require("express");
const { NoteModel } = require("../models/note.model");
const { noteAuth } = require("../middlewares/auth.middleware");
const noteRouter = express.Router();

noteRouter.post("/create", noteAuth, async (req, res) => {
    const { user, userId, folder, folderId, content, createdAt, lastModified } = req.body;
    try {
        const newNote = new NoteModel({
            user,
            userId,
            folder,
            folderId,
            content,
            createdAt,
            lastModified
        });

        await newNote.save();

        return res.status(200).json({ success: true, msg: "Note created successfully!" });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, msg: `Error : ${error.message}` });
    }
});

noteRouter.post("/noteList", async (req, res) => {
    // Ensure req.body contains both userId and folderId
    const { userId, folderId } = req.body;

    if (!userId || !folderId) {
        return res.status(400).json({ success: false, msg: "userId and folderId are required" });
    }

    try {
        const notes = await NoteModel.find({ userId, folderId });
        return res.status(200).json({ success: true, notes });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, msg: `Error : ${error.message}` });
    }
});

module.exports = { noteRouter };
