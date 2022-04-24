import { render, screen } from '@testing-library/react';
import Input from '.';
import userEvent from '@testing-library/user-event';

describe('<Input /> component', () => {
    it('should render the input component', () => {
        render(<Input label="Input" />);

        expect(screen.getByLabelText(/input/i)).toBeInTheDocument();
    });
});
