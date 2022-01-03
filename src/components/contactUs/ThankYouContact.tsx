import React from 'react'
import {Footer} from '../footer/Footer';
import {TopNavBar} from '../topNavBar/TopNavBar'
import './thankYouContact.css'

export const ThankYouContact = () => {
    return (
        <div>
            <TopNavBar/>
                <div className='thankyou-main'>
                    <h1>Thank you for choosing Newell Pressure Wash!</h1>
                    <h2>We will be contacting you shortly!</h2>
                </div>
            <Footer/>
        </div>
    )
}
