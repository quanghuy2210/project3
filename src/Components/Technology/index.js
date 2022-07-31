import React from "react";
import {TechnologyWrapper} from './style'
import Title from '../Componentcommon/Title'
import Para from '../Componentcommon/Para'
import Button from '../Componentcommon/Button'

const Technology = () => {
    return (
        <TechnologyWrapper>
            <Title name='AML Compass Technology Platforms' />
            <Para desc='Our proprietary AML Compass Suite is a fully automated compliance solution for banks and non-bank financial institutions including hedge funds, broker dealers, insurance companies, and domestic and international MSBs that have regulatory reporting and control…' />
            <Button name='Learn More' />
        </TechnologyWrapper>
    )
}

export default Technology