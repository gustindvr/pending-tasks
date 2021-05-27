import styled from 'styled-components';
import PropTypes from 'prop-types';
import { textAlign, basePx } from '../../../constants/layout';

export const ContainerForm = styled.div `
border: 3px solid  #ee880e;
${(props) => props.talign && `text-align : ${props.talign}`};
${(props) => props.bradius && `border-radius : ${props.bradius}px`};
${(props) => props.t && `margin-top : ${props.t * basePx}px`};
padding-top: 50px;
box-shadow: -1px 9px 90px 0px rgba(209,123,23,0.69);
-webkit-box-shadow: -1px 9px 90px 0px rgba(209,123,23,0.69);
-moz-box-shadow: -1px 9px 90px 0px rgba(209,123,23,0.69);

`;

ContainerForm.propTypes = {
  talign: PropTypes.oneOf(textAlign),
  bradius: PropTypes.number,
  t: PropTypes.number
};