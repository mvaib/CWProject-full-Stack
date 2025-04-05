import { useState } from "react"
import "./Upload.css"
import axios from "axios"

const Upload = () => {
    const [file,setFile] = useState(null)
    const [convert,setConvert] = useState("")
    function handleFileChange(e){
        setFile(e.target.files[0])
    }

    async function handleFileConvert(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append("file",file)
        try {
            const response = await axios.post("https://pdfmaster-backend.onrender.com/files/convert",formData,{
                responseType : "blob",

            })
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download",file.name.replace(/\.[^/.]+$/,"")+".pdf")
            document.body.appendChild(link)
            link.click()
            link.parentNode.removeChild(link)
            setFile(null)
            alert("File Converted  and Downloaded Successfully")
        } catch (error) {
            
        }
    }

  return (
    <>
        <div className="upload-container">
            <h1 className="title">Convert Word to PDF Online</h1>
            <p className="description">Upload your Word file and get a PDF file in seconds.</p>
            <label className="custom-file-upload">
            <input type="file" accept=".doc, .docx" id="fileInput" onChange={handleFileChange}/>
                {file ? file.name : "Choose File"}
            </label>
            {file && <><button onClick={handleFileConvert}>Convert File</button></>}
            
        </div>
    </>
  )
}

export default Upload