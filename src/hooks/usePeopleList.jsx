import { useState, useEffect } from "react";

const usePeopleList = () => {
    const [starWarsList, setStarWarsList] = useState([])

    async function fetchStarWarsList() {
        const response = await fetch("https://swapi.dev/api/people/");
        const starWarsList = await response.json();
        console.log(starWarsList.results);
        setStarWarsList(starWarsList.results)
    }

    useEffect(() => {
        const data = fetchStarWarsList()
    }, [])

    return [starWarsList];
};

export default usePeopleList;