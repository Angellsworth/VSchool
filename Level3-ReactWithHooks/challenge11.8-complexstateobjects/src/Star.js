import React from "react"

export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    return (
        <img 
            src={require(`./images/${starIcon}`)} 
            className="card--favorite"
            // onClick will call the handle click as a prop
            onClick={props.handleClick}
        />
    )
}