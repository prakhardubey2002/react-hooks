import React, { useState } from 'react';

const UseRef = () => {
    const [name,setName]=useState('')
    return ( 
        <div className="hooks4">
            <input value={name} onChange={e=>setName(e.target.value)} />
            <div>My name is {name}</div>
        </div>
     );
}
 
export default UseRef;