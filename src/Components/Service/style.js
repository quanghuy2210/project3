import styled from "styled-components";
import {device} from '../../contants'

export const ServiceWrapper = styled.div`
  width: 100%;
  padding: 60px 120px;
  text-align: center;
  background-color: #E1F3FA;
  @media ${device.laptopS} {
    padding: 50px;
  }
  @media ${device.tablet}{
      padding: 20px;
   }
  .over-para{
    margin: 20px auto 60px;
    max-width: 730px;
  }
`