import styled from "styled-components";
import {device} from '../../../contants'

export const TechItemWrapper = styled.div`
   width: calc((100% - 60px) / 3);
   padding: 40px 30px;
   box-shadow: 0px 20px 40px rgba(8, 150, 204, 0.2);
   border-radius: 6px;
   line-height: 2.1rem;
   @media ${device.tablet}{
    width: calc((100% - 30px) / 2);
    margin-bottom: 30px;
   }
   .title{
    font-size: 1.6rem;
    font-weight: 500;
   }
   .desc{
    display: inline-block;
    margin: 15px 0;
    font-weight: 400;
    font-size: 1.4rem;
   }
   &:first-child{
    background: #0896CC;
    color: #fff;
   }
   .over-button{
    background-color: rgba(0,0,0,0);
    padding: 0;
    font-size: 1.3rem;
   }
   &:nth-child(2),&:last-child{
    .over-button{
        color: #0896CC;
        svg{
        fill: #0896CC;
    }
    }
    background-color: #fff;
   }
`