import React from "react";
import {PageServiceWrapper} from './style'
import Service from '../../Components/Service'
import BannerPageSub from "../../Components/BannerPageSub";
import BookService from "../../Components/BookService";

const PageService = ({title}) => {
    return (
        <PageServiceWrapper>
          <BannerPageSub title={title} />
          <Service />
          <BookService />
        </PageServiceWrapper>
    )
}

export default PageService