import React from "react";
import {ListClientWrapper} from './style'
import ClientItem from "./ClientItem";

const ListClient = ({listMap}) => {
    return (
        <ListClientWrapper>
            {
                listMap.map(item => {
                    return (
                        <ClientItem key={item.id} item={item} />
                    )
                })
            }
        </ListClientWrapper>
    )
}

export default ListClient