import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/reducers/modalAddSupplierSlice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import axios from 'axios';
import SuccessModal from '../components/SuccessModal';

function AddSupplierForm({ onClose }) {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.addSupplier.showModal);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [supplierName, setSupplierName] = useState('');
  const [supplierAddress, setSupplierAddress] = useState('');
  const [supplierPhone, setSupplierPhone] = useState('');
  const [supplierINN, setSupplierINN] = useState('');

  const handleClose = () => {
    dispatch(closeModal());
    if (onClose) onClose(); // вызываем onClose если он передан
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const supplierData = {
      name: supplierName,
      address: supplierAddress,
      phone: supplierPhone,
      inn: supplierINN,
    };

    try {
      await axios.post('http://localhost:5134/Supplier/Create', supplierData);
      setShowSuccessModal(true); // Открыть модальное окно после успешной отправки данных
      handleClose(); // Закрываем модальное окно добавления поставщика
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false); // Закрыть модальное окно
    if (onClose) onClose(); // Закрыть форму или выполнить любые другие необходимые действия
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Добавить нового поставщика</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formSupplierName">
              <Form.Control
                type="text"
                placeholder="Название"
                value={supplierName}
                onChange={(e) => setSupplierName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSupplierAddress">
              <Form.Control
                type="text"
                placeholder="Адрес"
                value={supplierAddress}
                onChange={(e) => setSupplierAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSupplierPhone">
              <Form.Control
                type="phone"
                placeholder="Телефон"
                value={supplierPhone}
                onChange={(e) => setSupplierPhone(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSupplierINN">
              <Form.Control
                type="number"
                placeholder="ИНН"
                value={supplierINN}
                onChange={(e) => setSupplierINN(e.target.value)}
                required
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Закрыть
              </Button>
              <Button variant="primary" type="submit">
                Сохранить
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <SuccessModal show={showSuccessModal} handleClose={handleSuccessClose} />
    </>
  );
}

export default AddSupplierForm;