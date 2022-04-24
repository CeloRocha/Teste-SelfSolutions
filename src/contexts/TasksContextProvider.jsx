import { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

export const TaskContext = createContext({});

const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([]);

    const taskFunctions = {
        addTask: (task) => {
            setTasks((prevTasks) => [task, ...prevTasks]);
        },
        showEditTask: (taskId, show) => {
            setTasks((prevTasks) => {
                return prevTasks.map((task, index) =>
                    index === taskId
                        ? { ...task, editState: show }
                        : { ...task, editState: false },
                );
            });
        },
        editTask: (taskId, newTitle, newDescription, newComplete) => {
            setTasks((prevTasks) => {
                const updateTask = {
                    title: newTitle,
                    description: newDescription,
                    complete: newComplete,
                    editState: false,
                };
                return prevTasks.map((task, index) =>
                    index === taskId ? updateTask : task,
                );
            });
        },
        removeTask: (taskId) => {
            setTasks((prevTasks) =>
                prevTasks.filter((task, index) => index !== taskId),
            );
        },
        completeTask: (taskId) => {
            setTasks((prevTasks) => {
                return prevTasks.map((task, index) =>
                    index === taskId
                        ? { ...task, complete: !task.complete }
                        : task,
                );
            });
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
