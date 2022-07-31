import React from "react";
import {ListServiceWrapper} from './style'
import ServiceItem from "./ServiceItem";

const ListService = ({listService}) => {
    return (
        <ListServiceWrapper>
            {
                listService.map(item => {
                    return <ServiceItem key={item.id} item={item} />
                })
            }
        </ListServiceWrapper>
    )
}

export default ListService