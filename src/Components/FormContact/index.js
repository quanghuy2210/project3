import React from "react";
import {FormContactWrapper} from './style'
import Input from "../Componentcommon/Input";
import Button from '../Componentcommon/Button'
import Title from '../Componentcommon/Title'
import Para from '../Componentcommon/Para'

const FormContact = () => {
    return (
        <FormContactWrapper>
            <Title name='We Want to Hear from You' />
            <Para desc='Let us know if you have questions, comments or would like to book a consultation...' />
            <div className="dash"></div>
            <form>
               <Input type='text' connect='fname' placeholder='Enter first name' label='First Name*' />
               <Input type='text' connect='lname' placeholder='Enter last name' label='Last Name*' />
               <Input type='email' connect='email' placeholder='user@gmail.co' label='Email Address*' />
               <Input type='number' connect='phone' placeholder='+888 2455 333' label='Phone Number*' />
               <div className="comment">
                   <Input label='Your Message*' />
                   <textarea placeholder="Write your mesaage here more then 500 words"></textarea>
               </div>
               <Input type='checkbox' connect='checkbox'  label='I would like to receive periodic newsletters via email.' />
            </form>
            <Button name='Send Message' />
        </FormContactWrapper>
    )
}

export default FormContact