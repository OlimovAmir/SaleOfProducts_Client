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
                <Modal.Title>Информация о товаре</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {loading && <p>Загрузка...</p>}
                {error && <p>{error}</p>}
                {groupInfo ? (
                    <div>
                        <p>ID: {groupInfo.id}</p>
                        <b >Название: {groupInfo.name}</b>
                        {groupInfo.nameCharacteristicProducts && groupInfo.nameCharacteristicProducts.length > 0 && (
                            <div>
                                <b>Характеристики продукта:</b>
                                <ul>
                                    {groupInfo.nameCharacteristicProducts.map((char) => (
                                        <i key={char.id}>
                                            <span>{char.name} :</span>
                                            {char.valueCharacteristicProducts && char.valueCharacteristicProducts.length > 0 && (
                                                <span>
                                                    {char.valueCharacteristicProducts.map((value) => (
                                                        <span key={value.id}>
                                                            <span> {value.name}</span> <br />
                                                        </span>
                                                    ))}
                                                </span>
                                            )}
                                        </i>
                                        
                                    ))}
                                </ul>
                                
                            </div>
                        )}
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