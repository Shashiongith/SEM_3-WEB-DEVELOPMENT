import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffectDemo = () => {
    let [count, setCount] = useState(0)
    let [apidata, setApidata] = useState([])

    useEffect(()=>{
            console.log("heheheheheeheh")
        }, [count])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
            setApidata(data)
        })
    }, [])

  return (
    <>
        <h1>UseEffectDemo</h1>
        <h2>Count: {count}</h2>
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        </div>
        
        {apidata.map((item) => (
            <div key={item.id}>
                <h3>{item.title}</h3>
            </div>
        ))}
    </>
    
  )
}

export default UseEffectDemo