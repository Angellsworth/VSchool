import React from "react"


export default function BlogList(props) {
    return (
        <div className="post">
            <div className="titleSubHover">
                <span id="hoverTitle" className="title" >{props.item.title}</span>
            <br/>
                <span id="hoverTitle" className="subTitle" >{props.item.subTitle}</span>
            </div>
            
            <br/>
            <span className="author">Posted by {props.item.author}</span>
            <span className="date"> {props.item.date}</span>
            
        </div>
    )
}