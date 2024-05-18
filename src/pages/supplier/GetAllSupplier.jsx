import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import styles from './Supplier.module.css';
import axios from 'axios';

function GetAllSupplier() {
    // Состояние для хранения списка Suppliers
    const [products, setProducts] = useState([]);

    // Функция для загрузки данных о Suppliers из базы
    const fetchProducts = () => {
        axios.get('http://localhost:5134/Supplier/AllItems')
            .then(response => {
                // Устанавливаем полученные данные о Suppliers в состояние
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Не удалось загрузить список Suppliers:', error);
            });
    };
    // Загрузка списка Suppliers при монтировании компонента
    useEffect(() => {
        fetchProducts();
    }, []);
     // вызов модального окна добавление поставщика




    return (
        <Container className={styles.wrapper}>
        <div className={styles.title}>
        <h2>Список поставщиков</h2>
            <Button
                className='m-2'
                size="sm"
                variant="secondary"
                onClick={() => {

                }}
            >
                <FontAwesomeIcon icon={faList} /> Add New Supplier
            </Button>
            <Button
                className='m-2'
                size="sm"
                variant="secondary"
                onClick={() => {

                }}
            >
                <FontAwesomeIcon icon={faList} /> Export to Excel
            </Button>
            <Button
                className='m-2'
                size="sm"
                variant="secondary"
                onClick={() => {

                }}
            >
                <FontAwesomeIcon icon={faList} /> Print out
            </Button>
        </div>
            
            <ol>
                <div className='row'>
                    <div className='col-3'> <b>Наименование:</b>   </div>
                    <div className='col-2'><b>ИНН:</b> </div>
                    <div className='col-2'><b>Телефон:</b> </div>
                    <div className='col-2'><b>Адрес:</b> </div>
                </div>
                {products.map(product => (
                    <li key={product.id}>
                        <div className='row'>
                            <div className='col-3'> {product.name} </div>
                            <div className='col-2'>{product.inn}</div>
                            <div className='col-2'>{product.phone}</div>
                            <div className='col-2'>{product.address}</div>
                        </div>

                    </li>
                ))}
            </ol>
        </Container>
    )
}

export default GetAllSupplier