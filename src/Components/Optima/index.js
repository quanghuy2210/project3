import React from "react";
import {OptimaWrapper} from './style'
import {listOptima} from '../../Data/data'
import Title from "../Componentcommon/Title";
import Button from "../Componentcommon/Button";
import ListOptima from "./ListOptima";

const Optima = () => {
    return (
        <OptimaWrapper>
            <Title name='Optima Alerts' />
            <ListOptima listOptima={listOptima} />
            <Button name='Load More' />
        </OptimaWrapper>
    )
}

export default Optima