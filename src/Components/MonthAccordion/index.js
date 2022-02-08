import React, { useState } from "react"
import '../MonthAccordion/style.css';

const MonthAccordion = (props) => {
    const [isActive, setIsActive] = useState(false);
    return (<div className="accordion">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
            <p>{`${props.month}`}</p>
            <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-content">
            <li>{`payment day: ${props.paymentDay}`}</li>
            <li>{`bonus day: ${props.bonusDay}`}</li>
        </div>}

    </div>)
}

export default MonthAccordion;


