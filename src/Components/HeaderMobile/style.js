import styled from "styled-components";
import {device} from '../../contants'

export const HeaderMobileWrapper = styled.div`
   width: 100%;
   padding: 20px;
   align-items: center;
   justify-content: space-between;
   position: relative;
   display: none;
    @media ${device.tablet}{
        display: flex;
    }
   .check-menu{
      display: none;
      &:checked ~ .over-menu-mobile{
         transform: translateX(0);
         transition: 0.3s;
      }
   }
   label svg{
      cursor: pointer;
      width: 25px;
      height: 25px;
   }
   
`