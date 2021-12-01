import React, { FunctionComponent } from 'react'
import { Footer } from '../footer/Footer'
import { TopNavBar } from '../topNavBar/TopNavBar'
import ServiceSection from './ServiceSection'
import './ServiceView.css'

export const ServicesView:FunctionComponent = () => {
    return (
        <div className="service-view">
            <TopNavBar/>
            <h1>Our Services</h1>
            <ServiceSection/>
            <Footer/>
        </div>
    )
}
