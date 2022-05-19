
import React from 'react'
import './Navbar.scss';
import { Link } from "react-router-dom";
import { FaUserAstronaut } from "react-icons/fa";

function NavbarLog() {

    const handleLogout = () => {
		localStorage.removeItem("token");
    localStorage.removeItem("user");
		window.location.reload();
	};

    const user = localStorage.getItem('user');

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
                    <li><Link to="/dashboard"><FaUserAstronaut color='rgb(255, 79, 79)!important' size={20}/> {user}</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/" onClick={handleLogout}>LogOut</Link></li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default NavbarLog