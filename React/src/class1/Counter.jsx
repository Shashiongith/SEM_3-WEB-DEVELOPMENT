import React from 'react'
import {useState} from 'react'

const Counter = () => {

  let [count, setCount] = useState(0)
  return (
    <>
      <div>Counter</div>
      <h1>{count}</h1>
      <div id='buttons'>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>-</button>
     </div>
     
    </>
   
  )
}

export default Counter