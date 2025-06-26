import React from 'react'
import {useGetAllProductQuery} from "../app/service/dummyData";


const AllProduct = () => {

    const {data, isError, isLoading } = useGetAllProductQuery();
    console.log(data);

    if(isError) {
        return <h1>OhhNoo we got an error</h1>
    }

    if(isLoading){
        return <h1>Loading....</h1>
    }

  return (
    <div>
        {data?.product.map((p) => (
            <>
            <h1 key={p.id}>{p.title}</h1>
            <p>{p.description}</p>
            </>
        ))}
    </div>
  )
}

export default AllProduct