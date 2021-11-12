import React, { FunctionComponent } from 'react'
import './AboutSection.css'
import roofImage from '../../manonroof.jpg'


export const AboutSection:FunctionComponent = () => {
    return (
        <div className='main-about-container'>
            <div className='about-description'>
                <h1>ABOUT</h1>
                <h5>Reliable &amp; Honest</h5>
                <p>Over the years, we’ve learned that great service begins and 
                ends with experienced and friendly professionals, which explains
                our rigorous hiring process. We believe that our team is the 
                best in the business, and have complete and total confidence 
                in every person providing our services.
                </p>
                <p>Newell Pressure Wash finishes each project on schedule and 
                with the highest level of quality. With a focus on personalized 
                service, competitive rates and customer satisfaction, we’re 
                always striving to meet and exceed expectations.</p>
                <button className='action-button'>Learn More</button>
            </div>       
            <img src= {roofImage} alt="man on roof"></img>
        </div>
    )
};
