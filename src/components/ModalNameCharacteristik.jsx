import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {showFormAddNameCharacteristic} from '../redux/reducers/AddNameCharacteristicSlice';
import AddNameCharacteristicForm from '../form/AddNameCharacteristicForm';

function ModalNameCharacteristik({ show, handleClose, groupId, groupName }) {
  const [selectedCharacteristic, setSelectedCharacteristic] = useState(null);

  const handleUpdateGroup = async () => {
    if (!selectedCharacteristic) {
      alert('Please select a characteristic.');
      return;
    }
    try {
      const data = {
        name: groupName,
        nameCharacteristicProducts: [
          {
            name: selectedCharacteristic.name,
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

  const dispatch = useDispatch();
  const isFormVisible = useSelector((state) => state.addNameCharacteristic.isVisible);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Name Characteristic Product</Modal.Title>
      </Modal.Header>
      <Button
        className='m-2'
        size="sm"
        variant="secondary" 
        onClick={() => dispatch(showFormAddNameCharacteristic())}     
      >
        <FontAwesomeIcon icon={faList} /> Add New Name Characteristik
      </Button>
      {isFormVisible && <AddNameCharacteristicForm />}
      <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicPositionId">
          <Form.Label className='text-left'>Characteristics</Form.Label>
          <Select
            options={characteristics}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            onChange={handleSelectChange}
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