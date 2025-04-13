const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    user : {type : String, required : true},
    userId : {type : mongoose.Schema.Types.ObjectId, ref : "user", required : true},
    folder : {type : String, required : true},
    folderId : {type : mongoose.Schema.Types.ObjectId, ref : "folder", required : true},
    content : {type : String, required : true},
    createdAt : {type : Date, default : Date.now},
    lastModified : {type : Date, default : Date.now},
},{
    minimize : false,
    versionKey : false
})

const NoteModel = mongoose.models.notes || mongoose.model("note", noteSchema)

module.exports = {NoteModel}