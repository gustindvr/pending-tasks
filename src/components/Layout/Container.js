import styled from 'styled-components';

export const Container = styled.div ` 
  margin: 0 10px;
  padding: 20px 10px;

  @media (min-width:300px) and (max-width:450){
    display: flex;
    flex-direction: column;
    flex: 0 0 90%
    margin 0 40px;
  }
`;