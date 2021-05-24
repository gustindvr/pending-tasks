/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';

import styled from 'styled-components';

import maquina from '../../assets/jpg/maquina-de-escribir.jpg';

const HeaderContainer = styled.div ` 
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 630px;
  flex: 1 1 100%;
  background-image: url(${maquina});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Button = styled.button `
  display: flex;
  margin: 0 auto;
  align-self: center;
  font-size: 24px;
  background-color: rgb(238, 48, 14, 0.7);
  color: white;
  padding: 10px;
  border-radius: 10px;
  border-style: none;
  box-shadow: -1px 17px 5px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: -1px 17px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 17px 5px 0px rgba(0,0,0,0.75);

  &:hover{
    cursor: pointer;
    background-color: rgb(238, 48, 14);
  }
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