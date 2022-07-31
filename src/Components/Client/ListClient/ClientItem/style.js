import styled from "styled-components";
import { device } from "../../../../contants";

export const ClientItemWrapper = styled.div`
   width: calc((100% - 90px) / 4);
   box-shadow: 0px 15px 35px rgba(34, 79, 94, 0.06);
   background: #FFFFFF;
   border-radius: 10px;
   @media ${device.tablet}{
      width:calc((100% - 30px) / 2);
      margin-bottom: 30px;
   }
   &:first-child .img{
    background-color: #FFF4E3;
   }
   &:nth-child(2) .img{
    background-color: #E1F3FA;
   }
   &:nth-child(3) .img{
    background-color:#FCEBFF ;
   }
   &:last-child .img{
    background-color:#E1F7EF ;
   }
  .img{
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0px 0px;
  }
  h3{
    padding: 25px 30px 10px;
    font-weight: 500;
   font-size: 1.8rem;
   line-height: 2.7rem;
   color: #082A36;
   border-bottom: 1px solid #D3D3D3;
   @media ${device.laptopS}{
    font-size: 1.6rem;
    line-height: 2.4rem;
   }
  }
`