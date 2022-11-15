import React from "react"


// Give each box the ability to be in charge of it's on state

export default function Box(props) {

    const [on,setOn] = React.useState(props.on)

    const styles = {
        backgroundColor: on ? "#c83d95" : "#ffd86c"
    }

    function toggle(){
        setOn(prevOn => !prevOn)
    }

    return(
        <div style={styles} className="box" onClick={toggle}></div>
    )
}