import React from "react";
import {SolutionItemWrapper} from './style'
import Title from '../../Componentcommon/Title'
import Para from '../../Componentcommon/Para'

const SolutionItem = ({item}) => {
    const {title,listDesc} = item
    return (
        <SolutionItemWrapper>
            <Title name={title} />
            {
                listDesc.map(item => {
                    return <Para desc={item} />
                })
            }
        </SolutionItemWrapper>
    )
}
export default SolutionItem