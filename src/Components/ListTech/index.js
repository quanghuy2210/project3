import React from "react";
import {ListTechWrapper} from './style'
import {listTechnology} from '../../Data/data'
import TechItem from "./TechItem";

const ListTech = () => {
    return (
        <ListTechWrapper>
              {
                listTechnology.map(item => {
                    return <TechItem key={item.id} item={item} />
                })
              }
        </ListTechWrapper>
    )
}

export default ListTech