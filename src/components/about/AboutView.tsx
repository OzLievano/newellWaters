import React, {FunctionComponent} from 'react'
import {useNavigate} from 'react-router-dom';
import { Footer } from '../footer/Footer';
import { TopNavBar } from '../topNavBar/TopNavBar';
import benchCleaning from '../../benchcleaning.webp';
import Button from '@mui/material/Button';

import './AboutView.css'

export const AboutView:FunctionComponent = () => {
    let navigate = useNavigate();
    return (
        <div>
            <TopNavBar/>
            <div className='about-section-body'>
                <img src={benchCleaning} alt='bench cleaning'></img>
                <div className='about-body-text'> A BIT ABOUT US </div>
            </div> 
            <div className='about-section-additional'>
                <h4> Our Background </h4>
                <p>
                    Since our founding, we’ve worked with numerous clients 
                    throughout the area. Great service begins and ends with 
                    experienced and friendly professionals, which is why we put 
                    so much consideration into selecting only the best to join 
                    our team. We complete projects efficiently and on schedule, 
                    and go above and beyond to form lasting relationships with 
                    our clients.
                </p>
                <Button variant="contained" onClick={()=>{navigate('/contact')}}> Contact Us </Button>
            </div>
            <Footer/>
        </div>
    )
};
