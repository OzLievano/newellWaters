import React, { FunctionComponent } from 'react'
import {ServiceTileProps,ServiceTile} from './ServiceTile'
import concreteCleaning from '../../concretecleaning.jpg';
import consultation from '../../consultation.jpg';
import woodCleaning from '../../woodcleaning.jpg'

import './ServiceSection.css'
const serviceTileData: ReadonlyArray<ServiceTileProps> = [
    {
        
        id:1,
        serviceCost: 0,
        serviceIcon: consultation,
        serviceLength:"30 minutes +",
        serviceTitle:"Consultations"
    },
    {
        
        id:2,
        serviceCost: 100,
        serviceIcon: concreteCleaning,
        serviceLength: "1 hour +",
        serviceTitle: "Concerete Surfaces",
    },
    {
        id:3,
        serviceCost: 100,
        serviceIcon: woodCleaning,
        serviceLength: "1 hour +",
        serviceTitle: "Wood Surfaces"
    }
]

const ServiceSection:FunctionComponent = () => {
    const serviceTiles = serviceTileData.map((serviceTile) => {
        return <ServiceTile key={serviceTile.id} {...serviceTile}/>
    })
    return (
        <div className='service-tile-container'>
            {serviceTiles}
        </div>
    )
}

export default ServiceSection
