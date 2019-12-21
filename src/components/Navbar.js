import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from "../images/home.svg"
import logo3 from "../images/logo3.jpg"



const Navbar = () => {
    const navStyle ={

        width: "100%",
        height: "100px",
        color: "#6AFB92"
        // position: "fixed"
   
    }
    const logoStyle = {
    height: "6vh",
    width: "100%",
    }
    return (
        <nav className="nav-wrapper light green" >
            <div className="container" style={navStyle}>
                <a className="brand-logo"><img src={logo3} style={logoStyle} alt=""/> </a>
                <ul className="left">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar