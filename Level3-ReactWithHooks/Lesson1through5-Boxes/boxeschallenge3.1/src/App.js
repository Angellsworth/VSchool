import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App(props) {

    const [squares, setSquares] = React.useState(boxes)
    

    // darkMode is in index.js
    const styles = {
      backgroundColor: props.darkMode ? "#222222" : "#cccccc"    
    }

    const squareElements = squares.map(square => (
        <Box key={square.id} on={square.on} />
    ))
    
    return (
        <main>
          
            {squareElements}
        </main>
    )
}

