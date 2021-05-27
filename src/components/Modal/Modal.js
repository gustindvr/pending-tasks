/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Layout/Elements/Button';
import {ContainerModal, ContentModal, TitleModal} from '../Layout/ModalStyles/Index';
import { Label, Input, TextArea, Form } from '../Layout/TaskFormStyled/BaseForm';
import Error from '../Error/Error';

const Modal = ({task, closeModal, setError, error}) => {

  const [editTitle, setEditTitle] = useState(task[0].title);
  const [editDescription, setEditDescription] = useState(task[0].description);

  
  const newValueTask = (e) => {
    e.preventDefault();

    if(editTitle=== '' || editDescription === ''){
      setError(true);
      return;
    }

    setError(false);

    task[0].title = editTitle;
    task[0].description = editDescription;

    closeModal(); 
    
  };
  

  return ( 
    <ContainerModal>
      <TitleModal>Editar Tarea</TitleModal>
      <ContentModal>
        {
          <Form justify='center' key={task.id}>
            { error ? 
              <Error 
                title='Apa! parece que hubo un error' 
                message='Uno o mas campos están vacios' 
              /> : null}
            <Label>Task Name</Label>
            <Input p={2} m={2} bradius={4} name='title' defaultValue={task[0].title} onChange={e => setEditTitle(e.target.value)} />
            <Label m={3}>Task Description</Label>
            <TextArea p={5} m={2} bradius={4} name='description' defaultValue={task[0].description} onChange={e => setEditDescription(e.target.value)} ></TextArea>
            <Button type='submit' onClick={e => newValueTask(e)}>Actualizar</Button>
          </Form>
        }

      </ContentModal>
    </ContainerModal>
  );
};
 
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  task: PropTypes.array.isRequired,
  setError: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired
};

export default Modal;