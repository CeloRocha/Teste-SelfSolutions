import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ServeContext } from './MocksTextContext';

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
    it('should remove a task, given the correct Id.', () => {
        ServeContext();

        const addButton = screen.getByRole('button', { name: /add task/i });
        const removeButton = screen.getByRole('button', {
            name: /remove task/i,
        });
        expect.assertions(4);
        expect(removeButton).toBeInTheDocument();
        fireEvent.click(addButton);
        fireEvent.click(addButton);
        expect(
            screen.queryAllByRole('heading', { name: /task title/i }),
        ).toHaveLength(2);
        fireEvent.click(removeButton);
        expect(
            screen.queryAllByRole('heading', { name: /task title/i }),
        ).toHaveLength(1);
        fireEvent.click(removeButton);
        expect(
            screen.queryAllByRole('heading', { name: /task title/i }),
        ).toHaveLength(0);
    });
    it('should change a task complete state, given the correct Id.', () => {
        ServeContext();

        const addButton = screen.getByRole('button', { name: /add task/i });
        const completeButton = screen.getByRole('button', {
            name: /complete task/i,
        });
        expect.assertions(5);
        expect(completeButton).toBeInTheDocument();
        fireEvent.click(addButton);
        expect(
            screen.queryAllByRole('heading', { name: /task title/i }),
        ).toHaveLength(1);
        expect(screen.queryByText(/complete state/i)).not.toBeInTheDocument();
        fireEvent.click(completeButton);
        expect(screen.queryByText(/complete state/i)).toBeInTheDocument();
        fireEvent.click(completeButton);
        expect(screen.queryByText(/complete state/i)).not.toBeInTheDocument();
    });
});
