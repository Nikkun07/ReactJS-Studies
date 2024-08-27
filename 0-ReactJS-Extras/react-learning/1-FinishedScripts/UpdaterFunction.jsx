// Updater-Function = A function passed as an argument to setState() usually
//                    ex. setYear(year + 1). Better practice is to pass an updater function
//                    Allow for safe updates based on the previous state

import React, {useState} from "react";

function UpdaterCounter()
{
    const [count, setCount] = useState(0);

    const increment = () =>
    {
        //Takes the PENDING state to calculate the NEXT state.
        //React puts your updater function in a queue (waiting in line)
        //During the next render, it will call them in the same order.

        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        
    }

    const decrement = () =>
    {
        setCount(count - 1);
    }

    const reset = () =>
    {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={increment}>Increment</button>
            <button className="counter-button" onClick={reset}>Reset</button>
        </div>
    )
}

export default UpdaterCounter;