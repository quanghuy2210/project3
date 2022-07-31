import React from "react";
import {ServiceItemWrapper} from './style'

const ServiceItem = ({item}) => {
    const {image, title} = item
    return (
        <ServiceItemWrapper >
            <img src={image} />
            <h3>{title}</h3>
        </ServiceItemWrapper>
    )
}

export default ServiceItem