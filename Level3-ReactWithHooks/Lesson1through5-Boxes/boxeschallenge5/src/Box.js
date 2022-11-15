import React from "react"

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#c83d95" : "#ffd86c"
    }

    // Changing ID on toggle
    return(
        <div 
            style={styles} 
            className="box" 
            onClick={props.toggle}
            >
        </div>
    )
}