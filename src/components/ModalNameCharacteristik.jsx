  import { Modal, Button, Form } from 'react-bootstrap';
  import axios from 'axios';
  import React, { useState } from 'react';

  function ModalNameCharacteristik({ show, handleClose, groupId }) {
    const [groupName, setGroupName] = useState('');

    const handleAddGroup = async () => {
      try {
        const data = {
          name: groupName,
          groupProductCharacteristics: [
            {
              groupProductId: groupId,
              nameCharacteristicProduct: groupName
            }
          ]
        };
        console.log('Data sent to server:', data); // Добавим логирование здесь
        const response = await axios.post('http://localhost:5134/NameCharacteristicProduct/Create', data);
        alert('Element successfully created!');
        handleClose();
      } catch (error) {
        console.error('Ошибка при отправке данных:', error);
        alert('Произошла ошибка при отправке данных на сервер');
      }
  };


    return (
      <Modal show={show} onHide={handleClose}> 
        <Modal.Header closeButton>
          <Modal.Title>Add Name Characteristic Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formName">
            <Form.Label>Add Name Characteristic Product</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
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
