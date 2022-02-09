import React, { useState, useEffect } from "react"
import { CSVLink } from "react-csv";
import MonthAccordion from "../MonthAccordion"
import BuildDatesJSON from "../../Hooks/BuildDatesJSON"
import './style.css';

const List = ({ year }) => {
    const [dates, setDates] = useState([]);
    const fetchData = () => {
        setDates(JSON.parse(BuildDatesJSON(year)))
    }
    useEffect(() => {
        fetchData()
    }, [year]);

    return (<>
        <div className="download-btn-container">
            <CSVLink data={dates} filename={"payment-dates.csv"} className="download-btn">Download data to CSV</CSVLink>
        </div>
        <ul>
            {dates.map((data, key) => <MonthAccordion key={key} month={data.month} paymentDay={data.paymentDay} bonusDay={data.bonusDay} />)}
        </ul>
    </>)
}

export default List;