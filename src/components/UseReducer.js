import React, { useState,useReducer } from 'react';
export default function UseReducer(){

    function Reducer(state,action){
        switch(action.type){
            case 'increment':
                return {count:state.count +1}
            case 'decrement':
                return {count:state.count - 1}
            default:
                return state        
        }
    }
    const [state,dispatch] = useReducer(Reducer,{count:0})
    // const [count,setCount]=useState(0)

    function increment(){
        dispatch({type:'increment'})
    }
    function decrement(){
        dispatch({type:'decrement'})
        // setCount(prevCount=>prevCount -1)
    }
    return(
        <>
        <div className="hooks4">
        <button onClick={decrement}>
            -
        </button>
        <span>
            {state.count}
        </span>
        <button onClick={increment} >
            +
        </button>
        </div>
        </>
    )
}
