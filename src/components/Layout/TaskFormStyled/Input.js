import styled from 'styled-components';
import PropTypes from 'prop-types';
import { basePx } from '../../../constants/layout';

export const Input = styled.input ` 
border: 2px solid orange;
font-size: 20px;
${(props) => props.bradius && `border-radius : ${props.bradius}px`};
${(props) => props.m && `margin : ${props.m * basePx}px`};
${(props) => props.p && `padding : ${props.p * basePx}px`};
`;

Input.propTypes = {
  bradius: PropTypes.number,
  m: PropTypes.number,
  p: PropTypes.number,
};