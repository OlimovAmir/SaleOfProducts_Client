import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../redux/reducers/modalAddGroupSlice';

function AddGroupModal({ showAddModal, handleClose }) {
  const dispatch = useDispatch();
  const [groupName, setGroupName] = useState('');

  const handleAddGroup = async () => {
    try {
      // Отправляем POST-запрос с помощью Axios
      await axios.post('http://localhost:5134/GroupProduct/Create', {
        groupName: groupName
      });

      // Если запрос успешен, закрываем модальное окно
      handleClose();
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  return (
    <Modal show={showAddModal} onHide={() => dispatch(setShowModal(false))}>
      <Modal.Header closeButton>
        <Modal.Title>Add Group</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formGroupName">
          <Form.Label>Group Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch(setShowModal(false))}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddGroup}>
          Add Group
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddGroupModal;