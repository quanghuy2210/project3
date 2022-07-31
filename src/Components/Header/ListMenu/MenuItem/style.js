import styled from "styled-components";
import {device} from '../../../../contants'

export const MenuItemWrapper = styled.li`
 cursor: pointer;
 
 &:hover{
   background-color: #ddd;
   transition: 0.3s;
 }
 .active{
   border-bottom: 3px solid #e00;
   background-color: #ddd;
 }
 a{
   display: block;
   padding: 20px;
   font-size: 1.4rem;
   color: #000;
   
   @media ${device.laptopS}{
    padding: 20px 10px;
    font-size: 1.2rem;
 }
 }
 
`