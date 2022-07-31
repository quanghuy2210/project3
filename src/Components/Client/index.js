import React from "react";
import {ClientWrapper} from './style'
import { client } from "../../Data/data";
import Title from "../Componentcommon/Title";
import Para from "../Componentcommon/Para";
import ListClient from "./ListClient";

const Client = () => {
    const {title, desc, listMap} = client
    return (
        <ClientWrapper>
            <Title name={title} />
            <Para desc={desc} />
            <ListClient listMap={listMap} />
        </ClientWrapper>
    )
}

export default Client