/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import shortid from 'shortid';
import {ContainerForm, Title, Form, Label, Input, TextArea} from '../Layout/TaskFormStyled/BaseForm';
import { Button } from '../Layout/Elements/Button';
import Error from '../Error/Error';
 
const TaskForm = ({addValueTask, setBlackboard, setError, error}) => {

  const sendValuesTask = e => {
    e.preventDefault();

    const [title, description] = e.target.elements;

    console.log(title.value);

    if(title.value === '' || description.value === ''){
      setError(true);
      return;
    }

    setError(false);

    addValueTask({
      id: shortid.generate(),
      title: title.value.trim(),
      description: description.value.trim()
    });

    setBlackboard(true);
    
    title.value = '';
    description.value = '';
  };

  return ( 
    <ContainerForm onSubmit={sendValuesTask} talign='center' bradius={10} t={4}>
      <Title>Tareas Pendientes</Title>
      <Form justify='center' b={20}>
        { error ? 
          <Error 
            title='Apa! parece que hubo un error' 
            message='Uno o mas campos están vacios' 
          /> : null}
        <Label>Nombre de tarea</Label>
        <Input 
          placeholder='Ej: Pelar las chauchas'
          name='title'
          m={4}
          p={2}
          bradius={10}
        />
        <Label>Descripción</Label>
        <TextArea 
          placeholder='Ej: Hace 1 semana que las tenes ahi tiradas, se te van a pudrir.'
          name='description'
          m={4}
          bradius={10}
          p={5}
        />
        <Button>Enviar</Button>
      </Form>
    </ContainerForm>
  );
};
 
export default TaskForm;