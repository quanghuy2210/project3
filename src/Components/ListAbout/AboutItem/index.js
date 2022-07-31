import React from "react";
import {AboutItemWrapper} from './style'
import Title from '../../Componentcommon/Title'
import Para from '../../Componentcommon/Para'

const AboutItem =({item}) => {
    const {img, title, listPara} = item
    return (
        <AboutItemWrapper>
            <div className="about-left">
                <img src={img} />
            </div>
            <div className="about-right">
                 <Title name={title} />
                 {
                    listPara.map(item => {
                        return <Para key={`pr-${item}`} desc={item} />
                    })
                 }
            </div>
        </AboutItemWrapper>
    )
}

export default AboutItem