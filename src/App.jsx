import './App.scss';
import Task from './components/Task';
import { useContext, useState } from 'react';
import { TaskContext } from './contexts/TasksContextProvider';
import Tasks from './components/Tasks';
import Modal from './components/Modal';
import Input from './components/Input';
import Button from './components/Button';
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
                    disabled={!tasks.some((task) => task.complete)}
                    onClick={() => setTab('control')}
                >
                    Controle
                </button>
                <button
                    className={`nav-button ${
                        tab === 'complete' ? 'selected' : ''
                    }`}
                    onClick={() => setTab('complete')}
                >
                    Completas
                </button>
                <button
                    className={`changeMode-button ${darkMode ? 'dark' : ''}`}
                    onClick={() => setDarkMode((p) => !p)}
                ></button>
            </nav>
            {/* <button onClick={() => setDarkMode((p) => !p)}>Toggle mode</button> */}
            {tab == 'incomplete' && <IncompleteTasks />}
            {tab === 'complete' && <CompletedTasks />}
            {tab === 'control' && <ControlTasks />}
        </div>
    );
}

export default App;
