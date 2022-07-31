import React from "react";
import {InputWrapper} from './style'

const Input = ({connect,label,type,placeholder}) => {
    return (
        <InputWrapper className="over-input">
              <label for={connect}>{label}</label>
              <input type={type} id={connect} placeholder={placeholder} />
        </InputWrapper>
    )
}

export default Input