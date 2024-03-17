import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

function GroupProduct() {
    // Состояние для хранения списка должностей
    const [positions, setPositions] = useState([]);

    // Функция для загрузки данных о должностях из базы
    const fetchPositions = () => {
        axios.get('http://localhost:5134/GroupProduct/AllItems')
            .then(response => {
                // Устанавливаем полученные данные о должностях в состояние
                setPositions(response.data);
            })
            .catch(error => {
                console.error('Не удалось загрузить список должностей:', error);
            });
    };

    // Загрузка списка должностей при монтировании компонента
    useEffect(() => {
        fetchPositions();
    }, []);
    return (

        <Container>
      <h2>Группа продуктов</h2>
      <ul>
        {/* Рендерим элементы списка должностей */}
        {positions.map(position => (
          <li key={position.id}>{position.name}</li> 
        ))}
      </ul>
    </Container>

    )
}

export default GroupProduct