import './App.css';
import Task from './components/Task';
import { useContext, useEffect } from 'react';
import { TaskContext } from './contexts/TasksContextProvider';
import Tasks from './components/Tasks';

const initialTask = {
    title: 'Initial task',
    description: 'Initial description',
    complete: false,
};

function App() {
    const { tasks, taskFunctions } = useContext(TaskContext);

    // useEffect(() => {
    //     taskFunctions.addTask(initialTask);
    // }, []);
    console.log(tasks);
    return (
        <div className="App">
            <h1>Teste SelfSolutions</h1>
            <Tasks />
            <button onClick={() => taskFunctions.addTask(initialTask)}>
                Add a task
            </button>
        </div>
    );
}

export default App;
