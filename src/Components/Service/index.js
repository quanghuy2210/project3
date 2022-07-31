import React from "react";
import {ServiceWrapper} from './style'
import {service} from '../../Data/data'
import Title from "../Componentcommon/Title";
import Para from "../Componentcommon/Para";
import ListService from "./ListService";

const Service = () => {
    const {title,desc,listService} = service
    return (
        <ServiceWrapper className="over-service">
            <Title name={title} />
            <Para desc={desc} />
            <ListService listService={listService} />
        </ServiceWrapper>
    )
}

export default Service