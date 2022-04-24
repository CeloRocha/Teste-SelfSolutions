import React, { useContext, useEffect } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskContextProvider, {
    TaskContext,
} from '../../contexts/TasksContextProvider';
import Tasks from '.';

export const ServeTasks = (number) => {
    return render(
        <TaskContextProvider>
            <CustomTasks number={number} />
        </TaskContextProvider>,
    );
};

export const mockTask = {
    title: 'Task title',
    description: 'This is a task',
    complete: false,
};

const CustomTasks = (props) => {
    const { tasks, taskFunctions } = useContext(TaskContext);

    useEffect(() => {
        let i;
        // eslint-disable-next-line react/prop-types
        for (i = 0; i < props.number; i++) {
            taskFunctions.addTask(mockTask);
        }
    }, []);

    return <Tasks />;
};
