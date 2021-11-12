import React, { FunctionComponent } from 'react';
import './TopNavBar.css'

import newellLogo from '../../logo.png'

export const TopNavBar:FunctionComponent = () => {
    return (
        <div className="main-nav">
            <img src={newellLogo} alt="Company Logo"></img>
            <div>_____________________________________________________________________________________________________________</div>
            <ul className="main-nav-options">
                <li><a href="/">Home</a></li>
                <li><a href="/">About us</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Reviews</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>
        </div>
    )
};
