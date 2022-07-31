import React from "react";
import BannerPageSub from '../../Components/BannerPageSub'
import ListAbout from "../../Components/ListAbout";
import BookService from '../../Components/BookService'
 
const PageAbout = ({title}) => {
    return (
        <>
          <BannerPageSub title={title} />
          <ListAbout />
          <BookService />
        </>
    )
}

export default PageAbout