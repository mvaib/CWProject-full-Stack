import BrandsButtons from "../Buttons/BrandsButton/BrandsButtons"
import "./GroupedButtons.css"
const GroupedButtons = () => {
  return (
    <div className="button-container">
        <BrandsButtons string={"SKIN CARE"}/>
        <BrandsButtons string={"VITAMIN C"}/>
        <BrandsButtons string={"TOOLS & DEVICES"}/>
        <BrandsButtons string={"HAIR CARE"}/>
        <BrandsButtons string={"RETINOL"}/>
        <BrandsButtons string={"FREE GIFTS"}/>
    </div>
  )
}

export default GroupedButtons