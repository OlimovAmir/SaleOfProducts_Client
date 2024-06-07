import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport, faList, faPrint } from '@fortawesome/free-solid-svg-icons';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import styles from './Cash.module.css'; // Assuming you have a CSS module for styling

function GetAllCach() {
  const [cashIncomes, setCashIncomes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchCashIncomes = () => {
    axios.get('http://localhost:5134/CashIncome/AllItems')
      .then(response => {
        setCashIncomes(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Не удалось загрузить список наличных поступлений:', error);
      });
  };

  useEffect(() => {
    fetchCashIncomes();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCashIncomes = cashIncomes
    .filter(income =>
      income.fromWhom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      income.incomeItems.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => a.transactionDate.localeCompare(b.transactionDate));

  const totalAmount = filteredCashIncomes.reduce((sum, income) => sum + income.amount, 0);

  const handleExport = () => {
    const exportData = cashIncomes.map(income => ({
      fromWhom: income.fromWhom,
      name: income.incomeItems.map(item => item.name).join(', '),
      transactionDate: income.transactionDate,
      amount: income.amount,
      description: income.description,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array'
    });

    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'CashIncomes.xlsx');
  };

  return (
    <Container className={styles.wrapper}>
      <Form.Control
        type="text"
        placeholder="Search"
        className="mr-sm-2 w-50"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className={styles.title}>
        <h2>Список Наличных поступлений</h2>
        <Button className='m-2' size="sm" variant="secondary">
          <FontAwesomeIcon icon={faList} /> Добавить новой записи
        </Button>
        <Button className='m-2' size="sm" variant="secondary" onClick={handleExport}>
          <FontAwesomeIcon icon={faFileExport} /> Экспорт в Excel
        </Button>
        <Button className='m-2' size="sm" variant="secondary">
          <FontAwesomeIcon icon={faPrint} /> Печать
        </Button>
      </div>

      <ol>
        <div className='row'>
          <div className='col-2'><b>От кого:</b></div>
          <div className='col-3'><b>Наименование дохода:</b></div>
          <div className='col-1'><b>Дата</b></div>
          <div className='col-1'><b>Сумма:</b></div>
          <div className='col-2'><b>Описание:</b></div>
        </div>
        {filteredCashIncomes.map(income => (
          <li key={income.id} className={styles.itemRow}>
            <div className='row'>
              <div className='col-2'>{income.fromWhom}</div>
              <div className='col-3'>{income.incomeItems.map(item => item.name).join(', ')}</div>
              <div className='col-1'>{new Date(income.transactionDate).toLocaleDateString()}</div>
              <div className='col-1'>{income.amount}</div>
              <div className='col-2'>{income.description}</div>
            </div>
          </li>
        ))}
        <li className={styles.totalRow}>
          <div className='row'>
            <div className='col-2'><b>Итого:</b></div>
            <div className='col-3'></div>
            <div className='col-1'></div>
            <div className='col-1'><b>{totalAmount}</b></div>
            <div className='col-2'></div>
          </div>
        </li>
      </ol>
    </Container>
  );
}

export default GetAllCach;