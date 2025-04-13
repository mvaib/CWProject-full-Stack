import { useContext, useState } from "react"
import "./NewFile.css"
import { StoreContext } from "../../Context/StoreContext"

const NewFile = ({ notes }) => {
    const { handleDelete, click,setClick } = useContext(StoreContext);

    function handleNoteId() {
        setClick(notes.id);
    }

    return (
        <div 
            className={`note ${notes.id === click ? "clicked" : ""}`} 
            onClick={handleNoteId}
        >
            <p>{notes.body && notes.body.substr(0, 50) + "..."}</p>
            <small className="note-meta">
                Last modified: {new Date(notes.lastModified).toLocaleDateString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit"
                })}
            </small>
            <br />
            <br />
            <hr />
        </div>
    )
}

export default NewFile;
