const { default: mongoose } = require("mongoose")
const mogoose = require("mongoose")

const folderSchema = new mogoose.Schema({
    user : {type : String, required : true},
    userId : {type : mongoose.Schema.Types.ObjectId, ref : "user", required : true},
    name : {type : String, required : true}
},{
    minimize : false,
    versionKey : false,
})


const FolderModel = mongoose.models.folders || mongoose.model("folder", folderSchema)

module.exports = {FolderModel}