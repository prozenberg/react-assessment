import React, { useEffect, useState } from 'react';


const SearchYear = ({ updateYear }) => {
    const [year, setYear] = useState(undefined);
    return (
        <>
            <label>Enter below the year you want to see payment dates for:</label>
            <input type="number" onInput={(e) => setYear(e.target.value)}></input>
            <button onClick={() => updateYear(year)}>Search</button>
        </>);
};

export default SearchYear;
