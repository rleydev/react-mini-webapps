import React from "react"
import logo from "../assets/meme-logo.png"

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="logo" className="header--image"/>
            <h4 className="header--project">Tablet-Mobile Version</h4>
        </header>
    )
}