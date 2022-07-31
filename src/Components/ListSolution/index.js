import React from "react";
import {ListSolutionWrapper} from './style'
import {listSolution} from '../../Data/data'
import SolutionItem from "./SolutionItem";

const ListSolution = () => {
    return (
        <ListSolutionWrapper>
            {
                listSolution.map(item => {
                    return (
                        <SolutionItem key={item.id} item={item} />
                    )
                })
            }
        </ListSolutionWrapper>
    )
}

export default ListSolution