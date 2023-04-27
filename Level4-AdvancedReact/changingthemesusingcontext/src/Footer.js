import React, {useContext} from "react"
import {ThemeContext} from "./themeContext";

function Footer(props) {

const {color} = useContext(ThemeContext)

    return (
        <footer className={`footer-${color}-theme`}> 
            <h2>Here is my big Footer</h2>
            <small>©Angela Ellsworth</small>
        </footer>
    )
}

export default Footer;