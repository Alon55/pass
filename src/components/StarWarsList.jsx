import React, { useState, useEffect } from "react";
import usePeopleList from "../hooks/usePeopleList";

const StarWarsList = () => {
    const [starWarsList] = usePeopleList()

    return (
        <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
            {starWarsList.length ? starWarsList.map(item => <a href={item.url} key={item.name}><div className="bg-green-100"><p>{item.name}</p><p>{item.birth_year}</p></div></a>) : ''}
        </div>
    )
}

export default StarWarsList