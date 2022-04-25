import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TaskContext } from '../../contexts/TasksContextProvider';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CompletedTasks = (props) => {
    const { tasks } = useContext(TaskContext);

    const completedTasks = tasks.filter((task) => task.complete);

    return (
        <div className="tasks">
            <div style={{ width: '15rem', height: '15rem' }}>
                <CircularProgressbar
                    value={completedTasks.length}
                    maxValue={tasks.length}
                    text={`${completedTasks.length}/${tasks.length}`}
                    styles={buildStyles({
                        textColor: 'var(--text-color)',
                        pathColor: 'var(--text-color)',
                    })}
                />
            </div>
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
