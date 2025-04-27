
import { useState } from "react";
import "./Form.css"
import { useContext } from "react";
import { StoreCotext } from "../../contextapi/storeContext";

const Form = ({isPlayClicked, setIsPlayClicked}) => {

    const [hours, setHours] = useState(0);
    const [activity, setActivity] = useState("");
    const {url, token} = useContext(StoreCotext)



    const handleSubmit = async(e) => {
        e.preventDefault();

        const data = {
            hours : Number(hours),
            activity
        }
        
        const response = await fetch(`${url}/api/volunteer/create-volunteer`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            },
            body : JSON.stringify(data)
        })

        const res = await response.json();

        if(!res.success) {
            alert(res.msg)
            return;
        }

        alert(res.msg)

        console.log(data)

        setIsPlayClicked(!isPlayClicked);
        setHours(0);
        setActivity("");

    }

    const handleCancel = () => {
        setIsPlayClicked(!isPlayClicked);
    }
  return (
    <div className="form-container" style={{right : isPlayClicked && "0px"}}>
        <div className="form-container-header">
            <h2>Volunteer Hours Tracker</h2>
        </div>
        <div className="close" onClick={() => setIsPlayClicked(!isPlayClicked)}>X</div>

        <div className="form">
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className="form-header">
                    <h2>Add Working Hours</h2>
                </div>
                <div className="form-body">
                    <div className="form-body-container">
                        <label htmlFor="hours">Hours</label>
                        <input type="number" name="hours" id="hours" placeholder="enter hours" value={hours} onChange={(e) => setHours(e.target.value)}/>
                    </div>
                    <div className="form-body-container">
                        <label htmlFor="activity">Activity</label>
                        <input type="text" name="activity" id="activity" placeholder="enter activity" value={activity} onChange={(e) => setActivity(e.target.value)}/>
                    </div>
                </div>
                <div className="form-footer">
                    <button type="reset" onClick={handleCancel}>Cancel</button>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form