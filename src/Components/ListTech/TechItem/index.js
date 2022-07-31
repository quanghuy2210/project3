import React from "react";
import {TechItemWrapper} from './style'
import Button from "../../Componentcommon/Button";

const TechItem = ({item}) => {
    const {image,title,desc} = item
    return (
        <TechItemWrapper>
            <img src={image} />
            <h2 className="title">{title}</h2>
            <span className="desc">{desc}</span>
            <Button name='Get Started' src='/assets/image/arrow.png' />
        </TechItemWrapper>
    )
}

export default TechItem