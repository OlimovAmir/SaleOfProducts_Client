import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAddCashIncome } from '../../../redux/reducers/modalAddCashIncomeSlice.js'; // Измените на правильный файл
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

function FormAddCashIncome() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.addCashIncome.showModalAddCashIncome);

  const handleClose = () => {
    dispatch(closeModalAddCashIncome());
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
      <br/>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="date"
              placeholder="Enter date"
              name="date"
            />
          </Form.Group>
        </Form>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicAmount">
            <Form.Control
              type="number"
              placeholder="Enter amount"
              name="amount"
            />
          </Form.Group>
        </Form>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Control
              type="text"
              placeholder="Enter description"
              name="text"
            />
          </Form.Group>
        </Form>

        <Form >
          <Form.Group className="mb-3" controlId="formBasicFromWhom">
            <Form.Control
              type="text"
              placeholder="Enter fromWhom"
              name="fromWhom"
            />
          </Form.Group>
        </Form>

        <Form >
          <Form.Group className="mb-3" controlId="formBasicIncomeItems">
            <Form.Control
              type="text"
              placeholder="Enter incomeItems"
              name="incomeItems"
            />
          </Form.Group>
        </Form>


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