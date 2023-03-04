import React from "react"


function Header(props) {
    return(
        <div className="header" style={{
            background: `linear-gradient(${props.inputs.angle}deg, ${props.inputs.colorOne}, ${props.inputs.colorTwo}, ${props.inputs.colorThree})`
        }}>
            <h1>CSS Gradient Generator</h1>
        </div>
    )
}

export default Header


