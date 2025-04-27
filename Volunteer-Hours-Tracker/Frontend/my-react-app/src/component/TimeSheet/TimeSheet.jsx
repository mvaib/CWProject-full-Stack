import { useContext } from "react";
import "./TimeSheet.css";
import { StoreCotext } from "../../contextapi/storeContext";

const TimeSheet = () => {
    const { data } = useContext(StoreCotext);

    const totalHoursByDate = data.reduce((acc, item) => {
        const dateKey = item.date.split("T")[0]; // Get the date part

        if (!acc[dateKey]) {
            acc[dateKey] = 0; // Initialize the total for the date if it doesn't exist
        }
        acc[dateKey] += item.hours; // Add the hours for that date
        return acc;
    }, {});

    return (
        <div className="timeSheet">
            <div className="timeSheet-container">
                {Object.entries(totalHoursByDate).map(([date, totalHours]) => (
                    <div key={date}>
                        <span>Date : {date}</span> / <span>Totalhours : {totalHours} hours</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeSheet;
