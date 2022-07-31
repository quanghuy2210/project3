import React,{useState} from "react";
import {Link} from 'react-router-dom'
import {MenuItemWrapper} from './style'

const MenuItem = ({item,index, handleBg, currentIndexActive}) => {
  
    const {title, link} = item
    return (
        <MenuItemWrapper >
          <Link  to={link} 
          className={` ${currentIndexActive === index ? "active" : "" }`} 
          onClick={() => handleBg(index,title)}>
             {title}
          </Link>
        </MenuItemWrapper>
    )
}

export default MenuItem