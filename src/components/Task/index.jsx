import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Task = (props) => {
    return (
        <div className={`task ${props.complete ? 'complete' : ''}`}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className="task-buttons">
                <button onClick={() => props.markComplete(props.id)}>
                    Completar
                </button>
                <button onClick={() => props.edit(props.id)}>Editar</button>
                <button onClick={() => props.remove(props.id)}>Remover</button>
            </div>
        </div>
    );
};

Task.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    complete: PropTypes.bool,
    id: PropTypes.number,
    remove: PropTypes.func,
    edit: PropTypes.func,
    markComplete: PropTypes.func,
};

export default Task;
