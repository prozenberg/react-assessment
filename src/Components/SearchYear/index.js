import React, { useEffect, useState } from 'react';
import searchIcon from '../../Assets/SVGs/searchIcon.svg'
import './style.css'


const SearchYear = ({ updateYear }) => {
    const [year, setYear] = useState(undefined);
    return (
        <div className='searchYearContainer'>
            <label>Enter below the year you want to see payment dates for:</label>
            <input type="number" onInput={(e) => setYear(e.target.value)}></input>
            <button onClick={() => updateYear(year)}><img src={searchIcon} />Search</button>
        </div>);
};

export default SearchYear;
