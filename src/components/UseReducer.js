import React, { useState } from 'react';
export default function App(){
    const [count,setCount]=useState(0)

    function increment(){
        setCount(prevCount=>prevCount +1)
    }
    function decrement(){
        setCount(prevCount=>prevCount -1)
    }
    return(
        <>
        <div className="hooks4">
        <button onClick={decrement}>
            -
        </button>
        <span>
            {count}
        </span>
        <button onClick={increment} >
            +
        </button>
        </div>
        </>
    )
}
