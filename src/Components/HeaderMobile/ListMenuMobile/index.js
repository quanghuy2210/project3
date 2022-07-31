import React from "react";
import {ListMenuMobileWrapper} from './style'
import MenuMobileItem from "./MenuMobileItem";

const ListMenuMobile = ({listMenu}) => {
    return (
        <ListMenuMobileWrapper className="over-menu-mobile">
            {
                listMenu.map(item => {
                    const {id, title, link} = item
                    return (
                        <MenuMobileItem key={id} title={title} link={link} />
                    )
                })
            }
        </ListMenuMobileWrapper>
    )
}

export default ListMenuMobile