import React from 'react'
import { useState } from 'react'

const Question1 = () => {
    let [count, setCount] = useState(0)

    function increment() {
        if(count < 10){
            setCount(count + 1)
        }
        else{
            alert("Count cannot be greater than 10")
        }
    }
    function decrement() {
        if(count > 0){
            setCount(count - 1)
        }
        else{
            alert("Count cannot be less than 0")
        }
    }
  return (
    <>
    <div>Question1</div>
    <h1>Counter</h1>
    <h3>{count}</h3>
    <div>
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
    </div>
    </>
    
  )
}

export default Question1