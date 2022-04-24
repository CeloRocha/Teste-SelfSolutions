import React from 'react';
import PropTypes from 'prop-types';

// Images
import checkImg from '../../../assets/Check.svg';
import editImg from '../../../assets/Edit-alt.svg';
import trashImg from '../../../assets/Trash.svg';

const Button = (props) => {
    let imgSrc, buttonLabel;
    switch (props.type) {
        case 'check':
            buttonLabel = 'Confirmar';
            imgSrc = checkImg;
            break;
        case 'edit':
            buttonLabel = 'Editar';
            imgSrc = editImg;
            break;
        case 'remove':
            buttonLabel = 'Remover';
            imgSrc = trashImg;
            break;
    }
    return (
        <button
            className={`task-button ${props.type}`}
            onClick={props.onClick}
            aria-label={buttonLabel}
        >
            <img src={imgSrc} />
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
