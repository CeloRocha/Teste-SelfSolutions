import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TaskContext } from '../../contexts/TasksContextProvider';
import Button from '../../components/Button';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const IncompleteTasks = (props) => {
    const { tasks, taskFunctions } = useContext(TaskContext);
    const { completeTask } = taskFunctions;
    const completedTasks = tasks
        .map((task, index) => ({ ...task, index: index }))
        .filter((task) => !task.complete);

    return (
        <div className="tasks">
            <div style={{ width: '15rem', height: '15rem' }}>
                <CircularProgressbar
                    value={tasks.length - completedTasks.length}
                    maxValue={tasks.length}
                    text={`${tasks.length - completedTasks.length}/${
                        tasks.length
                    }`}
                    styles={buildStyles({
                        textColor: 'var(--purple)',
                        pathColor: 'var(--purple)',
                    })}
                />
            </div>
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
