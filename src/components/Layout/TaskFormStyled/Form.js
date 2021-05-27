import PropTypes from 'prop-types';
import styled from 'styled-components';
import { justifyContents, alignValues, basePx} from '../../../constants/layout';

export const Form = styled.form ` 
display: flex;
flex-flow: row wrap;
${(props) => props.b && `margin-bottom : ${props.b * basePx}px`};
${(props) => props.align && `align-items : ${props.align}`};
${(props) => props.justify && `justify-content : ${props.justify}`};
`;

Form.propTypes = {
  justify: PropTypes.oneOf(justifyContents),
  align: PropTypes.oneOf(alignValues),
  b: PropTypes.number
};