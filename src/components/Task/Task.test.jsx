import { render, screen } from '@testing-library/react';
import Task from '.';

const mock = {
    title: 'First task',
    description: 'A short description about my task',
    complete: true,
    id: 1,
};

describe('<Task />', () => {
    it('should render Task component', () => {
        const { container } = render(<Task {...mock} />);
        expect.assertions(3);
        expect(container.firstChild).toHaveClass('complete');
        expect(
            screen.getByRole('heading', { name: /first task/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByText(/a short description about my task/i),
        ).toBeInTheDocument();
    });
});
