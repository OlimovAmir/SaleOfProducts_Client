import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalNameCharacteristik({ show, handleClose, groupId, groupName }) {
  const [charactergroupName, setGroupName] = useState('');

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

  // раздел поиск и ввод данных из базы 
  // Состояние для хранения списка 
  const [characteristics, setCharacteristics] = useState([]);

  // Загрузка списка должностей при монтировании компонента
  useEffect(() => {
    // Запрос к API для получения списка 
    axios.get('http://localhost:5134/NameCharacteristicProduct/AllItems')
      .then(response => {
        // Установка списка в состояние
        setCharacteristics(response.data);
      })
      .catch(error => {
        console.error('Не удалось загрузить список Характеристики:', error);
      });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    positionId: '', // Идентификатор должности
  });

  // Обработчик события для обновления данных формы при изменении ввода
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

          <Form.Control
            as="select"
            name="positionId"
            value={formData.positionId}
            onChange={handleInputChange}
          >
            <option value="">Select Characteristics</option>
            {characteristics && characteristics.map(characteristic => (
              <option key={characteristic.id} value={characteristic.id}>
                {characteristic.name}
              </option>
            ))}
          </Form.Control>
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