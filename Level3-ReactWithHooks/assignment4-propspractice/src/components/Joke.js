import React from "react"

export default function Joke(props) {
    return(
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <h4>Punchline: {props.punchline}</h4>
            <hr />
        </div>
    )
}