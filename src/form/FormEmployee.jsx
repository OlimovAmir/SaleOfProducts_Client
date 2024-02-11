import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function FormEmployee() {
  // Состояние для хранения данных формы
  const [formData, setFormData] = useState({
    name: '',
    surName: '',
    positionId: '', // Идентификатор должности
    hireDate: '', // Дата принятия на работу
    terminationDate: '', // Дата увольнения
    isHired: false // Флаг указывающий, принят ли на работу
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
    axios.post('http://localhost:5134/api/Employee/Create', formData)
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
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className='text-left'>Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter name" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSurName">
            <Form.Label className='text-left'>Surname</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter surname" 
              name="surName"
              value={formData.surName}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPositionId">
            <Form.Label className='text-left'>Position ID</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter position ID" 
              name="positionId"
              value={formData.positionId}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicHireDate">
            <Form.Label className='text-left'>Hire Date</Form.Label>
            <Form.Control 
              type="date" 
              name="hireDate"
              value={formData.hireDate}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTerminationDate">
            <Form.Label className='text-left'>Termination Date</Form.Label>
            <Form.Control 
              type="date" 
              name="terminationDate"
              value={formData.terminationDate}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicIsHired">
            <Form.Check 
              type="checkbox" 
              label="Is Hired?" 
              name="isHired"
              checked={formData.isHired}
              onChange={(e) => setFormData({ ...formData, isHired: e.target.checked })}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>

          {isDataSent && (
            <Alert variant="success" className="mt-3">
              Data successfully submitted
            </Alert>
          )}
        </Form>
      </Container>
    </>
  );
}

export default FormEmployee;