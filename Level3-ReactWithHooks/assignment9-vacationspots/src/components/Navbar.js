import React from "react"


export default function Navbar() {
    return (
        <nav className="navBar">
            <p className="navTitle1">Make your GREAT ESCAPE...</p>  
            <div className="navMenu">

                <button className="loginButton">
                   <a href="" className="navLinks">Login</a> 
                </button>

                <button className="tripButton">
                    <a href="" className="navLinks">Trips</a>
                </button>

                <button className="cartButton">
                    <a href="" className="navLinks">Cart</a>
                </button>
                
                
                
            </div>
        </nav>
    )
}


