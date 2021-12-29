import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceTile.css';
import Button from '@mui/material/Button';
export interface ServiceTileProps {
    id: number;
    serviceCost: number;
    serviceIcon: string;
    serviceLength: string;
    serviceTitle: string;
}

export const ServiceTile:FunctionComponent<ServiceTileProps> = ({
    id,
    serviceCost,
    serviceIcon,
    serviceLength,
    serviceTitle
}) => {
    const navigate = useNavigate();
    return (
        <div className="service-card" key={id}>
            <img src={serviceIcon} 
            alt={`service-icon-${serviceTitle.toLowerCase().split(' ').join('-')}`}
            />
            <div className='service-card-info'>
                <h3> {serviceTitle} </h3>
                <p> {serviceLength} </p>
                <p> $ {serviceCost}.00 </p>
                <Button variant="contained" onClick={()=>navigate('/contact')}> Book Now </Button>
            </div>
        </div>
    )
}
