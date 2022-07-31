import styled from "styled-components";
import {device} from '../../contants'

export const BannerWrapper = styled.div`
   padding: 174px 120px 0;
   height: 73rem;
   background-image: url('/assets/image/Group 10569.png');
   background-position: center;
   background-repeat: no-repeat;
   background-size: contain;
   background-color: #E1F3FA;
   @media ${device.laptopS}{
    padding: 50px;
    height: fit-content;
   }
   @media ${device.tablet}{
    padding: 20px;
   }
   .title{
        max-width: 577px;
        font-size: 3.5rem;
        line-height: 5rem;
        span{
            color: #0896CC;
        }
        @media ${device.laptopS}{
            max-width: 500px;
             font-size: 2.5rem;
             line-height: 4rem;
        }
        @media ${device.tablet}{
            max-width: 100%;
         }
   }
   .para{
    margin: 20px 0 40px;
    max-width: 496px;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #4F5A5E;
    @media ${device.laptopS}{
        font-size: 1.4rem;
    }
    @media ${device.tablet}{
            max-width: 100%;
         }
   }

`