import React, { useState, useEffect } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectShowModal, setShowModal } from '../../redux/reducers/modalAddGroupSlice.js';
import AddGroupForm from '../../form/AddGroupForm.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import styles from './GroupProduct.module.css';
import SuccessModal from '../../components/SuccessModal.jsx';


function GroupProduct({ onSubmit }) {
    // Состояние для хранения списка GroupProduct
    const [groups, setGroups] = useState([]);
    // Состояние для отображения модального окна добавления группы
    const [showAddModal, setShowAddModal] = useState(false);
    // Состояние для отображения модального окна об успешном удалении
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // Функция для загрузки данных о GroupProduct из базы
    const fetchGroups = () => {
        axios.get('http://localhost:5134/GroupProduct/AllItems')
            .then(response => {
                // Устанавливаем полученные данные о GroupProduct в состояние
                setGroups(response.data);
            })
            .catch(error => {
                console.error('Не удалось загрузить список GroupProduct:', error);
            });
    };
    // Загрузка списка GroupProduct при монтировании компонента
    useEffect(() => {
        fetchGroups();
    }, []);

    // Redux
    const showModal = useSelector(selectShowModal);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setShowModal(false));
    };

    const handleDelete = async (groupId) => {
        try {
            await axios.delete(`http://localhost:5134/GroupProduct/Delete?id=${groupId}`);
            const updatedGroups = groups.filter(group => group.id !== groupId);
            setGroups(updatedGroups);
            setShowSuccessModal(true); // Показываем модальное окно после успешного удаления
        } catch (error) {
            console.error('Ошибка при удалении объекта:', error);
        }
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false); // Закрываем модальное окно об успешном удалении
    };


    return (
        <div>
            <div className=''>
                <Button className='m-2' variant="secondary" onClick={() => setShowAddModal(true)}>Add Group</Button>
                <Button variant="secondary">Add Name Characteristik</Button>
            </div>
            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Group</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddGroupForm onSubmit={onSubmit} onClose={() => setShowAddModal(false)} />
                </Modal.Body>
            </Modal>
            <div>
                <Container>
                    <h2>Группа продуктов</h2>
                    <ul>
                        {groups.map(group => (
                            <li key={group.id} className={styles.groupListItem}>
                                <div className={styles.groupName}>{group.name}</div>
                                <div className={styles.groupActions}>
                                    <Button className='m-2' size="sm" variant="outline-danger" onClick={() => handleDelete(group.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                    <Button className='m-2' size="sm" variant="outline-info"><FontAwesomeIcon icon={faPen} /></Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <SuccessModal show={showSuccessModal} handleClose={handleCloseSuccessModal} />
                </Container>
            </div>
            <div>
            </div>
        </div>
    )
}

export default GroupProduct;