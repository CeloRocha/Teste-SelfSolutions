import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Task = (props) => {
    return (
        <div className={`task ${props.complete ? 'complete' : ''}`}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className="task-buttons">
                <button>Button</button>
            </div>
        </div>
    );
};

Task.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    complete: PropTypes.bool,
    id: PropTypes.number,
};

export default Task;
