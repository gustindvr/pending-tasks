import PropTypes from 'prop-types';
import styled from 'styled-components';

import {basePx} from '../../../constants/layout';

export const Label = styled.label ` 
width: 100%;
font-size: 20px;
font-weight: 400;
font-family: 'AlfaSlab';
${(props) => props.m && `margin : ${props.m * basePx}px`}
`;

Label.propTypes = {
  m: PropTypes.number,
};