import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
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
                console.log(response.data);
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

    const handleNameCha = (groupId, groupName) => {
        console.log('groupId:', groupId);
        setSelectedGroupId(groupId);
        setSelectedGroupName(groupName);
        setShowModalName(true); // Вызываем действие для показа модального окна

    };

    const [selectedGroupId, setSelectedGroupId] = useState(null);
    const [selectedGroupName, setSelectedGroupName] = useState(null);

    // код для поиска объекта
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredGroups = groups.filter(group =>
        group.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
            <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div>
                <Container>
                    <h2>Группа продуктов</h2>
                    <ul>
                        {filteredGroups.map((group, index) => (
                            <li key={index} className={styles.groupListItem}>
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
                                    <Button className='m-2' size="sm" variant="outline-info">
                                        <FontAwesomeIcon icon={faPen} />
                                    </Button>
                                    <Button
                                        className='m-2'
                                        size="sm"
                                        variant="secondary"
                                        onClick={() => {
                                            handleNameCha(group.id, group.name);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faList} /> Add Name Characteristik
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <SuccessModal show={selectedGroup !== null} handleClose={handleCloseModal} />
                    <ModalNameCharacteristik
                        show={showModalName}
                        handleClose={() => setShowModalName(false)}
                        groupId={selectedGroupId} // Передаем groupId в компонент ModalNameCharacteristik
                        groupName={selectedGroupName}
                    />
                </Container>
            </div>
        </div>
    )
}

export default GroupProduct;