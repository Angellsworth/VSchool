import './App.css';
import Count from "./Count"
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
                <Count number={count}/>
              </div>  
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}


            // <div className="counter--count">
            //     <h1>{count}</h1>
            // </div>