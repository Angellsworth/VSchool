import React from "react"

export default function Joke(props) {

    // * - Create state `isShown` (boolean, default to `false`)
    const [isShown, setIsShown] = React.useState(false)

    

    function toggleShown() {
        setIsShown(prevShown=> !prevShown)
    }
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}

            {isShown && <p>{props.punchline}</p>}

            {/* * - Add a button that toggles the value back and forth. Hides and Shows */}
            <button onClick= {toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
            

            <hr />
        </div>
    )
}