import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAddCashIncome } from '../../../redux/reducers/modalAddCashIncomeSlice.js'; // Измените на правильный файл
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import axios from 'axios';

function FormAddCashIncome() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.addCashIncome.showModalAddCashIncome);

  const handleClose = () => {
    dispatch(closeModalAddCashIncome());
  };

  // Состояние для хранения данных формы
  const [formData, setFormData] = useState({
    transactionDate: '',
    amount: 0,
    description: '',
    fromWhom: '',
    incomeItemId: '',
    incomeItems: [{ name: '' }]
  });

  // Состояние для хранения списка прихода
  const [incomeItems, setIncomeItems] = useState([]);

  // Состояние для отслеживания успешной отправки данных
  const [isDataSent, setIsDataSent] = useState(false);

  // Обработчик события для обновления данных формы при изменении ввода
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Загрузка списка должностей при монтировании компонента
  useEffect(() => {
    // Запрос к API для получения списка Статьи прихода
    axios.get('http://localhost:5134/IncomeItem/AllItems')
      .then(response => {
        // Установка списка должностей в состояние
        setIncomeItems(response.data);
      })
      .catch(error => {
        console.error('Не удалось загрузить список должностей:', error);
      });
  }, []);

  // Обработчик события для отправки данных формы на бэкенд
  const handleSubmit = (e) => {
    e.preventDefault();

    // Преобразуем дату в формат UTC
    const utcTransactionDate = new Date(formData.transactionDate).toISOString();

    // Данные формы для отправки
    const dataToSend = {
      ...formData,
      transactionDate: utcTransactionDate
    };

    // Вывод данных формы в консоль для проверки
    console.log('Data to send:', dataToSend);

    // Отправляем данные формы на бэкенд API с помощью Axios
    axios.post('http://localhost:5134/CashIncome/Create', dataToSend)
      .then(response => {
        // Обработка успешного ответа
        console.log('Данные успешно отправлены:', response.data);
        setIsDataSent(true); // Устанавливаем флаг успешной отправки данных
        handleClose(); // Закрываем модальное окно
      })
      .catch(error => {
        // Обработка ошибки
        console.error('Не удалось отправить данные:', error);
      });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Transaction Date</Form.Label>
            <Form.Control
              type="date"
              name="transactionDate"
              value={formData.transactionDate}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicExpenseItemId">
            <Form.Label>Income Item</Form.Label>
            <Form.Control
              as="select"
              name="incomeItemId"
              value={formData.incomeItemId}
              onChange={handleInputChange}
            >
              <option value="">Select income item</option>
              {incomeItems.map(incomeItem => (
                <option key={incomeItem.id} value={incomeItem.id}>{incomeItem.name}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFromWhom">
            <Form.Label>From Whom</Form.Label>
            <Form.Control
              type="text"
              name="fromWhom"
              value={formData.fromWhom}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal>
    </>
  );
}

export default FormAddCashIncome;