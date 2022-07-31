import styled from "styled-components";
import {device} from '../../../contants'

export const ListOptimaWrapper = styled.div`
  margin: 80px 0 50px;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   @media ${device.laptopS} {
    margin: 20px 0;
   }
`