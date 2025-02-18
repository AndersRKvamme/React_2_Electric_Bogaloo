import { useEffect, useState } from "react";



export default function Cookie() {
    const [count, setCount] = useState(0)
    const [cookieClick, setCookieClick] = useState(1)
    const [cookieIncrease, setcookieIncrease] = useState(1)
    const [grandmaCount, setGrandmaCount] = useState(0)
    const [cursorCount, setCursorCount] = useState(0)
    
    // useEffect(() => {
    //         const interval = setInterval (() => { 
    //             if (cursorCount !== 0) {
    //                 count + cursorCount
    //                 console.log("Purchased?");
                    
    //             } else { 
    //                 console.log("No cursor purchased.");
                    
    //             }
    //          }, 1000);
    //     } )



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
                          setCount((count) => count - 5 * grandmaCount))}>{grandmaCount} Grandma</button>
                          <p>Grandma cost {5*grandmaCount}</p>
                          <p>5 * Grandma count</p>
                         
        {/* <button onClick={()=> useEffect(()=> { const interval = setInterval(() => { 
            setCount((count) => count +1);
        }, 1000);},[])}>Cursor</button> */}
        {/* <button onClick={()=> setCursorCount((cursorCount) => cursorCount +1)}>Cursor2</button>
        <p>Cursor = {cursorCount}</p> */}

{/* <button onClick={() => setCursorCount((prev) => prev + 1)}>Cursor</button>
<p>Cursor = {cursorCount}</p> */}
      </div>
        </>

    );
}