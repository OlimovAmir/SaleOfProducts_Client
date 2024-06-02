import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { closeModalInfo } from '../../redux/reducers/modalInfoGroupProductSlice';

function InfoGroupProduct() {
    const dispatch = useDispatch();
    const showModalInfo = useSelector((state) => state.infoGroupProduct.showModalInfo);
    const selectedGroupId = useSelector((state) => state.infoGroupProduct.selectedGroupId);

    const [groupInfo, setGroupInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (selectedGroupId) {
            const fetchGroupInfo = async () => {
                setLoading(true);
                setError(null);
                try {
                    const response = await axios.get(`http://localhost:5134/GroupProduct/GetItemById?id=${selectedGroupId}`);
                    setGroupInfo(response.data);
                } catch (err) {
                    setError('Ошибка при загрузке информации о группе');
                } finally {
                    setLoading(false);
                }
            };
            fetchGroupInfo();
        }
    }, [selectedGroupId]);

    const handleClose = () => {
        dispatch(closeModalInfo());
        setGroupInfo(null); // Очистка информации при закрытии модального окна
        setError(null); // Очистка ошибки при закрытии модального окна
    };

    return (
        <Modal
            show={showModalInfo}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Информация о группе</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {loading && <p>Загрузка...</p>}
                {error && <p>{error}</p>}
                {groupInfo ? (
                    <div>
                        <p>ID: {groupInfo.id}</p>
                        <p>Название: {groupInfo.name}</p>
                        {/* Добавьте другие поля по мере необходимости */}
                    </div>
                ) : (
                    !loading && !error && <p>Группа не выбрана</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button variant="primary">Понял</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default InfoGroupProduct;