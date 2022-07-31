import React from "react";
import {Link } from 'react-router-dom'
import {BannerPageSubWrapper} from './style'

const BannerPageSub = ({title}) => {
    return (
        <BannerPageSubWrapper>
            <h1>{title}</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/service'>{title}</Link></li>
            </ul>
        </BannerPageSubWrapper>
    )
}

export default BannerPageSub