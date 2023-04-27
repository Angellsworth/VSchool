import React,{useContext} from "react"
import {ThemeContext} from "./themeContext";

function Button(props) {

    const {color, toggleTheme} = useContext(ThemeContext)
    const {size, toggleSize} = useContext(ThemeContext)

    return (
        <div className="dropdown">
            <button className={`button-${color}-theme`}>You are currently {color} mode</button>
                <div className={`dropdown-${color}-theme`}>
                    <a onClick={toggleTheme}href="#">Change me to the opposite of {color}</a>
            <button className={`button-${size}-theme`}>You are currently {size} size</button>
                    <a onClick={toggleSize}href="#">Change my size</a>
                    
                    
                </div>
            
        </div>
        
    )
}

export default Button;