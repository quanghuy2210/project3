import styled from "styled-components";
import {device} from '../../../contants'

export const ButtonWrapper = styled.button`
cursor: pointer;
   padding: 14px 44px;
   font-size: 1.4rem;
   color: #fff;
   background-color: #FF545F;
   border-radius: 8.3rem;
   border: none;
   font-weight: 500;
   svg{
      margin-left: 10px;
      fill: #fff;
   }
   @media ${device.laptopS}{
      padding: 12px 36px;
   }
   @media ${device.tablet}{
      padding: 8px 28px;
   }
`