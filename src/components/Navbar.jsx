
import React from 'react'
import './Navbar.scss';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <nav class="navbar">
            <div class="container">

                <div class="navbar-header">
                <button class="navbar-toggler" data-toggle="open-navbar1">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <Link to="/">
                    <h4>Sanchezroot.<span>wtf</span></h4>
                </Link>
                </div>

                <div class="navbar-menu" id="open-navbar1">
                <ul class="navbar-nav">
                    <li ><Link to="/">Home</Link></li>
                    <li ><Link to="/login">Login</Link></li>
                    <li ><Link to="/signup">Sign Up</Link></li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar