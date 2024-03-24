import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';


function AddGroupModal({ showAddModal, handleClose, addNewGroup }) {

  const [groupName, setGroupName] = useState('');
  const [groups, setGroups] = useState([]);

  const handleAddGroup = async () => {
    try {
      // Отправляем POST-запрос с помощью Axios
      const response = await axios.post('http://localhost:5134/GroupProduct/Create', {
        name: groupName
      });
      // Если запрос успешен, закрываем модальное окно и обновляем состояние groups
      handleClose();
      addNewGroup(response.data); // Вызываем функцию для обновления состояния groups
      // Выводим сообщение об успешном создании элемента
      alert('Element successfully created!');
    } catch (error) {
      // Выводим сообщение об ошибке
      console.error('Ошибка при отправке данных:', error);
      alert('Произошла ошибка при отправке данных на сервер');
    }
  };

  // Функция для загрузки данных о GroupProduct из базы
  const fetchGroups = async () => {
    console.log('Fetching groups...'); // Добавляем console.log для отслеживания запроса
    try {
      const response = await axios.get('http://localhost:5134/GroupProduct/AllItems');
      console.log('Response:', response.data); // Добавляем console.log для отслеживания ответа
      // Устанавливаем полученные данные о GroupProduct в состояние
      setGroups(response.data);
    } catch (error) {
      console.error('Не удалось загрузить список GroupProduct:', error);
    }
  };

  return (
    <Modal show={showAddModal} onHide={handleClose}>
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
          Add Group
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddGroupModal;