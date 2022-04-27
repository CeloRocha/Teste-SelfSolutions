import { screen, configure } from '@testing-library/react';
import { serveCompletedTabWithTask } from './MockCompletedTasks';

configure({ testIdAttribute: 'data-test-id' });

describe('<CompletedTasks />', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('should render complete tasks tab with a task', () => {
        serveCompletedTabWithTask(true);

        expect.assertions(4);
        expect(
            screen.getByRole('heading', { name: /tarefas completas/i }),
        ).toBeInTheDocument();
        expect(screen.getByTestId(/circularprogressbar/i)).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: /my task/i }),
        ).toBeInTheDocument();
        expect(screen.queryByLabelText(/completar/i)).toBeNull();
    });
    it('should not render tasks when they are incomplete', () => {
        serveCompletedTabWithTask(false);

        expect.assertions(3);
        expect(
            screen.getByRole('heading', { name: /tarefas completas/i }),
        ).toBeInTheDocument();
        expect(screen.getByTestId(/circularprogressbar/i)).toBeInTheDocument();
        expect(
            screen.queryAllByRole('heading', { name: /my task/i }),
        ).toHaveLength(0);
    });
});
