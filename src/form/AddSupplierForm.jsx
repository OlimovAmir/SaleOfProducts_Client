import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/reducers/modalAddSupplierSlice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import axios from 'axios';
import { performAsyncOperation } from '../redux/thunk/successAsyncThunkSlice';
import SuccessModal from '../components/SuccessModal'; // Подключаем модальное окно

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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Supplier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formSupplierName">
              <Form.Control
                type="text"
                placeholder="name"
                value={supplierName}
                onChange={(e) => setSupplierName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSupplierAddress">
              <Form.Control
                type="text"
                placeholder="Address"
                value={supplierAddress}
                onChange={(e) => setSupplierAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSupplierPhone">
              <Form.Control
                type="phone"
                placeholder="Phone"
                value={supplierPhone}
                onChange={(e) => setSupplierPhone(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSupplierINN">
              <Form.Control
                type="number"
                placeholder="INN"
                value={supplierINN}
                onChange={(e) => setSupplierINN(e.target.value)}
                required
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <SuccessModal show={showSuccessModal} onClose={handleSuccessClose} />
    </>
  );
}

export default AddSupplierForm;