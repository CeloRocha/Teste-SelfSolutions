import { useContext } from 'react';
import { TaskContext } from '../../contexts/TasksContextProvider';
import Task from '../Task';

const Tasks = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="tasks">
            {tasks?.length > 0 &&
                tasks.map((task, index) => {
                    return <Task {...task} id={index} key={index} />;
                })}
            {tasks?.length <= 0 && (
                <h2 data-testid="No tasks" title="No tasks">
                    Ainda não há nenhuma tarefa.
                </h2>
            )}
        </div>
    );
};

export default Tasks;
