import React from "react"
import instagramLogo from "../images/instagram.png"

export default function Nav() {
    return (
        <nav>
            <button className="logo">
                <img src={instagramLogo} alt="logo" />
            </button>
            <input type="text" className="search" placeholder="search" />
            <span className="nav-links">
                <button>
                    <i className="fas fa-home" />
                </button>
                <button>
                    <i className="fas fa-comment-alt" />
                </button>
                <button>
                    <i className="fas fa-compass" />
                </button>
                <button>
                    <i className="fas fa-heart" />
                </button>
            </span>
        </nav>
    )
}