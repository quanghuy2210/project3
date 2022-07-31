import styled from "styled-components";
import {device} from '../../contants'

export const ListSolutionWrapper= styled.div`
   width: 100%;
   padding:0 120px 120px;
   display: flex;
   justify-content: space-between;
   @media ${device.laptopS}{
      padding: 50px;
   }
   @media ${device.tablet}{
      padding: 20px;
      flex-wrap: wrap;
   }
`