import React from 'react'
import { useReducer } from 'react'

const UseReducerDemo = () => {
    function reducer(state,action){
        if(action.type == "inc") {
            return state+1
        }
        else if(action.type == "dec"){
            return state-1
        }else if(action.type == "reset"){
            return 0;
        }else{
            return state;
        }
    }
    let [state, dispatch] = useReducer(reducer,0)
  return (
    <>
    <h1>{state}</h1>
    <button onClick={() => dispatch({type : "inc"})}>add</button>
    <button onClick={() => dispatch({type : "dec"})}>sub</button>
    <button onClick={() => dispatch({type : "reset"})}>reset</button>
    </>
    
  )
}

export default UseReducerDemo