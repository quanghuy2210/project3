import styled from "styled-components";
import {device} from '../../contants'

export const BookServiceWrapper = styled.div`
  width: 100%;
  background-image: url('/assets/image/Group 10572.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #E1F3FA;
  padding: 100px 120px;
  @media ${device.laptopS}{
    padding: 50px ;
  }
  @media ${device.tablet}{
    padding: 10px ;
  }
  .over-title{
    max-width: 470px;
    margin-bottom: 45px;
    text-align: center;
    @media ${device.laptopS}{
      margin-bottom: 10px;
    }
  }
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`