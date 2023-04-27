import React, {useContext} from "react"
import {ThemeContext} from "./themeContext";

function Navbar(props) {

const {color} = useContext(ThemeContext)

    return (
        <header className={`navbar-${color}-theme`}> 
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

export default Navbar;