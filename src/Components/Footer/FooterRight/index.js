import React from "react";
import {FooterRightWrapper} from './style'

const FooterRight = ({dataFooter}) => {
    return (
        <FooterRightWrapper>
            {
                dataFooter.map(item => {
                    const {title,listFooter} = item
                    return(
                         <div className="content" key={item.id}>
                              <h3>{title}</h3>
                              <ul>
                              {
                                listFooter.map(item => <li key={item}>{item}</li>)
                              }
                              </ul>
                         </div>
                    )
                })
            }
        </FooterRightWrapper>
    )
}

export default FooterRight