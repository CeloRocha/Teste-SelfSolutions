import { render } from '@testing-library/react';
import { useContext, useEffect } from 'react';
import TaskContextProvider, {
    TaskContext,
} from './contexts/TasksContextProvider';
import App from './App';

const LoadWithTask = () => {
    const { taskFunctions } = useContext(TaskContext);

    useEffect(() => {
        taskFunctions.addTask({
            title: 'My task 1',
            description: 'My description',
            complete: true,
        });
        taskFunctions.addTask({
            title: 'My task 2',
            description: 'My description',
            complete: false,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <App />;
};

export const serveAppWithContext = () => {
    return render(
        <TaskContextProvider>
            <LoadWithTask />
        </TaskContextProvider>,
    );
};
