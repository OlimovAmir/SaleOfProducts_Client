import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import styles from './Supplier.module.css';
import { openModal } from '../../redux/reducers/modalAddSupplierSlice';
import AddSupplierForm from '../../form/AddSupplierForm';

function GetAllSupplier() {
  // Состояние для хранения списка Suppliers
  const [suppliers, setSuppliers] = useState([]);
  
  const dispatch = useDispatch();

  const fetchSuppliers = () => {
    axios.get('http://localhost:5134/Supplier/AllItems')
      .then(response => {
        setSuppliers(response.data);
      })
      .catch(error => {
        console.error('Не удалось загрузить список Suppliers:', error);
      });
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const handleShow = () => {
    dispatch(openModal());
  };

  return (
    <Container className={styles.wrapper}>
      <div className={styles.title}>
        <h2>Список поставщиков</h2>
        <Button
          className='m-2'
          size="sm"
          variant="secondary"
          onClick={handleShow}
        >
          <FontAwesomeIcon icon={faList} /> Add New Supplier
        </Button>
        <Button className='m-2' size="sm" variant="secondary">
          <FontAwesomeIcon icon={faList} /> Export to Excel
        </Button>
        <Button className='m-2' size="sm" variant="secondary">
          <FontAwesomeIcon icon={faList} /> Print out
        </Button>
      </div>
      
      <ol>
        <div className='row'>
          <div className='col-3'> <b>Наименование:</b> </div>
          <div className='col-2'><b>ИНН:</b> </div>
          <div className='col-2'><b>Телефон:</b> </div>
          <div className='col-2'><b>Адрес:</b> </div>
        </div>
        {suppliers.map(supplier => (
          <li key={supplier.id}>
            <div className='row'>
              <div className='col-3'> {supplier.name} </div>
              <div className='col-2'>{supplier.inn}</div>
              <div className='col-2'>{supplier.phone}</div>
              <div className='col-2'>{supplier.address}</div>
            </div>
          </li>
        ))}
      </ol>
      <AddSupplierForm updateSupplierList={fetchSuppliers} />
    </Container>
  );
}

export default GetAllSupplier;