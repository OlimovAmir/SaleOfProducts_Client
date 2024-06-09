import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAddCashIncome } from '../../../redux/reducers/modalAddCashIncomeSlice.js'; // Измените на правильный файл
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FormAddCashIncome() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.addCashIncome.showModalAddCashIncome);

  const handleClose = () => {
    dispatch(closeModalAddCashIncome());
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormAddCashIncome;