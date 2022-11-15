import React from "react"
import locationIcon from "../images/location.svg"


export default function Card(props) {
    return (
        <div className="card">
            <img src={require(`../images/${props.item.imageUrl}`)} className="cardImage"/>

            <div className="cardInfo">
                <img className="locationIcon" src={locationIcon}/>
                <span className="countryLocation">{props.item.location}</span>a
                <a className="locationLink" href={props.item.googleMapsUrl}>Google Maps Location</a>
                    <br/>
                <span className="actualPlace">{props.item.title}</span>
                    <br/>
                <span className="dates">{props.item.startDate} - {props.item.endDate}</span>
                    <br/>
                <p className="tripDescription">{props.item.description}</p>    
            </div>  
        </div>
    )

}