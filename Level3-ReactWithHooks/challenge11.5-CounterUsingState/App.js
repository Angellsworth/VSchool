/**
     * Challenge1: Set up state to track our count (initial value is 0)
     * Challenge: Create a function called `add` that runs
     * when the + button is clicked. (Can just console.log("add") for now)
     * See if you can think of a way to add 1 to the count every time the + button is clicked
     * 
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */


import React from "react"

export default function App() {
    
    const [count, setcount] = React.useState(0)

    function add() {
        setcount(prevCount => prevCount + 1)
        } 
    function subtract() {
        setcount(prevCount => prevCount - 1) 
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

// 1. You have 2 options for what you can pass in to a
//    state setter function (e.g. `setCount`). What are they?
            // a- New value of state (setCount(42))
            // b- CallBack function - whatever the callback function returns === new value of state

// 2. When would you want to pass the first option (from answer
//    above) to the state setter function?
            // Whenever you don't need the previous value of state to determine
            // what the new value of state should be.

// 3. When would you want to pass the second option (from answer
//    above) to the state setter function?

            // Whenever you DO need the previous value to determine the new value

