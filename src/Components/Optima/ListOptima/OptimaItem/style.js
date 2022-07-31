import styled from "styled-components";
import {device} from '../../../../contants'

export const OptimaItemWrapper = styled.div`
   width: calc((100% - 60px) / 3);
   background: #FFFFFF;
    box-shadow: 0px 15px 35px rgba(34, 79, 94, 0.06);
    border-radius: 0px 0px 15px 15px;
    @media ${device.tablet}{
      width: calc((100% - 30px) / 2);
      margin-bottom: 30px;
   }
   .content{
    padding: 25px 30px;
    h3{
        margin-bottom: 34px;
        font-weight: 500;
       font-size: 1.9rem;
       line-height: 3rem;
       color: #082A36;
       @media ${device.tablet}{
          font-size: 1.5rem;
          line-height: 2.5rem;
       }
    }
    ul{
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        li{
            display: flex;
            align-items: center;
            span{
                margin-left: 5px;
                font-weight: 400;
                font-size: 1.1rem;
                line-height: 2rem;
                color: #4F5A5E;
            }
        }
    }
    .over-para{
        font-size: 1.3rem;
        line-height: 2.3rem;
        color: #4F5A5E;

    }
    .over-button{
        margin-top: 25px;
        padding: 0;
        background-color: #fff;
        color: #082A36;
        svg{
            fill: #082A36;;
        }
    }
   }
`