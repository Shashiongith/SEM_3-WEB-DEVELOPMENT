import React, {useState} from 'react'
import Child from './Child.jsx'

const MemoDemo = () => {

    let [count, SetCount] = useState(0)
  return (
    <div>
    <h1>{count}</h1>
    <button onClick = {() => SetCount(count+1)}>add </button>
    <Child />
    </div>
  )
}

export default MemoDemo