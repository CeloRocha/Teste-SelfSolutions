import './App.scss';
import { useContext, useState } from 'react';
import { TaskContext } from './contexts/TasksContextProvider';
import ControlTasks from './tabs/ControlTasks';
import CompletedTasks from './tabs/CompletedTasks';
import IncompleteTasks from './tabs/IncompleteTasks';

function App() {
    const { tasks } = useContext(TaskContext);
    const [tab, setTab] = useState('control');
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`App ${darkMode ? 'dark' : ''}`}>
            <nav>
                <button
                    className={`nav-button ${
                        tab === 'incomplete' ? 'selected' : ''
                    }`}
                    disabled={!tasks.some((task) => !task.complete)}
                    onClick={() => setTab('incomplete')}
                >
                    Incompletas
                </button>
                <button
                    className={`nav-button ${
                        tab === 'control' ? 'selected' : ''
                    }`}
                    onClick={() => setTab('control')}
                >
                    Controle
                </button>
                <button
                    className={`nav-button ${
                        tab === 'complete' ? 'selected' : ''
                    }`}
                    disabled={!tasks.some((task) => task.complete)}
                    onClick={() => setTab('complete')}
                >
                    Completas
                </button>
                <button
                    className={`changeMode-button ${darkMode ? 'dark' : ''}`}
                    onClick={() => setDarkMode((darkMode) => !darkMode)}
                ></button>
            </nav>
            {tab === 'incomplete' && <IncompleteTasks />}
            {tab === 'complete' && <CompletedTasks />}
            {tab === 'control' && <ControlTasks />}
            <footer>By Marcelo Rocha</footer>
        </div>
    );
}

export default App;
