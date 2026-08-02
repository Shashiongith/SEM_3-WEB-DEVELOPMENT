import React from 'react'
import { useState } from 'react'
import Question1 from './assingment1/Question1.jsx'
import Question2 from './assingment1/Question2.jsx'
import Question3_child1 from './assingment1/Question3_child1.jsx'
import Question3_child2 from './assingment1/Question3_child2.jsx'
import Question4_child1 from './assingment1/Question4_child1.jsx'
import Question4_child2 from './assingment1/Question4_child2.jsx'
import Question5_child1 from './assingment1/Question5_child1.jsx'
import Question5_child2 from './assingment1/Question5_child2.jsx'

const Assingment = () => {
  //let [count, setCount] = useState(0) ;
  //let [task, setTask] = useState(['Task 1', 'Task 2']) ;
  let [likes, setLikes] = useState(0) ;
  function updateLikes() {
    setLikes(likes + 1)
  }
  return (
    //<Question1 />

    // <>
    // <Question2 name="Shashikant" rollNo="123" course="Computer Science"/>
    // <Question2 name="John Doe" rollNo="456" course="Mathematics"/>
    // <Question2 name="Jane Smith" rollNo="789" course="Physics"/>
    // </>
    
    // <>
    // <Question3_child1 count = {count} />
    // <Question3_child2 count = {count} setCount = {setCount} />
    // </>

    // <>
    // <Question4_child1 task = {task} />
    // <Question4_child2 task = {task} setTask = {setTask} />
    // </>
    <>
    <Question5_child1 likes = {likes} />
    <Question5_child2 likes = {likes} setLikes = {setLikes} onLike={updateLikes}/>
    </>

  )
}

export default Assingment