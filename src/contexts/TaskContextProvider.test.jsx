import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskContextProvider, { TaskContext } from './TasksContextProvider';
import Task from '../components/Task';

const ServeContext = () => {
    return render(
        <TaskContextProvider>
            <CustomRender />
        </TaskContextProvider>,
    );
};

const mockTask = {
    title: 'Task title',
    description: 'Task description',
    complete: false,
};

const CustomRender = () => {
    const { tasks, taskFunctions } = useContext(TaskContext);
    return (
        <>
            {tasks &&
                tasks.map((task, id) => {
                    return <Task {...task} id={id} key={id} />;
                })}
            <button onClick={() => taskFunctions.addTask(mockTask)}>
                Add Task
            </button>
        </>
    );
};

describe('Context: Task Provider', () => {
    it('should add a task to tasks state.', () => {
        const { debug, container } = ServeContext();

        const addButton = screen.getByRole('button', { name: /add task/i });
        expect.assertions(4);
        expect(addButton).toBeInTheDocument();
        expect(
            screen.queryAllByRole('heading', { name: /task title/i }),
        ).toHaveLength(0);
        fireEvent.click(addButton);
        expect(
            screen.queryAllByRole('heading', { name: /task title/i }),
        ).toHaveLength(1);
        fireEvent.click(addButton);
        expect(
            screen.queryAllByRole('heading', { name: /task title/i }),
        ).toHaveLength(2);
    });
});
