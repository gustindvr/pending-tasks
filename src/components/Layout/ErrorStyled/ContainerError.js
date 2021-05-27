import styled from 'styled-components';
import {basePx} from '../../../constants/layout';

export const ContainerError = styled.div ` 
  display: flex;
  width: 100%;
  height: 70px;
  background-color: #da2525;
  ${(props) => props.b && `margin-bottom: ${props.b * basePx}px`};
  ${(props) => props.m && `margin: ${props.m * basePx}px`};
  text-align: center;
  align-items: center;
  flex-flow: column wrap;

`;