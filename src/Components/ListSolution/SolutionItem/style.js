import styled from "styled-components";
import {device} from '../../../contants'

export const SolutionItemWrapper = styled.div`
  width: calc((100% - 90px) / 2);
  @media ${device.tablet}{
    width: 100%;
  }
`