import React from "react";
import {TitleWrapper} from './style'

const Title = ({name}) => {
    return (
        <TitleWrapper className="over-title">{name}</TitleWrapper>
    )
}

export default Title