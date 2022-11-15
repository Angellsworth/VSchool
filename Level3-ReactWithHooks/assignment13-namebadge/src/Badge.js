import React from "react"

export default function Badge(props) {

    return(
        <div className="badgeContainer">
            <header className="badgeHeader">Badge: </header>
            <div className="badgeItem">Name: {props.firstName} {props.lastName} </div>
            <div className="badgeItem">Phone: {props.phone}</div>
            <div className="badgeItem">Place of birth: {props.placeOfBirth} </div>
            <div className="badgeItem">Favorite Food: {props.favoriteFood} </div>
            <div className="badgeItem">Email: {props.email} </div>
            <div className="badgeItem">Additional Comments: {props.aboutYourself} </div>
        </div>
    )   
}
