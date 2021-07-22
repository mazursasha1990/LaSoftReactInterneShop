import React from 'react';
import { Navbar } from '..';

import './index.css'


function Header() {

    return (
        <section className="header">
            <section className="headerTop">
                <section className="header-top__logo">
                    <a href="/" className="header-logo">LOGO</a>
                </section>
                <section className="header-top__navbar">
                    <section className="header-top__navigation">
                        <Navbar />
                    </section>
                </section>
                <hr className="header-top__seperator"></hr>
            </section>

        </section>
    )
}

export default Header;

