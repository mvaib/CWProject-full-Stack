import { assets } from "../../assets/assests"
import { useContext, useState } from "react"
import "./MiddleComp.css"
import NewFile from "../NewFile/NewFile"
import { StoreContext } from "../../Context/StoreContext"

const MiddleComp = () => {
  const [isClick, setIsClick] = useState(false);
const { click, handleDelete, getNotesForActiveFolder} = useContext(StoreContext);
  
const sortedNotes = getNotesForActiveFolder().sort((a, b) => b.lastModified - a.lastModified);

let middle = document.querySelector(".middlecomp-container");
let end = document.querySelector(".endcomp-container");
let sidebar = document.querySelector(".sidebar");

function handleClick() {
  setIsClick(!isClick);
  if (isClick) {
    middle.style.left = "12%";
    end.style.left = "12%";
    middle.style.transition = "0.3s ease-in-out";
    end.style.transition = "0.3s ease-in-out";

  } else {
    middle.style.left = "0%";
    end.style.left = "0%";
    middle.style.transition = "0.3s ease-in-out";
    end.style.transition = "0.3s ease-in-out";
  }
}



return (
  <div className="middlecomp-container">
  <div className="middlecomp-header">
      <img className="sidebar" src={assets.sidebar} alt="" width={"25px"} height={"25px"} onClick={handleClick}  title="show folders"/>
      <img className="dustbin" onClick={() => handleDelete(click)} src={assets.dustbin} alt="" width={"25px"} height={"25px"} title="Delete active note"/>
  </div>
  <div>
      {sortedNotes.map((note, index) => (
          <NewFile key={index} notes={note} />
      ))}
  </div>
</div>
);
}

export default MiddleComp;
