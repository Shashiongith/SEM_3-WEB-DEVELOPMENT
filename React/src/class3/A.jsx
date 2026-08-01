import React from 'react'
import { useContext } from 'react'
import context from '../MainContext.jsx'

const A = () => {
    let data = useContext(context)
  return (
    <div>
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
    </div>
  )
}

export default A