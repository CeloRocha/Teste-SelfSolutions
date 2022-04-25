import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TaskContext } from '../../contexts/TasksContextProvider';

const CompletedTasks = (props) => {
    const { tasks } = useContext(TaskContext);

    const completedTasks = tasks.filter((task) => task.complete);

    return (
        <div className="tasks">
            {completedTasks?.map((task, index) => {
                return (
                    <div className="task complete" key={index}>
                        <div className="task-info">
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

CompletedTasks.propTypes = {};

export default CompletedTasks;
