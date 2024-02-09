import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

function FormUnit() {
  // Состояние для хранения данных формы
  const [formData, setFormData] = useState({
    name: ''
  });

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
            <Form.Label className='text-left'>Название юнита</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Введите название юнита" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <Form.Text className="text-muted">
              Мы никогда не будем передавать вашу электронную почту кому-либо еще.
            </Form.Text>
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Отправить
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default FormUnit;