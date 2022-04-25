import React, { useContext, useState } from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Tasks from '../../components/Tasks';
import Input from '../../components/Input';
import { TaskContext } from '../../contexts/TasksContextProvider';

const ControlTasks = () => {
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
        if (newTaskTitle.length < 3) {
            setNewTaskTitle('Mínimo de 3 letras.');
            return;
        }
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
        <>
            <h1>Todas suas Tarefas</h1>
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
                        type="textarea"
                        value={newTaskDescription}
                        onChange={(e) => setNewTaskDescription(e.target.value)}
                    />
                    <button className="confirm-button">Criar</button>
                </form>
            </Modal>
        </>
    );
};

export default ControlTasks;
