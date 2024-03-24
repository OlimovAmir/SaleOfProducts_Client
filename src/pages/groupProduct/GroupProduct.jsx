import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { showModalSuccess, hideModal } from '../../redux/reducers/successSlice.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import styles from './GroupProduct.module.css';
import SuccessModal from '../../components/SuccessModal.jsx';
import AddGroupModal from '../../components/AddGroupModal.jsx';



function GroupProduct({ onSubmit }) {
    // Состояние для хранения списка GroupProduct
    const [groups, setGroups] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false); // Состояние для открытия/закрытия модального окна добавления группы

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
    const dispatch = useDispatch();
    const [selectedGroup, setSelectedGroup] = useState(null); // Состояние для выбранной группы

    const handleCloseModal = () => {
        dispatch(hideModal());
        setSelectedGroup(null);
    };

    const handleDelete = async (groupId) => {
        try {
            await axios.delete(`http://localhost:5134/GroupProduct/Delete?id=${groupId}`);
            const updatedGroups = groups.filter(group => group.id !== groupId);
            setGroups(updatedGroups);
            dispatch(showModalSuccess()); // Переименовали функцию showModal в showSuccessModal
            setSelectedGroup(groupId);
        } catch (error) {
            console.error('Ошибка при удалении объекта:', error);
        }
    };

    const handleShowAddModal = () => {
        setShowAddModal(true); // Устанавливаем состояние, чтобы открыть модальное окно добавления группы
    };

    const addNewGroup = (newGroup) => {
        setGroups([...groups, newGroup]);
    };

    return (
        <div>
            <div className=''>
                <Button className='m-2' variant="secondary" onClick={handleShowAddModal}>Add Group</Button>
                <Button variant="secondary">Add Name Characteristik</Button>
                <AddGroupModal
                    showAddModal={showAddModal}
                    handleClose={() => setShowAddModal(false)}
                    addNewGroup={addNewGroup} // Передаем функцию в AddGroupModal
                />
            </div>
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
                    <SuccessModal show={selectedGroup !== null} handleClose={handleCloseModal} />
                </Container>
            </div>
        </div>
    )
}

export default GroupProduct;