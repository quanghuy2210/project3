import React from "react";
import {FooterLeftWrapper} from './style'

const FooterLeft = ({listContact}) => {
    return (
        <FooterLeftWrapper>
            <img src="/assets/image/OCG logo 3.png" />
            <ul>
                {
                    listContact.map(item => {
                        return (
                            <li key={item.id}>
                                <img src={item.image} />
                                <span>{item.desc}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </FooterLeftWrapper>
    )
}

export default FooterLeft