import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';

describe('<Button /> task component', () => {
    it('should render a check button', () => {
        render(<Button type="check" />);

        expect(screen.getByLabelText(/confirmar/i)).toBeInTheDocument();
    });
    it('should render a edit button', () => {
        render(<Button type="edit" />);

        expect(screen.getByLabelText(/editar/i)).toBeInTheDocument();
    });
    it('should render a remove button', () => {
        render(<Button type="remove" />);

        expect(screen.getByLabelText(/remover/i)).toBeInTheDocument();
    });
    it('should call a function when clicked', () => {
        const fn = jest.fn();
        render(<Button type="check" onClick={fn} />);

        const button = screen.getByRole('button');

        expect.assertions(2);
        expect(fn).not.toHaveBeenCalled();
        fireEvent.click(button);
        expect(fn).toHaveBeenCalled();
    });
});
