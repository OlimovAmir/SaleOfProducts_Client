import React from 'react'
import { Modal, Button } from 'react-bootstrap';

function SuccessModal({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Успешно!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Операция успешно завершена.</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SuccessModal