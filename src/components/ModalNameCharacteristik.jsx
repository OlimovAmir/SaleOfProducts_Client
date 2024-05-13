import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';

function ModalNameCharacteristik({ show, handleClose, groupId, groupName }) {
  const [charactergroupName, setGroupName] = useState('');
  const [selectedCharacteristic, setSelectedCharacteristic] = useState('');

  const handleUpdateGroup = async () => {
    try {
      const data = {
        name: groupName,
        nameCharacteristicProducts: [
          {
            name: charactergroupName,
          }
        ]
      };
      console.log('Data sent to server:', data);
      const url = `http://localhost:5134/GroupProduct/Update?id=${groupId}`;
      const response = await axios.put(url, data);
      alert('Element successfully updated!');
      handleClose();
    } catch (error) {
      console.error('Error sending data:', error);
      alert('An error occurred while sending data to the server');
      handleClose();
    }
  };

  const [characteristics, setCharacteristics] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5134/NameCharacteristicProduct/AllItems')
      .then(response => {
        setCharacteristics(response.data);
      })
      .catch(error => {
        console.error('Не удалось загрузить список Характеристики:', error);
      });
  }, []);

  const handleSelectChange = (selectedOption) => {
    setSelectedCharacteristic(selectedOption);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Name Characteristic Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formName">
          <Form.Label>Update Name Characteristic Product</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={charactergroupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPositionId">
          <Form.Label className='text-left'>Characteristics</Form.Label>
          <Select
            options={characteristics}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            onChange={(selectedOption) => handleSelectChange(selectedOption)}
            isSearchable
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdateGroup}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalNameCharacteristik;
