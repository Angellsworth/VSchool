import React, { useState } from "react"

export default function Card(props) {
    
    const image = `../images/${props.item.coverImg}`

        let cardColor
        if(props.item.timeToGo === "Spring") {
            cardColor = "#E4B2A7"
        }else if(props.item.timeToGo === "Fall") {
            cardColor = "#A23E02"
        }else if(props.item.timeToGo === "Summer") {
            cardColor = "#3C8671"
        }else if(props.item.timeToGo === "Winter") {
            cardColor = "#02C9F7"
        }
    

    return (
        <div className="card">
            <a href="">
                <img src={require (`../images/${props.item.coverImg}`)} className='cardImage' />
            </a>
            
            <div style={{backgroundColor: cardColor}} className="cardInfo">
                <a href="" className="cardInfoLink">
                <span>{props.item.place}</span>
                <br/>
                </a>
                
                <a href="" className="cardInfoLink">
                <span>${props.item.price}/person</span>
                <br/>  
                </a>

                <a href="" className="cardInfoLink">
                <span>{props.item.timeToGo}</span>   
                </a>  
            </div>

        </div>
    )
}