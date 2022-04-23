import { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

export const TaskContext = createContext({});

const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([]);

    const taskFunctions = {
        addTask: (task) => {
            return;
        },
        editTask: (taskId, newTitle, newDescription) => {
            return;
        },
        removeTask: (taskId) => {
            return;
        },
        completeTask: (taskId) => {
            return;
        },
    };
    return (
        <TaskContext.Provider value={{ tasks, taskFunctions }}>
            {props.children}
        </TaskContext.Provider>
    );
};

TaskContextProvider.propTypes = {
    children: PropTypes.node,
};

export default TaskContextProvider;
