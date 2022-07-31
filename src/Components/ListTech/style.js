import styled from "styled-components";
import {device} from '../../contants'

export const ListTechWrapper = styled.div`
    width: 100%;
    padding: 0 120px;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    @media ${device.laptopS}{
        padding: 50px;
        transform: translateY(0);
    }
    @media ${device.tablet}{
            padding: 20px;
            flex-wrap: wrap;
    }
`