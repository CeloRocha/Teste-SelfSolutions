import { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

export const TaskContext = createContext({});

const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([]);

    const taskFunctions = {
        addTask: (task) => {
            setTasks((prevTasks) => [task, ...prevTasks]);
        },
        editTask: (taskId, newTitle, newDescription, newComplete) => {
            setTasks((prevTasks) => {
                const updateTask = {
                    title: newTitle,
                    description: newDescription,
                    complete: newComplete,
                };
                return prevTasks.map((task, index) =>
                    index === taskId ? updateTask : task,
                );
            });
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
