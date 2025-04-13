import { useContext } from "react"
import { assets } from "../../assets/assests"
import "./NewFolder.css"
import { StoreContext } from "../../Context/StoreContext"

const NewFolder = ({folder}) => {
    const {activeFolderId,setActiveFolderId} = useContext(StoreContext)

    function handleFolderId(){
        setActiveFolderId(folder.id)
    }
  return (
    <>
        <div className={`new-folder ${activeFolderId === folder.id ? "active" : ""}`} onClick={handleFolderId}>
            <img src={assets.folder} alt="" width={"25px"} height={"25px"}/>
            <p>{folder.body}</p>
        </div>
    </>
  )
}

export default NewFolder