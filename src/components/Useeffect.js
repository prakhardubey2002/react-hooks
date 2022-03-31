import React, { useState, useEffect } from "react";
const Useeffect = () => {
//   const [resourceType, setResourceType] = useState("posts");
//   const [items, setItems] = useState([]);
//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then((response) => response.json())
//       .then((json) => setItems(json),console.log(items));
//   }, [resourceType]); //[] empthy array doesnt change so it will execute only once even if dom changes but if offer specific value like here resourceType it will only execute when value specifed value is changes not everytime application is rendered

const [windowWidth,setWindowWidth]=useState(window.innerWidth);
const handleResize = () =>{
    setWindowWidth(window.innerWidth)
}
useEffect(()=>{
    window.addEventListener('resize',handleResize)//will constantly update handleResize as it take argument of resize

    return ()=>{
        window.removeEventListener('resize',handleResize)//cleanup as website will eventually slowdown because of  events being accumulated
    }
},[])
  return (
    <>
    <div className="wid">
        {windowWidth}
    </div>
      {/* <div className="hooks2">
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
          
        return <p key={item.id} >{JSON.stringify(item) }</p>;
      })} */}
    </>
  );
};

export default Useeffect;
