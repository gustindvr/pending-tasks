import styled from 'styled-components';

export const ContainerTasks = styled.div `
  margin-top: 20px;
  padding-top: 10px;
  border-radius: 10px;
  display: flex;
  min-height: 550px;
  background-color: #423e39;
  box-shadow: 9px 11px 13px 0px rgba(255,255,255,0.75);
  -webkit-box-shadow: 9px 11px 13px 0px rgba(255,255,255,0.75);
  -moz-box-shadow: 9px 11px 13px 0px rgba(255,255,255,0.75);

  @media (min-width:300px) and (max-width : 500px){
    width: 90vw;
  }
`;