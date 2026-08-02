import React from 'react'

const Question4_child2 = (props) => {
    function updateTask() {
        props.setTask([...props.task, document.querySelector('input').value])
    }
    return (
        <>
        <div>Question4_child2</div>
        <input type="text" placeholder='Enter Task' />
        <button onClick={() => updateTask()}>Add Task</button>
    </>
  )
}

export default Question4_child2