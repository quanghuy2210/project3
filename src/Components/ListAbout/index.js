import React from "react";
import {ListAboutWrapper} from './style'
import {listAbout} from '../../Data/data'
import AboutItem from "./AboutItem";

const ListAbout = () => {
    return (
        <ListAboutWrapper>
            {
                listAbout.map(item => {
                    return <AboutItem key={item.id} item={item} />
                })
            }
        </ListAboutWrapper>
    )
}

export default ListAbout