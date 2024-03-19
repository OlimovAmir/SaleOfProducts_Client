import React, { useState, useEffect } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectShowModal, setShowModal } from '../../redux/reducers/modalAddGroupSlice.js';
import AddGroupForm from '../../form/AddGroupForm.jsx';

function GroupProduct({ onSubmit }) { // Изменили onClose на onSubmit
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

    //-----модальное окно---------------------------------------------------------
    const showModal = useSelector(selectShowModal);
    const dispatch = useDispatch();

    const handleClose = () => { // Переименовали onClose на handleClose
        dispatch(setShowModal(false));
    };

    return (
        <div>
            <div className=''>
                <Button className='m-2' variant="secondary" onClick={() => dispatch(setShowModal(true))}>Add Group</Button>
                <Button variant="secondary">Add Name Characteristik</Button>

            </div>
            <Modal show={showModal} onHide={handleClose}> {/* Использовали handleClose */}
                <Modal.Header closeButton>
                    <Modal.Title>Add Group</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Передаем функцию onSubmit в компонент AddGroupForm */}
                    <AddGroupForm onSubmit={onSubmit} onClose={handleClose} /> {/* Использовали handleClose */}
                </Modal.Body>
            </Modal>
            <div>
                <Container>
                    <h2>Группа продуктов</h2>
                    <ul>
                        {groups.map(group => (
                            <li key={group.id}>{group.name}
                                <Button className='m-2' size="sm" variant="outline-danger">x</Button>
                            </li>))}
                    </ul>
                </Container>
            </div>
            <div>
            </div>
        </div>
    )
}

export default GroupProduct;