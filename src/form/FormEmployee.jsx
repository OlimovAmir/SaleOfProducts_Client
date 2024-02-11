import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function FormEmployee() {
  // Состояние для хранения данных формы
  const [formData, setFormData] = useState({
    name: '',
    surName: '',
    positionId: '', // Идентификатор должности
    hireDate: '', // Дата принятия на работу
    isHired: true, // Флаг указывающий, принят ли на работу
    birthday: '' // Дата рождения
  });

  // Состояние для хранения списка должностей
  const [positions, setPositions] = useState([]);

  // Состояние для отслеживания успешной отправки данных
  const [isDataSent, setIsDataSent] = useState(false);

  // Загрузка списка должностей при монтировании компонента
  useEffect(() => {
    // Запрос к API для получения списка должностей
    axios.get('http://localhost:5134/Position/AllItems')
      .then(response => {
        // Установка списка должностей в состояние
        setPositions(response.data);
      })
      .catch(error => {
        console.error('Не удалось загрузить список должностей:', error);
      });
  }, []);

  // Обработчик события для обновления данных формы при изменении ввода
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Обработчик события для отправки данных формы на бэкенд
  const handleSubmit = (e) => {
    e.preventDefault();

    // Отправляем данные формы на бэкенд API с помощью Axios
    axios.post('http://localhost:5134/Employee/Create', formData)
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
            <Form.Label className='text-left'>Position</Form.Label>
            <Form.Control
              as="select"
              name="positionId"
              value={formData.positionId}
              onChange={handleInputChange}
            >
              <option value="">Select position</option>
              {positions.map(position => (
                <option key={position.id} value={position.id}>{position.title}</option>
              ))}
            </Form.Control>
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

          <Form.Group className="mb-3" controlId="formBasicBirthday">
            <Form.Label className='text-left'>Birthday</Form.Label>
            <Form.Control
              type="date"
              name="birthday"
              value={formData.birthday}
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