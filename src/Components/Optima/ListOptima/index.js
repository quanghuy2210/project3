import React from "react";
import {ListOptimaWrapper} from './style'
import OptimaItem from "./OptimaItem";

const ListOptima = ({listOptima}) => {
    return (
        <ListOptimaWrapper>
            {
                listOptima.map(item => {
                    return (
                        <OptimaItem key={item.id} item={item} />
                    )
                })
            }
        </ListOptimaWrapper>
    )
}

export default ListOptima