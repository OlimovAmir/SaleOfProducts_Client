import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

function GroupProduct() {
    // Состояние для хранения списка должностей
    const [groups, setGroups] = useState([]);

    // Функция для загрузки данных о должностях из базы
    const fetchGroups = () => {
        axios.get('http://localhost:5134/GroupProduct/AllItems')
            .then(response => {
                // Устанавливаем полученные данные о должностях в состояние
                setGroups(response.data);
            })
            .catch(error => {
                console.error('Не удалось загрузить список должностей:', error);
            });
    };
    // Загрузка списка должностей при монтировании компонента
    useEffect(() => {
        fetchGroups();
    }, []);
    return (
        <Container>
            <h2>Группа продуктов</h2>
            <ul>
                {groups.map(group => (<li key={group.id}>{group.name} </li>))}
            </ul>
        </Container>
    )
}

export default GroupProduct