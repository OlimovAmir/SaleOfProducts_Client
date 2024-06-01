import React, { useState, useEffect } from 'react';
import { Button, Container, Form, Offcanvas, OverlayTrigger, Tooltip } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { showModalSuccess, hideModal } from '../../redux/reducers/successSlice.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faInfo, faPen, faList, faPrint, faFileExport, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './GroupProduct.module.css';
import SuccessModal from '../../components/SuccessModal.jsx';
import AddGroupModal from '../../components/AddGroupModal.jsx';
import ModalNameCharacteristik from '../../components/ModalNameCharacteristik.jsx';
import { showModalInfo } from '../../redux/reducers/modalInfoGroupProductSlice.js';

function GroupProduct({ onSubmit, data }) {
    const [groups, setGroups] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showModalName, setShowModalName] = useState(false);
    const [showOffcanvas, setShowOffcanvas] = useState(false); // Состояние для Offcanvas
    const dispatch = useDispatch();
    const [selectedGroup, setSelectedGroup] = useState(null);

    const fetchGroups = () => {
        axios.get('http://localhost:5134/GroupProduct/AllItems')
            .then(response => {
                setGroups(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Не удалось загрузить список GroupProduct:', error);
            });
    };

    useEffect(() => {
        fetchGroups();
    }, []);

    const handleCloseModal = () => {
        dispatch(hideModal());
        setSelectedGroup(null);
    };

    const handleDelete = async (groupId) => {
        try {
            await axios.delete(`http://localhost:5134/GroupProduct/Delete?id=${groupId}`);
            setGroups(prevGroups => prevGroups.filter(group => group.id !== groupId));
            dispatch(showModalSuccess());
            setSelectedGroup(groupId);
        } catch (error) {
            console.error('Ошибка при удалении объекта:', error);
        }
    };

    const handleShowAddModal = () => {
        setShowAddModal(true);
    };

    const handleNameCha = (groupId, groupName) => {
        console.log('groupId:', groupId);
        setSelectedGroupId(groupId);
        setSelectedGroupName(groupName);
        setShowModalName(true);
    };

    const [selectedGroupId, setSelectedGroupId] = useState(null);
    const [selectedGroupName, setSelectedGroupName] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredGroups = groups.filter(group =>
        group.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    filteredGroups.sort((a, b) => a.name.localeCompare(b.name));

    const handleShowOffcanvas = () => setShowOffcanvas(true);
    const handleCloseOffcanvas = () => setShowOffcanvas(false);

    // showModalInfo

    const handleShowModalInfo = () => {
        dispatch(showModalInfo());
        
    };

    return (
        <div className={styles.wrapper}>
            <div className='d-flex align-items-center'>
                <Button className='m-2' variant="secondary" onClick={handleShowAddModal}>Add Group</Button>
                <Form.Control
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2 w-50"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <AddGroupModal
                    showAddModal={showAddModal}
                    handleClose={() => setShowAddModal(false)}
                    updateGroupList={fetchGroups}
                />
                <Button className='m-2' size="sm" variant="secondary">
                    <FontAwesomeIcon icon={faFileExport} /> Экспорт в Excel
                </Button>
                <Button className='m-2' size="sm" variant="secondary">
                    <FontAwesomeIcon icon={faPrint} /> Печать
                </Button>

                <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="tooltip-top">Additional menu</Tooltip>}
                >
                    <Button className='m-2' size="sm" variant="secondary" onClick={handleShowOffcanvas}>
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                </OverlayTrigger>
            </div>
            <div>
                <Container>
                    <h2 className={styles.titleGroup}>Группа продуктов</h2>
                    <ul>
                        {filteredGroups.map((group, index) => (
                            <li key={index} className={styles.groupListItem}>
                                <div className={styles.groupName}>{group.name}</div>
                                <div className={styles.groupActions}>
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip id="tooltip-top">Delete</Tooltip>}
                                    >
                                        <Button
                                            className='m-2'
                                            size="sm"
                                            variant="outline-danger"
                                            onClick={() => handleDelete(group.id)}
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </Button>
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip id="tooltip-top">Modification or correction</Tooltip>}
                                    >
                                        <Button className='m-2' size="sm" variant="outline-info">
                                            <FontAwesomeIcon icon={faPen} />
                                        </Button>
                                    </OverlayTrigger>

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

                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip id="tooltip-top">Full information</Tooltip>}
                                    >
                                        <Button className='m-2' size="sm" variant="outline-info" onClick={handleShowModalInfo}>
                                            <FontAwesomeIcon icon={faInfo} />
                                        </Button>
                                    </OverlayTrigger>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <SuccessModal show={selectedGroup !== null} handleClose={handleCloseModal} />
                    <ModalNameCharacteristik
                        show={showModalName}
                        handleClose={() => setShowModalName(false)}
                        groupId={selectedGroupId}
                        groupName={selectedGroupName}
                    />
                </Container>
            </div>

            <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default GroupProduct;