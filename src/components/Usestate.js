import React, { useState } from 'react';

const Usestates = () => {
    const [state,setState] = useState({count:4,theme:'blue'})
    function themer(){
        setState(prevState=>{
            if(prevState.theme==='blue'){
            return{...prevState,theme:'wert'}
        }else{
            return{...prevState,theme:'blue'}
        }
        })
    }
    function decrement(){
        setState(prevState=>{
            return{...prevState,count:prevState.count -1}//the reason we use spread operator is that setstate is altering whole complete state so if all data that is being manipulated or not  is not there it would be simply wiped out here theme will be wiped out 
        })//prevState  offer us previous value of the state 
    }
    function increment(){
        setState(prevState=>{
            return{...prevState,count:prevState.count +1}//the reason we use spread operator is that setstate is altering whole complete state so if all data that is being manipulated or not  is not there it would be simply wiped out 
        })//prevState  offer us previous value of the state 
    }
    return ( 
        <>
        <div className="hook1">
            <span onClick={increment}>+</span>
            <button>{state.count}</button>
            <button onClick={themer} >{state.theme}</button>
            <span onClick={decrement}>-</span>
        </div>
        </>
     );
}
 
export default Usestates;