import { useState } from "react";



export default function Cookie() {
    const [count, setCount] = useState(0)
    const [cookieClick, setCookieClick] = useState(1)
    const [cookieIncrease, setcookieIncrease] = useState(0)
    function clickAmount(){
        cookieClick + cookieInrease
        console.log("Works");
        
    }

    return ( 
    // let cookieIncrease = 1
    // let cookieClick = 1
    // function clickAmount() {
    //     console.log("Works?");
    //     cookieClick + cookieIncrease
    //      }
        <>
             <h1>Lets count!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + cookieClick)}>+</button>
        <p>You have {count} cookies!</p>
        <button onClick={()=> setCount((count) => count - cookieClick)}>-</button>
        <button onClick={()=> setCookieClick((cookieClick) => cookieClick+2)}>Grandma</button>

      </div>
        </>

    );
}