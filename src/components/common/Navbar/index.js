import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss'

function Navbar() {

    return (
        <section className="navbar">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/shop" className="navbar-item">Shop</Link>
            <Link to="/about" className="navbar-item">About</Link>
            <Link to="/contact" className="navbar-item">Contact</Link>
        </section>
    )
}

export default Navbar;