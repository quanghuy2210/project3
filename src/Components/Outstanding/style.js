import styled from "styled-components";
import {device} from '../../contants'

export const OutstandingWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 60px 120px;
  background: linear-gradient(180deg, #F6FCFE 0%, rgba(246, 252, 254, 0) 100%);
  @media ${device.laptopS}{
    padding: 50px;
  }
  @media ${device.tablet}{
      padding: 20px;
      flex-wrap: wrap;
   }
  .img{
    width: 50%;
    @media ${device.tablet}{
      width: 100%;
   }
  }
  .content{
    width: 50%;
    @media ${device.tablet}{
      width: 100%;
   }
    .over-para{
        margin: 35px 0 40px;
    }
  }
`