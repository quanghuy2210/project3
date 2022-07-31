import styled from "styled-components";
import {device} from '../../../contants'

export const FooterLeftWrapper = styled.div`
width: 35%;
@media ${device.tablet}{
      width: 100%;
   }
img{
    margin-bottom: 43px;
}
ul{
    li{ 
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        img{
            margin: 0 13px 0 0;
        }
        span{
            font-weight: 400;
            font-size: 1.5rem;
            line-height: 2.2rem;
            color: #FFFFFF;
            opacity: 0.95;
        }
    }
}
`