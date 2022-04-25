import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TaskContext } from '../../contexts/TasksContextProvider';
import Button from '../../components/Button';

const IncompleteTasks = (props) => {
    const { tasks, taskFunctions } = useContext(TaskContext);
    const { completeTask } = taskFunctions;
    const completedTasks = tasks
        .map((task, index) => ({ ...task, index: index }))
        .filter((task) => !task.complete);

    return (
        <div className="tasks">
            {completedTasks?.map((task) => {
                return (
                    <div className="task" key={task.index}>
                        <div className="task-info">
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                        </div>
                        <div className="task-buttons">
                            <Button
                                type="check"
                                onClick={() => completeTask(task.index)}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

IncompleteTasks.propTypes = {};

export default IncompleteTasks;
