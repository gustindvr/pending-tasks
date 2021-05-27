import styled from 'styled-components';
import PropTypes from 'prop-types';
import { basePx } from '../../../constants/layout';

export const TextArea = styled.textarea ` 
width: 100%;
border: 2px solid orange;
${(props) => props.bradius && `border-radius : ${props.bradius}px`};
${(props) => props.p && `padding : ${props.p * basePx}px`};
${(props) => props.m && `margin : ${props.m * basePx}px`};
`;

TextArea.propTypes = {
  bradius: PropTypes.number,
  m: PropTypes.number,
  p: PropTypes.number,
};