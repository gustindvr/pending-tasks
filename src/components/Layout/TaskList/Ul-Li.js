import styled from 'styled-components';
import { basePx } from '../../../constants/layout';

export const Ul = styled.ul ` 
  color: white;
  list-style: none;
  ${(props) => props.p && `padding: ${props.p * basePx}px`};
  ${(props) => props.m && `margin: ${props.m * basePx}px`};
`;

export const Li = styled.li ` 
  width:100%;
  flex-flow: row wrap;
  font-size: 20px;
  ${(props) => props.p && `padding: ${props.p * basePx}px`};
  ${(props) => props.m && `margin: ${props.m * basePx}px`};

    h3{
      width: 100%;
    }
    p{
      font-family: 'Caveat-Variable';
      font-size: 24px;
      margin-left: 10px;
    }
`;
