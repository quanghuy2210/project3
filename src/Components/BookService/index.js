import React from "react";
import {BookServiceWrapper} from './style'
import Title from "../Componentcommon/Title";
import Button from '../Componentcommon/Button'

const BookService = () => {
    return (
        <BookServiceWrapper>
            <Title name='Have Questions or Need to Book a Consultation?' />
            <Button name='Contact Us Now' />
        </BookServiceWrapper>
    )
}

export default BookService