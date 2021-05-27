/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';
import {ContainerError, TitleError} from '../Layout/ErrorStyled/IndexError';


const Error = ({title, message}) => {
  return ( 
    <ContainerError b={2}>
      <TitleError>{title}</TitleError>

      {message}
    </ContainerError>
  );
};
 
Error.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Error;