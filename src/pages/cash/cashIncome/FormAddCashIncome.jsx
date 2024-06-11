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
    amount: 0,
    description: '',
    expenseItemId: '', // Идентификатор 
    transactionDate: '', // Дата
    fromWhom: '', //  от кого 
    
  });

  // Состояние для хранения списка должностей
  const [incomeItems, setIncomeItems] = useState([]);

  // Обработчик события для обновления данных формы при изменении ввода
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Загрузка списка должностей при монтировании компонента
  useEffect(() => {
    // Запрос к API для получения списка должностей
    axios.get('http://localhost:5134/IncomeItem/AllItems')
      .then(response => {
        // Установка списка должностей в состояние
        setIncomeItems(response.data);
      })
      .catch(error => {
        console.error('Не удалось загрузить список должностей:', error);
      });
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
      <br/>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="date"
              placeholder="Enter date"
              name="date"
            />
          </Form.Group>
        </Form>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicAmount">
            <Form.Control
              type="number"
              placeholder="Enter amount"
              name="amount"
            />
          </Form.Group>
        </Form>
        <Form.Group className="mb-3" controlId="formBasicIncomeItemId">            
            <Form.Control
              as="select"
              name="incomeItemId"
              value={formData.incomeItemId}
              onChange={handleInputChange}
            >
              <option value="">Select incomeItem</option>
              {incomeItems.map(incomeItem => (
                <option key={incomeItem.id} value={incomeItem.id}>{incomeItem.name}</option>
              ))}
            </Form.Control>
          </Form.Group>
        

        <Form >
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Control
              type="text"
              placeholder="Enter description"
              name="text"
            />
          </Form.Group>
        </Form>

        <Form >
          <Form.Group className="mb-3" controlId="formBasicFromWhom">
            <Form.Control
              type="text"
              placeholder="Enter fromWhom"
              name="fromWhom"
            />
          </Form.Group>
        </Form>

       

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormAddCashIncome;