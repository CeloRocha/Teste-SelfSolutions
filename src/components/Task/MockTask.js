import React, { useContext, useEffect } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskContextProvider, {
    TaskContext,
} from '../../contexts/TasksContextProvider';
import Task from '.';

export const ServeContext = () => {
    return render(
        <TaskContextProvider>
            <CustomTask />
        </TaskContextProvider>,
    );
};

export const mockTask = {
    title: 'First task',
    description: 'A short description about my task',
    complete: true,
};

export const CustomTask = () => {
    const { tasks, taskFunctions } = useContext(TaskContext);

    useEffect(() => {
        taskFunctions.addTask(mockTask);
    }, []);

    return (
        <>
            {tasks &&
                tasks.map((task, id) => {
                    return (
                        <>
                            <Task {...task} id={id} key={id} />;
                            {task.complete && <p>Complete state</p>}
                        </>
                    );
                })}
        </>
    );
};
