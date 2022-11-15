import React from "react"
import AirLogo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav className="navBar">
            
            <img src={AirLogo} className="airLogo"/>
        </nav>
    )
}