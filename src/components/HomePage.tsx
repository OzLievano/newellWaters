import React, {FunctionComponent} from 'react'
import { AboutSection } from './about/AboutSection'
import { BannerImage } from './banner/BannerImage'
import { Footer
 } from './footer/Footer'
import ServiceSection from './service/ServiceSection'
import { TopNavBar } from './topNavBar/TopNavBar'

export const HomePage:FunctionComponent = () => {
    return (
        <div>
            <TopNavBar/>
            <BannerImage/>
            <AboutSection/>
            <ServiceSection/>
            <Footer/>
        </div>
    )
}

