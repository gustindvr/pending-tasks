import styled from 'styled-components';
import PropTypes from 'prop-types';
import { justifyContents, alignValues, basePx} from '../../constants/layout';

const baseSizeCol = 6.25;
export const Col = styled.div ` 
flex-flow: row wrap;
${(props) => `flex : 0 0 ${props.col * baseSizeCol}%`};
${(props) => props.m && `margin : ${props.m * basePx}px`};
${(props) => props.t && `margin-top : ${props.t * basePx}px`};
${(props) => props.b && `margin-bottom : ${props.b * basePx}px`};
${(props) => props.l && `margin-left : ${props.l * basePx}px`};
${(props) => props.r && `margin-right : ${props.r * basePx}px`};
${(props) => props.p && `padding : ${props.p * basePx}px`}
${(props) => props.align && `align-items : ${props.align}`};
${(props) => props.justify && `justify-content : ${props.justify}`};

  @media (min-width: 300px) and (max-width: 600px){
    flex: 0 0 100%;
  }


`;

Col.propTypes = {
  justify: PropTypes.oneOf(justifyContents),
  align: PropTypes.oneOf(alignValues),
  m: PropTypes.number,
  t: PropTypes.number,
  b: PropTypes.number,
  l: PropTypes.number,
  r: PropTypes.number,
  p: PropTypes.number
};
