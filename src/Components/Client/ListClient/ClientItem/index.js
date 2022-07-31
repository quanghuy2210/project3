import React from "react";
import {ClientItemWrapper} from './style'
import ListCity from "./ListCity";

const ClientItem = ({item}) => {
    const {image, title, listCity} = item
    return (
        <ClientItemWrapper>
            <div className="img">
                <img src={image} />
            </div>
            <h3>{title}</h3>
            <ListCity listCity={listCity} />
        </ClientItemWrapper>
    )
}

export default ClientItem