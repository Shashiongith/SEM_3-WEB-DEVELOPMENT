import React, {useState} from 'react'
import { useMemo } from 'react'

const UseMemo = () => {
    let [count , setCount] = useState(0)
    let result=0
    result = useMemo(() => {
        let ans = 0;
        for(let i=0;i<10000000;i++){
            ans += 1
        }
        return ans
    },[])
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>add</button>
        <h1>{result}</h1>
    </div>
  )
}

export default UseMemo