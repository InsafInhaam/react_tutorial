import React, { useState } from 'react';
import axios from 'axios';

const Effect = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState()

    axios.get('https://jsonplaceholder.typicode.com/comments').then((response) =>{
        setData(response.data[0].email);
    }, [data])
  return (
    <div> 
        <h1>{count}</h1>
       <h1> {data}</h1>
            </div>
  )
}

export default Effect