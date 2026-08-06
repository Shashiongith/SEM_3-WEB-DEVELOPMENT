import React from 'react'
import { useReducer } from 'react'

// const UseReducerDemo = () => {
//     function reducer(state,action){
//         if(action.type == "inc") {
//             return state+1
//         }
//         else if(action.type == "dec"){
//             return state-1
//         }else if(action.type == "reset"){
//             return 0;
//         }else{
//             return state;
//         }
//     }
//     let [state, dispatch] = useReducer(reducer,0)
//   return (
//     <>
//     <h1>{state}</h1>
//     <button onClick={() => dispatch({type : "inc"})}>add</button>
//     <button onClick={() => dispatch({type : "dec"})}>sub</button>
//     <button onClick={() => dispatch({type : "reset"})}>reset</button>
//     </>
    
//   )
// }

// export default UseReducerDemo

const useReducerDemo = () => {
    let data = {
        input : "",
        list : []
    }
    function reducer (state , action) {
        if(action.type == "inp"){
            return{
                ...state,
                input : action.paylod
            }
        }
        else if(action.type == "add"){
            return{
                ...state,
                list : [...state.list , state.input],
                input:""
            }
        }
        else if(action.type == "delete"){
            console.log(action.paylod)
            return{
                ...state, list:state.list.filter((a,b) => {
                    return b != action.paylod
                })
            }
        }
    }
    let[state , dispatch] = useReducer(reducer , data)
  return (
    <>
    <input onChange= {(e) => dispatch({type:"inp" , paylod : e.target.value})}type='text'></input>
    <button onClick={() => dispatch({type:"add"})}>add</button>

    <div>
        {state.list.map((a,i)=>{
            return (<>
            
                {/* <li onClick={() => dispatch({type:"d", paylod : i})}>{a}</li> */}
                <li onClick = {()=>{dispatch({type:"delete" , paylod:i})}}>{a}</li>
            
            
            </>)
        })}
    </div>
    </>
  )
}

export default useReducerDemo