import styled from "styled-components";
import {device} from '../../../../contants'

export const ServiceItemWrapper = styled.div`
   width: calc((100% - 60px) / 3);
   padding: 40px 26px;
   margin-bottom: 30px;
   background: #FFFFFF;
   box-shadow: 0px 15px 35px rgba(34, 79, 94, 0.06);
   border-radius: 0.8rem;
   @media ${device.tablet}{
      width: calc((100% - 30px) / 2);
   }
   &:nth-child(2) {
    border: 2px solid #5C80FF;
   }
   h3{
    margin-top: 25px;
    font-weight: 400;
    font-size: 1.9rem;
    line-height: 2.8rem;
   text-align: center;
    color: #082A36;
    @media ${device.tablet}{
      font-size: 1.6rem;
   }
   }
`