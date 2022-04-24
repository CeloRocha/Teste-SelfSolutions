import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Input = (props) => {
    return (
        <div className={`input ${props.value != '' ? 'focus' : ''}`}>
            <input
                id={props.label}
                type="text"
                placeholder=""
                value={props.value}
                onChange={props.onChange}
            />
            <label htmlFor={props.label}>{props.label}</label>
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;
