import { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

export const TaskContext = createContext({});

const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([]);

    const taskFunctions = () => {
        const addTask = (task) => {
            return;
        };
        const editTask = (taskId, newTitle, newDescription) => {
            return;
        };
        const removeTask = (taskId) => {
            return;
        };
        const completeTask = (taskId) => {
            return;
        };
        return { addTask, editTask, removeTask, completeTask };
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
