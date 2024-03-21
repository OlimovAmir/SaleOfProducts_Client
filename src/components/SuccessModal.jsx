import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { setSuccessMessage } from '../redux/reducers/successSlice.js';

function SuccessModal() {
    const successMessage = useSelector(state => state.success.successMessage);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setSuccessMessage(null)); // Сбрасываем сообщение об успешном выполнении операции
        handleClose();
    };
    return (
        <Modal show={!!successMessage}>
            <Modal.Header closeButton>
                <Modal.Title>Успех!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{successMessage}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SuccessModal