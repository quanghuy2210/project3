import styled from "styled-components";
import {device} from '../../contants'

export const TechnologyWrapper = styled.div`
   width: 100%;
   padding: 60px 120px;
   background-color:#0896CC;
   background-image: url('/assets/image/Group 10570.png');
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   @media ${device.laptopS}{
       padding: 50px;
   }
   @media ${device.tablet}{
      padding: 20px;
   }
   .over-title{
    max-width: 460px;
    color: #fff;
    @media ${device.tablet}{
      width: 100%;
   }
   }
   .over-para{
    margin: 30px 0 50px;
    max-width: 460px;
    color: #fff;
    @media ${device.tablet}{
      width: 100%;
   }
   }
   .over-button{
    color: #0896CC;
    background-color: #fff;
    svg{
        fill: #0896CC;
    }
   }
`