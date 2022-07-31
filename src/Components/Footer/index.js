import React from "react";
import {FooterWrapper} from './style'
import {listContact, dataFooter, listSocial} from '../../Data/data'
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterLeft listContact={listContact} />
            <FooterRight dataFooter={dataFooter} />
        </FooterWrapper>
    )
}

export default Footer