const express = require("express")
const cors = require("cors")
const { connectDB } = require("./DBConfig/db")
const { userRouter } = require("./routes/user.route")
const { folderRouter } = require("./routes/folder.route")
const { noteRouter } = require("./routes/note.rute")
const PORT = 8080
const app = express()

app.use(express.json())
app.use(express.text())
app.use(cors())

app.use("/user", userRouter)
app.use("/folder", folderRouter)
app.use("/note", noteRouter)

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`)
})