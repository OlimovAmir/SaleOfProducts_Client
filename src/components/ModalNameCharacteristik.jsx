import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { showFormAddNameCharacteristic } from '../redux/reducers/AddNameCharacteristicSlice';
import AddNameCharacteristicForm from '../form/AddNameCharacteristicForm';

function ModalNameCharacteristik({ show, handleClose, groupId, groupName }) {
  const [selectedCharacteristic, setSelectedCharacteristic] = useState(null);
  const [characteristics, setCharacteristics] = useState([]);
  const dispatch = useDispatch();
  const isFormVisible = useSelector((state) => state.addNameCharacteristic.isVisible);

  const loadCharacteristics = async () => {
    try {
      const response = await axios.get('http://localhost:5134/NameCharacteristicProduct/AllItems');
      setCharacteristics(response.data);
    } catch (error) {
      console.error('Failed to load characteristics:', error);
    }
  };

  useEffect(() => {
    loadCharacteristics();
  }, []);

  const updateCharacteristics = () => {
    loadCharacteristics(); // Перезагрузка списка характеристик после успешной отправки формы
  };

  const handleUpdateGroup = async () => {
    // Код обновления группы
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedCharacteristic(selectedOption);
  };

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
      {isFormVisible && <AddNameCharacteristicForm updateCharacteristics={updateCharacteristics} />}
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