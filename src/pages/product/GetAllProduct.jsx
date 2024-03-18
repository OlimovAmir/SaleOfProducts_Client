import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

function GetAllProduct() {
     // Состояние для хранения списка Products
     const [products, setProducts] = useState([]);

     // Функция для загрузки данных о Products из базы
    const fetchProducts = () => {
        axios.get('http://localhost:5134/Product/AllItems')
            .then(response => {
                // Устанавливаем полученные данные о Products в состояние
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Не удалось загрузить список Products:', error);
            });
    };
    // Загрузка списка Products при монтировании компонента
    useEffect(() => {
        fetchProducts();
    }, []);
  return (
    <Container>
            <h2>Название продуктов</h2>
            <ul>
                {products.map(product => (<li key={product.id}>
                {product.name}
                {': цена '}{product.price}{' сомони '}
                {': к-во '}{product.quantity}{' '} {product.unit.name}
                </li>))}
            </ul>
        </Container>
  )
}

export default GetAllProduct