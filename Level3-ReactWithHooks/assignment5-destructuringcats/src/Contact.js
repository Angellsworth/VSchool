import React from "react"
import Phone from "./images/phone.svg"
import Email from "./images/envelope.svg"



export default function Contact({img, name, phone, email}) {
    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src={Phone} className="icon"/>
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src={Email} className="icon"/>
                <p>{email}</p>
            </div>
        </div>
    )
}

// const person ={
//     img:"./images/charlotte.jpg",
//     Name:"Ms. Whiskerson",
//     phone:"(800) 555-1234",
//     email:"ms.whiskaf@catnap.meow"
// }
