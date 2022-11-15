import React from "react"
import World from "../images/world.png"

export default function Navbar() {
    return (
        <nav className="nav">
            <img classname="navLogo" src={World} />
           <h4 className="title">my travel journal.</h4>
        </nav>
    )
}