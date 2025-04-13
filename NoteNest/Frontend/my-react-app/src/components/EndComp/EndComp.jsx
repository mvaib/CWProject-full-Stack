import { useContext } from "react";
import { assets } from "../../assets/assests";
import "./EndComp.css";
import { StoreContext } from "../../Context/StoreContext";
import NewInput from "../NewInput/NewInput";

const EndComp = () => {
  const {handleAddNote,notes,getActiveNote,getNotesForActiveFolder} = useContext(StoreContext)

  
  return (
    <div className="endcomp-container">
      <div className="endcomp-header">
        <img className="edit" onClick={handleAddNote} src={assets.edit} alt="" width={"25px"} height={"25px"} title="Add New Note"/>
        <div>
          <img className="user" src={assets.user} alt="" width={"40px"} height={"40px"}/>
        </div>
      </div>
      <div>
      <NewInput activeNote = {getActiveNote()} activeFolder={getNotesForActiveFolder()}/>
      </div>
    </div>
  );
};

export default EndComp;
