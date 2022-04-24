import { useState } from 'react';
import Modal from '.';

const MockCloseModal = () => {
    const [showModal, setShowModal] = useState(true);

    const closeModal = () => setShowModal(false);

    return (
        <Modal
            show={showModal}
            title="Modal Title"
            closeModal={closeModal}
        ></Modal>
    );
};

export default MockCloseModal;
