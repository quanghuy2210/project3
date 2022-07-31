import styled from "styled-components";
import {device} from '../../contants'

export const FooterWrapper = styled.div`
    padding: 60px 120px;
    background-color: #065A78;
    background-image: url('/assets/image/Group 10571.png');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    @media ${device.laptopS}{
        padding: 50px;
    }
    @media ${device.tablet}{
      padding: 20px;
      flex-direction: column;
   }
    
`