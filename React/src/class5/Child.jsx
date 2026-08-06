import React, {memo} from 'react'


const Child = () => {
    console.log("Child is rendered")
  return (
    <div>Child is Vedant</div>
  )
}

export default memo(Child)