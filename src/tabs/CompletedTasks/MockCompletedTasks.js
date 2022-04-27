import { render } from '@testing-library/react';
import { useContext, useEffect } from 'react';
import CompletedTasks from '.';
import TaskContextProvider, {
    TaskContext,
} from '../../contexts/TasksContextProvider';

const LoadWithTask = (props) => {
    const { taskFunctions } = useContext(TaskContext);

    useEffect(() => {
        taskFunctions.addTask({
            title: 'My task',
            description: 'My description',
            // eslint-disable-next-line react/prop-types
            complete: props.complete,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <CompletedTasks />;
};

export const serveCompletedTabWithTask = (complete) => {
    return render(
        <TaskContextProvider>
            <LoadWithTask complete={complete} />
        </TaskContextProvider>,
    );
};
