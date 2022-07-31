import React from "react";
import {Link} from 'react-router-dom'
import {HeaderWrapper} from './style'
import {listMenu} from '../../Data/data'
import ListMenu from "./ListMenu";

const Header = ({handleBg, currentIndexActive}) => {
    return(
        <HeaderWrapper className="over-header">
            <h1 className="logo">
                <Link to='/'>
                    <img src='/assets/image/OCG logo 2.png' />
                </Link>
            </h1>
            <div className="header-right">
                <ListMenu handleBg={handleBg} currentIndexActive={currentIndexActive} listMenu={listMenu} />
                <img src='/assets/image/3917132 1.png' />
            </div>
        </HeaderWrapper>
    )
}

export default Header