import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { showModalSuccess, hideModal } from '../../redux/reducers/successSlice.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import styles from './GroupProduct.module.css';
import SuccessModal from '../../components/SuccessModal.jsx';
import AddGroupModal from '../../components/AddGroupModal.jsx';
import ModalNameCharacteristik from '../../components/ModalNameCharacteristik.jsx';



function GroupProduct({ onSubmit }) {
    // Состояние для хранения списка GroupProduct
    const [groups, setGroups] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false); // Состояние для открытия/закрытия модального окна добавления группы
    const [showModalName, setShowModalName] = useState(false);
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
            setGroups(prevGroups => prevGroups.filter(group => group.id !== groupId)); // Используем функцию обновления состояния
            dispatch(showModalSuccess());
            setSelectedGroup(groupId);
        } catch (error) {
            console.error('Ошибка при удалении объекта:', error);
        }
    };


    const handleShowAddModal = () => {
        setShowAddModal(true); // Устанавливаем состояние, чтобы открыть модальное окно добавления группы
    };

    const handleNameCha = (groupId) => {
        setSelectedGroupId(groupId);
        setShowModalName(true); // Вызываем действие для показа модального окна
    };

    const [selectedGroupId, setSelectedGroupId] = useState(null);
    

    return (
        <div>
            <div className=''>
                <Button className='m-2' variant="secondary" onClick={handleShowAddModal}>Add Group</Button>
                <AddGroupModal
                    showAddModal={showAddModal}
                    handleClose={() => setShowAddModal(false)}
                    updateGroupList={fetchGroups} // Передаем функцию обновления списка групп
                />
            </div>
            <div>
                <Container>
                    <h2>Группа продуктов</h2>
                    <ul>
                        {groups.length > 0 && groups.map(group => {
                            if (group && group.name) {
                                return (
                                    <li key={group.id} className={styles.groupListItem}>
                                        <div className={styles.groupName}>{group.name}</div>
                                        <div className={styles.groupActions}>
                                            <Button
                                                className='m-2'
                                                size="sm"
                                                variant="outline-danger"
                                                onClick={() => handleDelete(group.id)}
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </Button>
                                            <Button className='m-2' size="sm" variant="outline-info"><FontAwesomeIcon icon={faPen} /></Button>
                                            <Button
                                                className='m-2'
                                                size="sm"
                                                variant="secondary"
                                                onClick={() => handleNameCha(group.id)} // Передаем groupId
                                            >
                                                <FontAwesomeIcon icon={faList} /> Add Name Characteristik
                                            </Button>
                                        </div>
                                    </li>
                                );
                            } else {
                                console.warn('Invalid group object:', group);
                                return null; // Пропускаем элемент списка, если он не содержит свойство 'name'
                            }
                        })}
                    </ul>
                    <SuccessModal show={selectedGroup !== null} handleClose={handleCloseModal} />
                    <ModalNameCharacteristik
                        show={showModalName}
                        handleClose={() => setShowModalName(false)}
                        groupId={selectedGroupId} // Передаем groupId в компонент ModalNameCharacteristik
                    />
                </Container>
            </div>
        </div>
    )
}

export default GroupProduct;