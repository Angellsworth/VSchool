import React from "react"
import facebookSquare from "../react-icons/square-facebook-brands.svg"
import gitHubSquare from "../react-icons/square-github-brands.svg"
import instagramSquare from "../react-icons/square-instagram-brands.svg"
import linkedInSquare from "../react-icons/linkedin-brands.svg"


export default function Footer() {
    return (
        <div className="footer_section">
            <a href="https://www.facebook.com/profile.php?id=100083997526955">
                <img src={facebookSquare} className="icons"/>
            </a>
            
            <a href="https://github.com/Angellsworth">
                <img src={gitHubSquare} className="icons" />
            </a>

            <a href="https://www.instagram.com/angellsworth/">
                <img src={instagramSquare} className="icons"/>
            </a>
            
            <a href="https://www.linkedin.com/in/angela-ellsworth/">
               <img src={linkedInSquare} className="icons" /> 
            </a>
            
            
        </div>
    )
}