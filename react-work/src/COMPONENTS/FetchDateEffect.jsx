import React, { useState, useEffect } from 'react'

const FetchDateEffect = () => {
    const[poste, setPoste] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPoste(data);
        };

        fetchData();

    }, []);

  return(
   <div>

    <h1>Frist Poste Title: </h1>

    {poste.length > 0 ? <h2>{poste[0].title} </h2>: <p>Loading...</p>}

    </div>

  );

}; 

export default FetchDateEffect