import React from 'react'

const Question3_child2 = (props) => {
  return (
    <div>
      <button onClick={() => props.setCount(props.count + 1)}>Increment</button>
      <button onClick={() => props.setCount(props.count - 1)}>Decrement</button>
    </div>
  )
}

export default Question3_child2