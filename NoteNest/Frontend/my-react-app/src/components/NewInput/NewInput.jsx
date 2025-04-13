import { useContext } from "react";
import "./NewInput.css";
import { StoreContext } from "../../Context/StoreContext";

const NewInput = ({activeNote,activeFolder}) => {
    const {onUpdateNote} = useContext(StoreContext)
    function handleChangeInput(key,value){
        onUpdateNote({
            ...activeNote,
            [key] : value,
            lastModified : Date.now()
        })
    }
    if(!activeFolder || !activeNote){
        return null
    }
  return (
    <>
      <div className='endcomp-input-container'>
        <textarea 
          className="endcomp-input" 
          placeholder="Type here..."
          autoFocus
          autoSave="on"
          value={activeNote && activeNote.body}
          onChange={(e) => handleChangeInput("body", e.target.value)}

        >
        </textarea>
      </div>
    </>
  );
};

export default NewInput;
