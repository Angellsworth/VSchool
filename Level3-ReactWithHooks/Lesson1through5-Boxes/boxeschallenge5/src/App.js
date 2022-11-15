import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)


    // IMPORTANT
    function toggle(id) {
        setSquares(prevSquares => {
           return prevSquares.map((square) => {
              return square.id === id ? {...square, on: !square.on} : square
           })
        })
    }
    // Change ID from previous lesson
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on} 
            toggle={() => toggle(square.id)}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
