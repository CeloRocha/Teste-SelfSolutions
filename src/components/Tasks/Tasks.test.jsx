import { render, screen, fireEvent } from '@testing-library/react';
import Tasks from '.';
import { ServeTasks } from './MockTasks';

describe('<Tasks /> Component', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('should render tasks component without a task', () => {
        ServeTasks(0);

        expect.assertions(2);
        expect(screen.queryAllByText(/This is Task/i)).toHaveLength(0);
        expect(screen.getByTestId(/no tasks/i)).toBeInTheDocument();
    });
    it('should render tasks component with 2 task components', () => {
        ServeTasks(2);

        expect.assertions(2);
        expect(screen.queryAllByText(/this is a task/i)).toHaveLength(2);
        expect(screen.queryByTestId(/no tasks/i)).not.toBeInTheDocument();
    });
});
