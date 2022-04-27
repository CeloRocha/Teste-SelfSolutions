import { screen, fireEvent } from '@testing-library/react';
import { serveAppWithContext } from './MockApp';

describe('<App />', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('Should render nav buttons and default page', () => {
        serveAppWithContext();

        expect.assertions(5);
        expect(
            screen.getByRole('button', { name: /em progresso/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /controle/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /completas/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: /todas suas tarefas/i }),
        ).toBeInTheDocument();
        expect(screen.queryAllByRole('heading')).toHaveLength(3);
    });
    it('should enter incomplete tab', () => {
        serveAppWithContext();

        const incompleteButton = screen.getByRole('button', {
            name: /em progresso/i,
        });

        fireEvent.click(incompleteButton);

        expect(
            screen.getByRole('button', { name: /em progresso/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /controle/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /completas/i }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole('heading', { name: /tarefas para completar/i }),
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('heading', { name: /todas suas tarefas/i }),
        ).toBeNull();
    });
    it('should enter complete tab', () => {
        serveAppWithContext();

        const completeButton = screen.getByRole('button', {
            name: /completas/i,
        });

        fireEvent.click(completeButton);

        expect(
            screen.getByRole('button', { name: /em progresso/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /controle/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /completas/i }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole('heading', { name: /tarefas completas/i }),
        ).toBeInTheDocument();
        expect(
            screen.queryByRole('heading', { name: /todas suas tarefas/i }),
        ).toBeNull();
    });
});
