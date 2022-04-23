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
            <button
                onClick={() =>
                    taskFunctions.editTask(
                        0,
                        'New Task Title',
                        'New Task Description',
                        false,
                    )
                }
            >
                Edit Task
            </button>
            <button onClick={() => taskFunctions.completeTask(0)}>
                Complete Task
            </button>
            <button onClick={() => taskFunctions.removeTask(0)}>
                Remove Task
            </button>
        </>
    );
};

describe('Context: Task Provider', () => {
    it('should add a task to tasks state.', () => {
        ServeContext();

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
    it('should edit a task, given the correct Id, title and description', () => {
        const { debug } = ServeContext();

        const addButton = screen.getByRole('button', { name: /add task/i });
        const editButton = screen.getByRole('button', { name: /edit task/i });
        expect.assertions(6);
        expect(editButton).toBeInTheDocument();
        fireEvent.click(addButton);
        expect(
            screen.getByRole('heading', { name: /task title/i }),
        ).toBeInTheDocument();
        expect(
            screen.queryAllByRole('heading', { name: /task title/i }),
        ).toHaveLength(1);
        fireEvent.click(editButton);
        expect(
            screen.queryAllByRole('heading', { name: /task title/i }),
        ).toHaveLength(1);
        expect(
            screen.getByRole('heading', { name: /new task title/i }),
        ).toBeInTheDocument();

        expect(screen.getByText(/new task description/i)).toBeInTheDocument();
    });
});
