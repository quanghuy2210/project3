import React from "react";
import {ParaWrapper} from './style'

const Para = ({desc}) =>{
    return (
        <ParaWrapper className="over-para">{desc}</ParaWrapper>
    )
}

export default Para