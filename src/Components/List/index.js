import React, { useState, useEffect } from "react"
import MonthAccordion from "../MonthAccordion"
import DummyDates from "../../Constants/index.js"

const List = () => {
    const [dummyData, setDummyData] = useState([]);
    const fetchData = async () => {
        setDummyData(DummyDates)
    }
    useEffect(() => {
        fetchData()
    }, []);

    return (<>
        <div>Working with dummy data, results might not be comparable to calendar</div>
        <ul>
            {dummyData.map((data, key) => <MonthAccordion key={key} month={data.month} paymentDay={data.paymentDay} bonusDay={data.bonusDay} />)}
        </ul>
    </>)
}

export default List;