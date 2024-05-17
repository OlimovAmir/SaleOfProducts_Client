import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
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
    return (
        <Container>
            <h2>Список поставщиков</h2>
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