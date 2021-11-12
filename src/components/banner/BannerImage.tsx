import React, { FunctionComponent } from 'react';
import deckCleaning from  "../../manwashingdeck.jpg";

import './BannerImage.css'

export const BannerImage:FunctionComponent = () => {
    return (
        <div className='main-body-container'>
            <img src={deckCleaning} alt="bannerImage"></img>
            <div className='main-body-description'>
                <div className='main-body-action'>
                    <h1>NEWELL PRESSURE WASH</h1>
                    <h5><i>We keep thing simple &amp; clean.</i></h5>
                    <p>Fair prices, superior quality and exceptional customer 
                        service are gauranteed when you work with us.
                    </p>
                    <button className='action-button'>Get in Touch</button>
                </div>
            </div>
        </div>
    )
}

