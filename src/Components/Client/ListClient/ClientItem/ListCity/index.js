import React from "react";
import {ListCityWrapper} from './style'
import CityItem from "./CityItem";

const ListCity = ({listCity}) => {
    return (
        <ListCityWrapper >
            {
                listCity.map(item => {
                    return (
                        <CityItem key={item.id} item={item} />
                    )
                })
            }
        </ListCityWrapper>
    )
}

export default ListCity