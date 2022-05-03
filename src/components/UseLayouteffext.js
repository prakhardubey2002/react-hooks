import React, { useState,useRef,useLayoutEffect,useEffect } from 'react';
const UseLayouteffext = () => {
    const [show,setShow]=useState(false);
    const popup=useRef();
    const button= useRef();
    useLayoutEffect(() => {//if use Effect is used it will appear with down flash but uselayout effect is net asynchronous that's why popup will appear at current position without disturbing layout that's why useLayout is used insted of useEffect when UI based changes are  made in Layout as it name suggext "useLayoutEffect"
      if(popup.current == null || button.current==null) return 

        const {bottom} =button.current.getBoundingClientRect()

        popup.current.style.top =`${bottom + 25}px` 
    }, [show])
  return (
    <>
    <button ref={button} onClick={() =>setShow(prev => !prev) } >
      ClickuseRef
    </button>
    {show && (<div style={{position:"absolute"}} ref={popup} >
      This is a popup
    </div>)}
    </>
  )
}

export default UseLayouteffext