import React from "react"
import Star from "../images/Star1.png"
// import Katie from "../images/katie-zaferes.png"


export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
//  creates variable to pick the images
    const image = `../images/${props.item.coverImg}`
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require (`../images/${props.item.coverImg}`)} className="card--image" />
            
            <div className="card--stats">
                <img src={Star} className="star"/>
                <span>{props.item.stats.rating}</span>
                <span className="grey">({props.item.stats.reviewCount}) • </span>
                <span className="grey">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p className="description">{props.item.description}</p>
            <p><span className="bold">From ${props.item.price}</span>/Person</p>
        </div>

    )
}