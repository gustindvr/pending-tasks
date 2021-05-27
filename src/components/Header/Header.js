/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';

import styled from 'styled-components';

import maquina from '../../assets/jpg/maquina-de-escribir.jpg';
import { Button } from '../Layout/Elements/Button';

const HeaderContainer = styled.div ` 
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 667px;
  flex: 1 1 100%;
  background-image: url(${maquina});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Header = ({ changeStatusHeader }) => {

  const welcomePeople = e => {
    e.preventDefault();
    changeStatusHeader(false);
  };

  return ( 
    <HeaderContainer>
      <Button
        type='submit'
        onClick={welcomePeople}
      >Bienvenidx</Button>
    </HeaderContainer>
  );  
};
 
Header.prototype = {
  changeStatusHeader: PropTypes.func.isRequired
};


export default Header;