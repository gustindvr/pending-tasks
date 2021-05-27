/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import EmptyTask from './components/EmptyTasks/EmptyTask';
import Header from './components/Header/Header';

import { Container, Row, Col } from './components/Layout/Base';
import Modal from './components/Modal/Modal';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

function App() {

  //States
  const [header, setHeader] = useState(true);
  const [blackboard, setBlackboard] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState([]);
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState(false);

  //Función que cambia el state del header para dar inicio a la app
  const changeStatusHeader = (prop) => {
    setHeader(prop);
  };

  //Función que abre el modal para actualiza tarea
  const editTask = id => {
    const forEdit = tasks.filter( task => task.id === id);
    setTask(forEdit);
    setEdit(true);
  };

  //Función que cierra el modal y envía la información actualizada
  const closeModal = () => {
    setEdit(false);
  };
 
  //Función que guarda los valores del formulario
  const addValueTask = task => {
    setTasks([...tasks, task]);
  };

  //Función que borra una Tarea
  const deleteTask = id => {
    const newListTasks = tasks.filter(task => task.id !== id);
    setTasks(newListTasks);
  };

  return (
    <>
      
      {edit ? 
        <Modal 
          closeModal={closeModal} 
          addValueTask={addValueTask}
          task={task}
          setError={setError}
          error={error}
        /> : null}
      {(header) 
        ? 
        <Header 
          changeStatusHeader= {changeStatusHeader}
        />
        :
        <Container>
          <Row align='center' justify='space-around'>
            <Col col={6} r={3}>
              
              <TaskForm 
                addValueTask={addValueTask}
                setBlackboard={setBlackboard}
                setError={setError}
                error={error}
                tasks={tasks}
              />
            </Col>
            <Col col={9}> 
              {(blackboard === true)
                ? 
                <TaskList 
                  tasks={tasks}
                  deleteTask={deleteTask}
                  editTask={editTask}
                  setBlackboard={setBlackboard}
                />   
                : <EmptyTask />
              } 
            </Col>  
          </Row>
        </Container>
      }
      
    </>
  );
}

export default App;
