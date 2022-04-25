import './App.scss';
import Task from './components/Task';
import { useContext, useState } from 'react';
import { TaskContext } from './contexts/TasksContextProvider';
import Tasks from './components/Tasks';
import Modal from './components/Modal';
import Input from './components/Input';
import Button from './components/Button';
import ControlTasks from './pages/ControlTasks';
import CompletedTasks from './pages/CompletedTasks';
import IncompleteTasks from './pages/IncompleteTasks';

function App() {
    const [tab, setTab] = useState('control');

    return (
        <div className={`App`}>
            <nav>
                <button
                    className={`nav-button ${
                        tab === 'incomplete' ? 'selected' : ''
                    }`}
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
                    onClick={() => setTab('complete')}
                >
                    Completas
                </button>
            </nav>
            <h1>Lista de Tarefas</h1>
            {tab == 'incomplete' && <IncompleteTasks />}
            {tab === 'complete' && <CompletedTasks />}
            {tab === 'control' && <ControlTasks />}
        </div>
    );
}

export default App;
