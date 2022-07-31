import styled from "styled-components";
import {device} from '../../contants'

export const OptimaWrapper = styled.div`
   padding: 60px 120px;
   display: flex;
   flex-direction: column;
   align-items: center;
   @media ${device.laptopS} {
      padding: 50px;
   }
   @media ${device.tablet}{
      padding: 20px;
   }
`