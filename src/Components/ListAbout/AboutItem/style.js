import styled from "styled-components";
import {device} from '../../../contants'

export const AboutItemWrapper = styled.div`
   padding: 20px 120px;
   display: flex;
   align-items: center;
   @media ${device.laptopS}{
    padding: 10px 50px;
   }
   @media ${device.tablet}{
    padding: 10px;
    flex-direction: column;
   }
   .about-left{
    width: 50%;
    @media ${device.tablet}{
    width: 100%;
   }
   }
   .about-right{
    width: 50%;
    @media ${device.tablet}{
    width: 100%;
   }
   }
   &:nth-child(2){
    flex-direction: row-reverse;
    background-image: url('/assets/image/Group 10570 about.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #E1F3FA;
    @media ${device.tablet}{
    flex-direction: column;
   }
   }
`