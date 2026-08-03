import React from 'react'
import { useState } from 'react'

const TodoList = () => {
    let [list,setList] = useState([])
    let [item, setItem] = useState("")

    //console.log(typeof(typeof(5)))
    function run(){
        setList([...list , item])
    }
  return (
    <>
    
    <input onChange={(e) => setItem(e.target.value)} type="text" />
    <button onClick = {() => run()}type='submit'>submit</button>
    <div>
        {list.map((a)=>{
            return (<>
            <ul>
                <li >{a}</li>
            </ul>
            
            </>)
        })}
    </div>
    </>
  )
}

export default TodoList