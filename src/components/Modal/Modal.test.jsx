import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '.';
import MockCloseModal from './MockModal';

describe('<Modal /> component', () => {
    it('should render a modal in view', () => {
        render(
            <Modal show={true} title="Modal title">
                <p>My modal text</p>
            </Modal>,
        );

        expect.assertions(3);
        expect(
            screen.getByRole('heading', { name: /modal title/i }),
        ).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText(/my modal text/i)).toBeInTheDocument();
    });
    it('should not render a modal', () => {
        render(
            <Modal show={false} title="Modal title">
                <p>My modal text</p>
            </Modal>,
        );

        expect.assertions(3);
        expect(
            screen.queryByRole('heading', { name: /modal title/i }),
        ).not.toBeInTheDocument();
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
        expect(screen.queryByText(/my modal text/i)).not.toBeInTheDocument();
    });
    it('should close the modal by clicking in close button', () => {
        render(<MockCloseModal />);
        const closeButton = screen.getByRole('button');

        expect.assertions(4);
        expect(closeButton).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: /modal title/i }),
        ).toBeInTheDocument();

        fireEvent.click(closeButton);

        expect(
            screen.queryByRole('heading', { name: /modal title/i }),
        ).not.toBeInTheDocument();
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
});
