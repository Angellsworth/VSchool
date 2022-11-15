import React from "react"
import Image from "../images/square.jpeg"
import envelope from "../react-icons/envelope-solid.svg"
import linkedInSquare from "../react-icons/linkedin-brands.svg"

export default function Info() {
    return (

        <div className="info_section">
            <img src={Image} className="image"/>
            <h1>Angela Ellsworth</h1>
            <h3>Fullstack Developer</h3>
            <a href="mailto:angellsworth@msn.com" className="email_link">
                <h4>angellsworth@msn.com</h4>
            </a>
            
            <a href="mailto:angellsworth@msn.com">
                <button className="email_button">
                    <img src={envelope} className="button_email_icons" />
                Email </button>
            </a>
            <a href="https://www.linkedin.com/in/angela-ellsworth/">
                <button className="linkedin_button" >
                <img src={linkedInSquare} className="button_linkedin_icons" /> 
                LinkedIn </button>
            </a> 
            
        </div>
    
    )
    
}