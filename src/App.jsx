import './App.scss';
import Task from './components/Task';
import { useContext, useState } from 'react';
import { TaskContext } from './contexts/TasksContextProvider';
import Tasks from './components/Tasks';
import Modal from './components/Modal';
import Input from './components/Input';
import Button from './components/Button';

const initialTask = {
    title: 'Initial task',
    description: 'Initial description',
    complete: false,
};

function App() {
    const { taskFunctions } = useContext(TaskContext);
    const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');

    if (showCreateTaskModal) {
        document.body.classList.add('modalOpen');
    } else {
        document.body.classList.remove('modalOpen');
    }

    const openCreateTaskModal = () => {
        setNewTaskTitle('');
        setNewTaskDescription('');
        taskFunctions.resetEditTask();
        setShowCreateTaskModal(true);
    };
    const closeCreateTaskModal = () => setShowCreateTaskModal(false);

    const handleCreateTask = (e) => {
        e.preventDefault();
        taskFunctions.addTask({
            title: newTaskTitle,
            description: newTaskDescription,
            complete: false,
        });
        closeCreateTaskModal();
        setNewTaskTitle('');
        setNewTaskDescription('');
    };

    return (
        <div className={`App`}>
            <h1>Teste SelfSolutions</h1>
            <Tasks />
            <Button
                type="add"
                className="add-button-fixed"
                onClick={openCreateTaskModal}
            />
            <Modal
                show={showCreateTaskModal}
                title="Adicionar nova tarefa"
                closeModal={closeCreateTaskModal}
            >
                <form onSubmit={handleCreateTask}>
                    <Input
                        label="Título"
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                    />
                    <Input
                        label="Descrição"
                        value={newTaskDescription}
                        onChange={(e) => setNewTaskDescription(e.target.value)}
                    />
                    <button>Criar</button>
                </form>
            </Modal>
        </div>
    );
}

export default App;
