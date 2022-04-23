import { render, screen, fireEvent } from '@testing-library/react';
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
    it('should call a function, when remove button is clicked', () => {
        const fn = jest.fn();
        const { container } = render(<Task {...mock} remove={fn} />);
        const removeButton = screen.getByRole('button', { name: /remover/i });

        expect.assertions(3);
        expect(removeButton).toBeInTheDocument();
        expect(fn).toBeCalledTimes(0);
        fireEvent.click(removeButton);
        expect(fn).toBeCalledTimes(1);
    });
    it('should call a function, when mark complete button is clicked', () => {
        const fn = jest.fn();
        const { container } = render(<Task {...mock} markComplete={fn} />);
        const completeButton = screen.getByRole('button', {
            name: /completar/i,
        });

        expect.assertions(3);
        expect(completeButton).toBeInTheDocument();
        expect(fn).toBeCalledTimes(0);
        fireEvent.click(completeButton);
        expect(fn).toBeCalledTimes(1);
    });
    it('should call a function, when edit button is clicked', () => {
        const fn = jest.fn();
        const { container } = render(<Task {...mock} edit={fn} />);
        const editButton = screen.getByRole('button', { name: /editar/i });

        expect.assertions(3);
        expect(editButton).toBeInTheDocument();
        expect(fn).toBeCalledTimes(0);
        fireEvent.click(editButton);
        expect(fn).toBeCalledTimes(1);
    });
});
