import React from "react";
import {OptimaItemWrapper} from './style'
import Para from "../../../Componentcommon/Para";
import Button from "../../../Componentcommon/Button";

const OptimaItem = ({item}) => {
    const {image, title, list, desc} = item
    return (
        <OptimaItemWrapper>
            <img src={image} />
            <div className="content">
            <h3>{title}</h3>
            <ul>
            {
                list.map(item => {
                    return(
                        <li>
                            <img src={item.image} />
                            <span>{item.desc}</span>
                        </li>
                    )
                })
            }
            </ul>
            <Para desc={desc} />
            <Button name='Read More' />
            </div>

        </OptimaItemWrapper>
    )
}
export default OptimaItem