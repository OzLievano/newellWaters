import React, { useState, FunctionComponent } from 'react'
import { Footer } from '../footer/Footer';
import { TopNavBar } from '../topNavBar/TopNavBar';
import {ContactForm} from './ContactForm'

export const ContactView:FunctionComponent = () => {
    return (
        <div>
            <TopNavBar/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}
