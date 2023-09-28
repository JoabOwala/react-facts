import React from "react";
import reactLogo from "../images/logo192.png"
import "../styles/Nav.css"

function Nav(){

    return (
        <nav className="nav">
            <a href="#">
            <img src={reactLogo} alt="react logo" className="nav-logo"/>
            <h3>ReactFacts</h3>
            </a>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default Nav;