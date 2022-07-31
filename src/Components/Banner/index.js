import React from "react";
import {BannerWrapper} from './style'
import Button from '../Componentcommon/Button'

const Banner = () => {
    return (
        <BannerWrapper >
            <h1 className="title"><span>Optima</span> compass anti money laundering technology and services redefined</h1>
            <p className="para">Optima Compass Group is a consulting, services and technology firm with a long established legacy of leadership.</p>
            <Button name="Get Started" src='/assets/image/arrow.png' />
        </BannerWrapper>
    )
}

export default Banner