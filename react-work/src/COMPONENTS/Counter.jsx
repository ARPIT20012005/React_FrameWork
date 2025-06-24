import React from 'react'
import { useState } from 'react'


const Counter = () => {

const [count, setCount] = useState(0);

  return (
    <div>
        <p>
            you click {count} times 
        </p>
        <button onClick={() => setCount(count + 1)}>incremrnt</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  )
}

export default Counter