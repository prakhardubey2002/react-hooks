import React,{useState,useMemo} from 'react'
const UseMemo = () => {
    const [number,setNumber] = useState(0)
    const [dark,setDark] = useState(false)
    const doubleNumber = useMemo(()=>{
        return slowFunction(number);
    },[number])//usememo cache the function and will only invoke it when its dependencie's value changes which in our case is number so theme will work faster that double number beacause whole componnent is not recompiling again this done to save resources from expensive function
    //the expensive or slow function is always wraped in useMemo hook 

    const themeStyles={
        backgroundColor: dark ? 'black':'white',
        color: dark ? 'white': 'black'

    }
    return ( 
        <div className="hooks3">
            <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))} />
            <button onClick={() =>setDark(prevDark=>!prevDark)}>Change Theme</button>
            <div style={themeStyles}>
                {doubleNumber}
            </div>
        </div>
        
     );
}
function slowFunction(num){
    console.log('calling slow function')
    for(let i=0;i<=1000000000;i++){}
    return num *2
}
export default UseMemo;
//useMemo is also used for refrential equality value because if we call usefeffect console.log('helo') for themestyle it will also be called when number changes because when number changes whole application recompile and thestyle is changed even when values are same so useMemo is used with themestyle for outputting value when only themestyle is changed 