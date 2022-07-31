import React from "react";
import BannerPageSub from '../../Components/BannerPageSub'
import FormContact from "../../Components/FormContact";

const PageContact = ({title}) => {
    return (
        <>
          <BannerPageSub title={title} />
          <FormContact />
        </>
    )
}

export default PageContact
