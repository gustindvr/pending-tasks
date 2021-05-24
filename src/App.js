/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import Header from './components/Header/Header';

import { Container, Row, Col } from './components/Layout/Base';
import TaskForm from './components/TaskForm/TaskForm';

function App() {

  //States
  const [header, setHeader] = useState(true);
  const [tasks, setTasks] = useState([]);

  //Función que cambia el state del header para dar inicio a la app
  const changeStatusHeader = (prop) => {
    setHeader(prop);
  };

  const addValueTask = task => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      {(header) 
        ? 
        <Header 
          changeStatusHeader= {changeStatusHeader}
        />
        :
        <Container>
          <Row align='center' justify='space-around'>
            <Col col={6} r={5}>
              <TaskForm 
                addValueTask={addValueTask}
              />
            </Col>
            <Col col={8}> 
              <h2>TaskList</h2>    
            </Col>     
          </Row>
        </Container>
      }
      
    </>
  );
}

export default App;
