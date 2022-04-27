import { render, screen, fireEvent } from '@testing-library/react';
import Input from '.';

describe('<Input /> component', () => {
    it('should render the input component', () => {
        render(<Input label="Input" />);

        expect(screen.getByLabelText(/input/i)).toBeInTheDocument();
    });
    it('should call a function when the input change', () => {
        const fn = jest.fn();
        render(<Input label="Input" onChange={fn} />);
        const titleInput = screen.getByLabelText(/input/i);
        expect(fn).not.toHaveBeenCalled();
        fireEvent.change(titleInput, { target: { value: 'Edited title' } });
        expect(fn).toHaveBeenCalled();
    });
});
