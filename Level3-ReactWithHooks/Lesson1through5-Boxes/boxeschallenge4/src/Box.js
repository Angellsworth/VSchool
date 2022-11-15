import React from "react"

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#c83d95" : "#ffd86c"
    }

    return(
        <div 
        style={styles} 
        className="box" 
        onClick={()=>props.toggle(props.id)}
        
        ></div>
    )
}