import styled from 'styled-components'
import {device} from '../../contants'

export const BannerPageSubWrapper = styled.div`
   padding: 80px 120px;
   width: 100%;
   background-image: url('/assets/image/baner2.png');
   background-position: center;
   background-repeat: no-repeat;
   background-size: contain;
   background-color: #065A78;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   @media ${device.laptopS}{
      padding: 50px;
    }
   @media ${device.tablet}{
      padding: 10px;
    }
   h1{
      font-weight: 600;
       font-size: 3.2rem;
      line-height: 48px;
      color: #FFFFFF;
      margin-bottom: 15px;
   }
   ul{
      display: flex;
      li {
         &:first-child::after{
            content: '>';
            font-weight: 400;
           font-size: 1.5rem;
           line-height: 26px;
           color: #FFFFFF;
         }
         a{
         padding: 0 16px;
         font-weight: 400;
         font-size: 1.5rem;
         line-height: 26px;
         color: #FFFFFF;
      }
      }
   }
`