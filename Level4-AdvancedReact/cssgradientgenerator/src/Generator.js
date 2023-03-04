import React from "react"
// import {chromePicker} from "react-color"

export default function Generator(props) {

    return(
        <div className="generator">
        <hr/>
            <label>Color 1</label>
            <input 
                type="color" 
                className="colorPicker" 
                value={props.inputs.colorOne}
                name="colorOne"
                //handle change function is in App(parent)
                onChange={props.handleChange}
            />
            <label>Color 2</label>
            <input 
                type="color" 
                className="colorPicker"
                value={props.inputs.colorTwo}
                name="colorTwo"
                //handle change function is in App(parent)
                onChange={props.handleChange}
            />
            <label>Color 3</label>
            <input 
                type="color" 
                className="colorPicker"
                value={props.inputs.colorThree}
                name="colorThree"
                //handle change function is in App(parent)
                onChange={props.handleChange}
            />
            <label>Angle</label>
            <input 
                type="range"
                className="angleRange"
                value={props.inputs.angle}
                name="angle"
                min="0"
                max="359"
                //handle change function is in App(parent)
                onChange={props.handleChange}
                /> 
        <hr/>
        <div align="center">

            <textarea readOnly 
                value={`background: linear-gradient(${props.inputs.angle}deg, ${props.inputs.colorOne}, ${props.inputs.colorTwo}, ${props.inputs.colorThree}); 
                -moz-background: linear-gradient(${props.inputs.angle}deg, ${props.inputs.colorOne}, ${props.inputs.colorTwo}, ${props.inputs.colorThree}); 
                -webkit: linear-gradient(${props.inputs.angle}deg, ${props.inputs.colorOne}, ${props.inputs.colorTwo}, ${props.inputs.colorThree});`}
            />
            
        </div>
        <hr className="textareaHr"/>  
                
        </div>
    )
}