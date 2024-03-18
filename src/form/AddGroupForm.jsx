import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { performAsyncOperation } from '../redux/thunk/successAsyncThunkSlice.js';
import SuccessModal from '../components/SuccessModal.jsx';

function AddGroupForm({ onSubmit, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Отправка данных на сервер
            await axios.post('http://localhost:5134/GroupProduct/Create', formData);
            // Вызов функции onSubmit для дополнительной обработки (например, закрытие модального окна)
            onSubmit();
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
            // Обработка ошибки (например, вывод сообщения об ошибке)
        }
    };

    //---------------------------------------------------------------------
    const dispatch = useDispatch();

    const handleSuccess = () => {
        dispatch(performAsyncOperation());
    };

    return (
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

            <Button variant="primary" type="submit" onClick={handleSuccess}>
                Submit
            </Button>
            <SuccessModal />
            <Button variant="secondary" onClick={onClose} className="ml-2">
                Close
            </Button>
        </Form>
    );
}

export default AddGroupForm;