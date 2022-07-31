import styled from "styled-components";
import {device} from '../../../contants'

export const TitleWrapper = styled.h2`
font-weight: 500;
font-size: 3.2rem;
line-height: 5rem;
@media ${device.laptopS}{
    font-size: 2.5rem;
    line-height: 4rem;
}
@media ${device.tablet}{
    font-size: 2rem;
    line-height: 3rem;
}
`