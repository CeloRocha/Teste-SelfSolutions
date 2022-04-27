import { screen, fireEvent, configure } from '@testing-library/react';
import {
    serveIncompleteTab,
    serveIncompleteTabWithTask,
} from './MockIncompleteTasks';

configure({ testIdAttribute: 'data-test-id' });

describe('<IncompleteTasks />', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('should render incomplete tasks tab with a task', () => {
        serveIncompleteTabWithTask(false);

        expect.assertions(5);
        expect(
            screen.getByRole('heading', { name: /tarefas para completar/i }),
        ).toBeInTheDocument();
        expect(screen.getByTestId(/circularprogressbar/i)).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: /my task/i }),
        ).toBeInTheDocument();
        expect(screen.getByLabelText(/completar/i)).toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: /parabéns/i })).toBeNull();
    });
    it('should render incomplete tasks tab without a task', () => {
        serveIncompleteTab();

        expect.assertions(5);
        expect(
            screen.getByRole('heading', { name: /tarefas para completar/i }),
        ).toBeInTheDocument();
        expect(screen.getByTestId(/circularprogressbar/i)).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: /parabéns/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                /você completou todas suas tarefas. agora tire um descanso merecido/i,
            ),
        ).toBeInTheDocument();
        expect(screen.queryByLabelText(/completar/i)).toBeNull();
    });
    it('should not render tasks when they are complete', () => {
        serveIncompleteTabWithTask(true);

        expect.assertions(5);
        expect(
            screen.getByRole('heading', { name: /tarefas para completar/i }),
        ).toBeInTheDocument();
        expect(screen.getByTestId(/circularprogressbar/i)).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: /parabéns/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                /você completou todas suas tarefas. agora tire um descanso merecido/i,
            ),
        ).toBeInTheDocument();
        expect(screen.queryByLabelText(/completar/i)).toBeNull();
    });
});
