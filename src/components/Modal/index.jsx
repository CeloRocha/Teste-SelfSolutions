import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Modal = (props) => {
    return (
        <>
            {props.show && (
                <div className="modal">
                    <div
                        className="modal-overlay"
                        onClick={props.closeModal}
                    ></div>
                    <div className="modal-content">
                        <button onClick={props.closeModal}>Close</button>
                        <h2 className="modal-title">{props.title}</h2>
                        {props.children}
                    </div>
                </div>
            )}
        </>
    );
};

Modal.propTypes = {
    show: PropTypes.bool,
    title: PropTypes.string,
    closeModal: PropTypes.func,
    children: PropTypes.node,
};

export default Modal;
