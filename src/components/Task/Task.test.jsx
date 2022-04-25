import { render, screen, fireEvent } from '@testing-library/react';
import Task from '.';
import { ServeContext } from './MockTask';

describe('<Task />', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('should render Task component', () => {
        ServeContext();

        expect.assertions(6);
        expect(screen.getByText(/complete state/i)).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: /first task/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByText(/a short description about my task/i),
        ).toBeInTheDocument();
        expect(screen.getByLabelText(/confirmar/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/editar/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/remover/i)).toBeInTheDocument();
    });
    it('should remove the task, when remove button is clicked', () => {
        ServeContext();
        const removeButton = screen.getByRole('button', { name: /remover/i });

        expect.assertions(3);
        expect(screen.queryAllByRole('heading')).toHaveLength(1);
        expect(removeButton).toBeInTheDocument();
        fireEvent.click(removeButton);
        expect(screen.queryAllByRole('heading')).toHaveLength(0);
    });
    it('should mark task as complete, when mark complete button is clicked', () => {
        ServeContext();
        const completeButton = screen.getByLabelText(/confirmar/i);

        expect.assertions(7);
        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(screen.queryAllByText(/complete state/i)).toHaveLength(1);
        expect(completeButton).toBeInTheDocument();
        fireEvent.click(completeButton);
        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(screen.queryAllByText(/complete state/i)).toHaveLength(0);
        fireEvent.click(completeButton);
        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(screen.queryAllByText(/complete state/i)).toHaveLength(1);
    });
    it('should appear edit mode when edit button is clicked', () => {
        ServeContext();
        const editButton = screen.getByLabelText(/editar/i);

        expect.assertions(4);
        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(screen.queryByLabelText(/título/i)).not.toBeInTheDocument();
        fireEvent.click(editButton);
        expect(screen.queryByRole('heading')).not.toBeInTheDocument();
        expect(screen.getByLabelText(/título/i)).toBeInTheDocument();
    });
});
