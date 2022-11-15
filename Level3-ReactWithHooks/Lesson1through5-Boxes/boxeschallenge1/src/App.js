import React from "react"
import boxes from "./boxes"

export default function App() {

  // Challenge Part 1: 

  // 1. Initialize state with the default value of the array pulled in from boxes.js
    const [squares, setSquares] = React.useState(boxes)


    // 2. Map over that state array and display each one as an empty square 
    // (black border, transparent bg color) (Don't worry about using the "on" property yet)
    const squareElements = squares.map(square => (
        <div className="box" key={square.id}></div>
    ))
    
    return (
        <main>
          
          {/* Render squareElements */}
            {squareElements}
        </main>
    )
}
