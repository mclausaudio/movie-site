import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expanded bg-dark">
            <a className="navbar-brand">MovieSite</a>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/popular" className="nav-link">Popular</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;