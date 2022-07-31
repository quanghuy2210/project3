import React from "react";
import {OutstandingWrapper} from './style'
import Title from "../Componentcommon/Title";
import Para from "../Componentcommon/Para";
import Button from "../Componentcommon/Button";

const Outstanding = () => {
    return (
        <OutstandingWrapper>
            <div className="img">
                <img src='/assets/image/Frame.png' />
            </div>
            <div className="content">
                <Title name='Why We Stand Out in the Industry' />
                <Para desc='Optima Compass Group is a consulting, services and technology firm with a long established legacy of leadership, innovation, and trust in the anti-money laundering compliance field in the United States, Latin America, Europe, Africa, the Middle East and the Far East.  Since its inception we have focused on innovative ways to deliver cutting edge Compliance solutions to our clients in a dynamic and fast-changing regulatory landscape.' />
                <Button name='Learn More' />
            </div>
        </OutstandingWrapper>
    )
}

export default Outstanding