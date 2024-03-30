import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import React, { useState } from 'react';

function ModalNameCharacteristik({ show, handleClose }) { // Измените showAddModal на show
  const [groupName, setGroupName] = useState('');

  const handleAddGroup = async () => {
    try {
      // Отправляем POST-запрос с помощью Axios
      const response = await axios.post('http://localhost:5134/GroupProduct/Create', {
        name: groupName,
        
      });
      // Если запрос успешен, закрываем модальное окно и обновляем состояние groups
      
      // Выводим сообщение об успешном создании элемента
      alert('Element successfully created!');
      handleClose();
    } catch (error) {
      // Выводим сообщение об ошибке
      console.error('Ошибка при отправке данных:', error);
      alert('Произошла ошибка при отправке данных на сервер');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}> 
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
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddGroup}>
          Add 
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalNameCharacteristik;
