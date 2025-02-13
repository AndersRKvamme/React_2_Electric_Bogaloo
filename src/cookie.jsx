import { useState } from "react";



export default function Cookie() {
    const [count, setCount] = useState(0)
    const [cookieClick, setCookieClick] = useState(1)
    const [cookieIncrease, setcookieIncrease] = useState(1)
    const [grandmaCount, setGrandmaCount] = useState(0)


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
        <button onClick={()=> setCookieClick((cookieClick) => cookieClick+cookieIncrease, 
                          setGrandmaCount((grandmaCount) => grandmaCount+1),
                          setCount((count) => count - 5 * grandmaCount))}>Grandma</button>
                          <p>Grandma cost {5*grandmaCount}</p>
                          <p>5 * Grandma count</p>

      </div>
        </>

    );
}