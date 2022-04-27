import ControlTasks from '.';
import TaskContextProvider from '../../contexts/TasksContextProvider';
import { render, screen, fireEvent } from '@testing-library/react';

const serveControlTab = () => {
    return render(
        <TaskContextProvider>
            <ControlTasks />
        </TaskContextProvider>,
    );
};

describe('<ControlTasks />', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('should render control tasks', () => {
        serveControlTab();

        expect.assertions(4);
        expect(
            screen.getByRole('heading', { name: /todas suas tarefas/i }),
        ).toBeInTheDocument();
        expect(screen.getByTestId(/no tasks/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/adicionar tarefa/i)).toBeInTheDocument();
        expect(
            screen.queryAllByRole('button', { name: /criar/i }),
        ).toHaveLength(0);
    });

    it('should add a task', () => {
        serveControlTab();

        expect.assertions(2);
        const addButton = screen.getByLabelText(/adicionar tarefa/i);
        fireEvent.click(addButton);
        const titleInput = screen.getByLabelText(/título/i);
        fireEvent.change(titleInput, { target: { value: 'My new title' } });
        const confirmButton = screen.getByRole('button', {
            name: /criar/i,
        });
        fireEvent.click(confirmButton);
        expect(
            screen.getByRole('heading', { name: /my new title/i }),
        ).toBeInTheDocument();
        expect(screen.queryByTestId(/no tasks/i)).toBeNull();
    });
});
