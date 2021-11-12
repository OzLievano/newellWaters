import React, {FunctionComponent} from 'react'
import { Footer } from '../footer/Footer';
import { TopNavBar } from '../topNavBar/TopNavBar';

export const AboutView:FunctionComponent = () => {
    return (
        <div>
            <TopNavBar/>
            ABOUT THE COMPANY 
            <Footer/>
        </div>
    )
};
