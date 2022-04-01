import React, { useState,useEffect,useRef } from 'react';

const UseRef = () => {
    const [name,setName]=useState('')

    const renderCount =useRef(1)//the difference between state and react is that it does'nt cause application to rerender like state does so value will keep addying is useeffect
    
    useEffect(() => {
        renderCount.current =renderCount.current +1;
    })
    return ( 
        <div className="hooks4">
            <input value={name} onChange={e=>setName(e.target.value)} />
            <div>My name is {name}</div>
        </div>
     );
}
 
export default UseRef;