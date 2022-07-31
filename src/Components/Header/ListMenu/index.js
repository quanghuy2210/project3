import React,{useState} from "react";
import {ListMenuWrapper} from './style'
import MenuItem from "./MenuItem";

const ListMenu = ({listMenu,handleBg, currentIndexActive}) => {
    
    return (
        <ListMenuWrapper >
            {
                listMenu.map((item,index) => {
                    return(
                      <MenuItem key={item.id} item={item} index={index} currentIndexActive={currentIndexActive} handleBg={handleBg} />
                    )
                })
            }
        </ListMenuWrapper>
    )
}

export default ListMenu