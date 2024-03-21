import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { performAsyncOperation } from '../redux/thunk/successAsyncThunkSlice.js';
import SuccessModal from '../components/SuccessModal.jsx';
import { setShowModal } from '../redux/reducers/modalAddGroupSlice.js'; // Импорт экшена для установки состояния модального окна

function AddGroupForm({ onSubmit, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
    });
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5134/GroupProduct/Create', formData);
            onSubmit();
            setShowSuccessModal(true); // Открыть модальное окно после успешной отправки данных
            dispatch(setShowModal(false)); // Закрыть модальное окно формы добавления группы
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    const dispatch = useDispatch();
    const handleCloseModal = () => {
        setShowSuccessModal(false); // Закрыть модальное окно
        onClose(); // Закрыть форму или выполнить любые другие необходимые действия
    };

    const handleSuccessClose = () => {
        dispatch(performAsyncOperation());
        handleCloseModal(); // Закрыть модальное окно после успешной асинхронной операции
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="groupName">
                    <Form.Label>Group Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter group name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
                <SuccessModal show={showSuccessModal} onClose={handleSuccessClose} />
                <Button variant="secondary" onClick={handleCloseModal} className="ml-2">Close</Button>
            </Form>
            
        </>
    );
}

export default AddGroupForm;