import React from "react"


export default function Header() {
   return (
        <header className="header">
            <img src={require (`../images/trollFace.png`)} className="headerImage"/>
            
            <h2 className="headerTitle">Meme Generator</h2>

            <h4 className="headerProject">React Course - Project 3</h4>
        </header>
    ) 
}
    