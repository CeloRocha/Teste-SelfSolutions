import { useState, useContext } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { TaskContext } from '../../contexts/TasksContextProvider';
import Button from '../Button';
import Input from '../Input';

const Task = (props) => {
    const { taskFunctions } = useContext(TaskContext);
    const { completeTask, removeTask, editTask, showEditTask } = taskFunctions;

    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);

    const handleEdit = () => {
        setTitle(props.title);
        setDescription(props.description);
        showEditTask(props.id, props.editState ? false : true);
    };

    const closeEdit = () => {
        showEditTask(props.id, false);
    };

    const handleEditForm = (e) => {
        e.preventDefault();
        editTask(props.id, title, description);
    };

    return (
        <div
            className={`task ${
                props.complete && !props.editState ? 'complete' : ''
            }`}
            {...props.drag}
            {...props.dragHandle}
            ref={props.passRef}
        >
            {!props.editState && (
                <>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <div className="task-buttons">
                        <Button
                            type="check"
                            onClick={() => completeTask(props.id)}
                        />
                        <Button type="edit" onClick={handleEdit} />
                        <Button
                            type="remove"
                            onClick={() => removeTask(props.id)}
                        />
                    </div>
                </>
            )}
            {props.editState && (
                <>
                    <form onSubmit={handleEditForm}>
                        <Input
                            label="Novo Título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Input
                            label="Nova Descrição"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button type="submit">Confirmar</button>
                    </form>
                    <div className="task-buttons">
                        <Button
                            type="check"
                            onClick={() => completeTask(props.id)}
                        />
                        <Button type="edit" onClick={handleEdit} />
                        <Button
                            type="remove"
                            onClick={() => removeTask(props.id)}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

Task.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    complete: PropTypes.bool,
    editState: PropTypes.bool,
    id: PropTypes.number,
    drag: PropTypes.any,
    dragHandle: PropTypes.any,
    passRef: PropTypes.any,
};

export default Task;
