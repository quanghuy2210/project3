import styled from "styled-components";
import {device} from '../../contants'

export const HeaderWrapper = styled.div`
    width: 100%;
    padding: 0 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media ${device.laptopS}{
          padding: 0 50px;
     }
     @media ${device.tablet}{
          padding: 10px 20px;
          display: none;
     }
     
     
    .logo{
        cursor: pointer;
    }
    .header-right{
        display: flex;
        align-items: center;
        img{
            width: fit-content;
            height: fit-content;
            @media ${device.tablet}{
                  display: none;
            }
        }
        
    }
   
`
