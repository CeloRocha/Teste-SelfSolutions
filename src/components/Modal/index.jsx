import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Button from '../Button';
import { motion, AnimatePresence } from 'framer-motion';

const dropIn = {
    hidden: {
        y: '-70vh',
        opacity: 0,
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.3,
            type: 'spring',
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: '70vh',
        opacity: 0,
    },
};

const Modal = (props) => {
    return (
        <AnimatePresence
            initial={true}
            exitBeforeEnter={true}
            onExitComplete={() => null}
        >
            {props.show && (
                <motion.div
                    className="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div
                        className="modal-overlay"
                        onClick={props.closeModal}
                    ></div>
                    <motion.div
                        className="modal-content"
                        variants={dropIn}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <Button type="close" onClick={props.closeModal} />
                        <h2 className="modal-title">{props.title}</h2>
                        {props.children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

Modal.propTypes = {
    show: PropTypes.bool,
    title: PropTypes.string,
    closeModal: PropTypes.func,
    children: PropTypes.node,
};

export default Modal;
