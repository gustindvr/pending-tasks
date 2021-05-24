/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import shortid from 'shortid';
import styled from 'styled-components';
import {ContainerForm, Title, Form, Label, Input, TextArea} from '../Layout/TaskFormStyled/BaseForm';

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

const TaskForm = ({addValueTask}) => {

  const sendValuesTask = e => {
    e.preventDefault();

    const [title, description] = e.target.elements;

    addValueTask({
      id: shortid.generate(),
      title: title.value.trim(),
      description: description.value.trim()
    });

  };

  return ( 
    <ContainerForm onSubmit={sendValuesTask}>
      <Title>Ingresar una tarea</Title>
      <Form>
        <Label>Nombre de tarea</Label>
        <Input 
          placeholder='Ej: Pelar las chauchas'
          name='title'

        />
        <Label>Descripción</Label>
        <TextArea 
          placeholder='Ej: Hace 1 semana que las tenes ahi tiradas, se te van a pudrir.'
          name='description'
        />
        <Button>Enviar</Button>
      </Form>
    </ContainerForm>
  );
};
 
export default TaskForm;