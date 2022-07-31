import React from "react";
import {CityItemWrapper} from './style'

const CityItem = ({item}) => {
    return (
        <CityItemWrapper >
            {item}
        </CityItemWrapper>
    )
}

export default CityItem