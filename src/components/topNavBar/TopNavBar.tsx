import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './TopNavBar.css'

import newellLogo from '../../logo.png'

export const TopNavBar:FunctionComponent = () => {
    return (
        <div className="main-nav">
            <img src={newellLogo} alt="Company Logo"></img>
            <div>_____________________________________________________________________________________________________________</div>
            <ul className="main-nav-options">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
    )
};
