import React from "react";
import {Link} from 'react-router-dom'
import {MenuMobileItemWrapper} from './style'

const MenuMobileItem = ({title,link}) => {
    return (
        <MenuMobileItemWrapper >
            <Link to={link}>
               {title}
            </Link>
            
        </MenuMobileItemWrapper>
    )
}

export default MenuMobileItem