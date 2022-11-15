import React from "react"
import twitter from "../images/square-twitter.svg"
import facebook from "../images/square-facebook.svg"
import github from "../images/square-github.svg"

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footerLinks">
                <hr className="footerLine"/>
                <img className="footerIcons" src={twitter}/>
                <img className="footerIcons" src={facebook}/>
                <img className="footerIcons" src={github}/>
            </div>
            <br/>
            <span className="footerSpan">Copyright © Your Website 2022</span>
        </footer>
    )
}