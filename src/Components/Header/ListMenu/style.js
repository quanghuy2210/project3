import styled from "styled-components";
import {device} from '../../../contants'

export const ListMenuWrapper = styled.ul`
  display: flex;
  @media ${device.tablet}{
          display: none;
    }
`