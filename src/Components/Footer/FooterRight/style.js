import styled from "styled-components";
import {device} from '../../../contants'

export const FooterRightWrapper = styled.div`
   width: 65%;
   margin-left: 210px;
   display: flex;
   justify-content: space-between;
   @media ${device.laptopS}{
    margin-left: 100px;
   }
   @media ${device.tablet}{
     width: 100%;
      margin: 0;
      flex-direction: column;
   }
   .content{
    @media ${device.tablet}{
         display: flex;
         align-items: center;
    }
    h3{
        font-weight: 600;
        font-size: 1.7rem;
        line-height: 2.7rem;
        color: #FFFFFF;
        @media ${device.tablet}{
         min-width: 20%;
         }
        
    }
    ul {
        margin-top: 31px;
        @media ${device.tablet}{
         display: flex;
         padding: 10px 0;
         margin: 0;
         flex-wrap: wrap;
         }
        li{
           margin-bottom:19px;
            font-weight: 400;
            font-size: 1.5rem;
            line-height: 1.8rem;
            color: #DBF5FF;
            @media ${device.tablet}{
            margin: 0 5px;
         }
        }
    }
   }
`