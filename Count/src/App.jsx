import { useState,useEffect } from "react";
function app() {

    const[count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`Count=${count}`;
    },[count]);
    return(
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={(e)=>setCount(count+1)}>Increment</button>
            <button onClick={(e)=>setCount(count-1)}>Decrement</button>
        </div>
    );
  }
  export default app;