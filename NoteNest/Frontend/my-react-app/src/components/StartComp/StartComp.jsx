import { useContext, useEffect } from "react"
import { assets } from "../../assets/assests"
import NewFolder from "../NewFolder/NewFolder"
import "./StartComp.css"
import { StoreContext } from "../../Context/StoreContext"

const StartComp = () => {
  const { handleAddFolder, folder, setActiveFolderId, activeFolderId, handleDeleteFolder} = useContext(StoreContext);
  function handleFolderClick(folderId) {
    setActiveFolderId(folderId);
  }

  const handleFolderDelete = () => {
    if (activeFolderId !== null) {
      handleDeleteFolder(activeFolderId);
      setActiveFolderId(null); // Clear active folder ID after deletion
    } else {
      alert("No folder selected to delete.");
    }
  };

  
  return (
    <div className="startcomp-container">
      <div className="startcomp-header">
        <img className="dustbin" onClick={() => handleFolderDelete(activeFolderId)} src={assets.dustbin} alt="" width={"25px"} height={"25px"} title="Delete Active Folder" />
      </div>
      <div className="new-folder-container" onClick={handleAddFolder}>
          <img src={assets.new_folder} alt="" width={"30px"} height={"30px"}/>
          <p className="new-folder-opt">New folder</p>
      </div>
      <div>
        {folder.map((item) => (
          <div key={item.id} onClick={() => handleFolderClick(item.id)}>
            <NewFolder folder={item}/>
          </div>
        ))}   
      </div>
    </div>
  );
};


export default StartComp