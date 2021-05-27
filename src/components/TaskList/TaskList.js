/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { ContainerTasks, Ul, Li, Span } from '../Layout/TaskList/indexTasks';
import { ButtonDelete} from '../Layout/Elements/ButtonDelete';
import { ButtonEdit } from '../Layout/Elements/ButtonEdit';
import PropTypes from 'prop-types';

const TaskList = ({tasks, deleteTask, editTask, setBlackboard}) => {

  tasks.length === 0 ? setBlackboard(false) : null;

  return ( 
    <ContainerTasks>
      <Ul p={5}>
        {tasks.map(task => (
          <Li m={3} key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <Span>
              <ButtonDelete onClick={() => deleteTask(task.id)}>Borrar</ButtonDelete>
              <ButtonEdit onClick={() => editTask(task.id)} >Editar</ButtonEdit>
            </Span>
          </Li >
        )
        )}
      </Ul>
    </ContainerTasks>
  );
};
 
TaskList.propTypes = {
  tasks:  PropTypes.array.isRequired,
};


export default TaskList;