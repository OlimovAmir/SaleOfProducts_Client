import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function FormEmployee() {
  // Состояние для хранения данных формы
  const [formData, setFormData] = useState({
    name: ''
  });
  
  // Состояние для отслеживания успешной отправки данных
  const [isDataSent, setIsDataSent] = useState(false);

  // Обработчик события для обновления данных формы при изменении ввода
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Обработчик события для отправки данных формы на бэкенд
  const handleSubmit = (e) => {
    e.preventDefault();

    // Отправляем данные формы на бэкенд API с помощью Axios
    axios.post('http://localhost:5134/api/Unit/Create', formData)
      .then(response => {
        // Обработка успешного ответа
        console.log('Данные успешно отправлены:', response.data);
        setIsDataSent(true); // Устанавливаем флаг успешной отправки данных
        // По желанию, можно сбросить форму здесь
      })
      .catch(error => {
        // Обработка ошибки
        console.error('Не удалось отправить данные:', error);
      });
  };

  return (
    <>
      <Container style={{ width: '100vh' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='text-left'>Name unit</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter name unit" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Добавить
          </Button>

          {isDataSent && (
            <Alert variant="success" className="mt-3">
              Запись успешно произведен
            </Alert>
          )}
        </Form>
      </Container>
    </>
  );
}

export default FormEmployee;