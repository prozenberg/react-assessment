import React, { useState, useEffect } from "react"
import SearchYear from "../SearchYear";
import List from "../List";
import SearchError from "../SearchError";

const Container = () => {

    const [search, setSearch] = useState(undefined);

    const handleSearch = (year) => setSearch(year)

    useEffect(() => {
    }, [search]);

    return <div>
        <SearchYear updateYear={handleSearch} />
        {search && (search >= 2000 && search <= 2050 ? <List year={search} /> : <SearchError />)}
    </div>
};

export default Container;
