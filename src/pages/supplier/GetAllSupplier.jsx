import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { showModalSuccess, hideModal } from '../../redux/reducers/successSlice.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faFileExport, faTrash, faList, faPrint} from '@fortawesome/free-solid-svg-icons';
import styles from './Supplier.module.css';
import SuccessModal from '../../components/SuccessModal.jsx';
import { openModal, closeModal } from '../../redux/reducers/modalAddSupplierSlice';
import AddSupplierForm from '../../form/AddSupplierForm';

function GetAllSupplier({ onSubmit }) {
  const [suppliers, setSuppliers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false); // Состояние для открытия/закрытия модального окна добавления группы
  const showModal = useSelector((state) => state.addSupplier.showModal);

  const fetchSuppliers = () => {
    axios.get('http://localhost:5134/Supplier/AllItems')
      .then(response => {
        setSuppliers(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Не удалось загрузить список поставщиков:', error);
      });
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  // Redux
  const dispatch = useDispatch();
  const [selectedSupplier, setSelectedSupplier] = useState(null); // Состояние для выбранной группы

  const handleCloseModal = () => {
    dispatch(hideModal());
    setSelectedSupplier(null);
  };

  const handleDelete = async (groupId) => {
    try {
      await axios.delete(`http://localhost:5134/GroupProduct/Delete?id=${groupId}`);
      setSuppliers(prevGroups => prevGroups.filter(group => group.id !== groupId)); // Используем функцию обновления состояния
      dispatch(showModalSuccess());
      setSelectedSupplier(groupId);
    } catch (error) {
      console.error('Ошибка при удалении объекта:', error);
    }
  };

  const handleShowAddModal = () => {
    setShowAddModal(true); // Устанавливаем состояние, чтобы открыть модальное окно добавления группы
  };

  // код для поиска объекта
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredGroups = suppliers
    .filter(group =>
      group.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleShow = () => {
    dispatch(openModal());
  };

  return (
    <Container className={styles.wrapper}>
      <Form.Control
        type="text"
        placeholder="Search"
        className="mr-sm-2 w-50"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className={styles.title}>
        <h2>Список поставщиков</h2>
        <Button
          className='m-2'
          size="sm"
          variant="secondary"
          onClick={handleShow}
        >
          <FontAwesomeIcon icon={faList} /> Добавить нового поставщика
        </Button>
        <Button className='m-2' size="sm" variant="secondary">
        <FontAwesomeIcon icon={faFileExport} /> Экспорт в Excel
        </Button>
        <Button className='m-2' size="sm" variant="secondary">
        <FontAwesomeIcon icon={faPrint} /> Печать
        </Button>
      </div>

      <ol>
        <div className='row'>
          <div className='col-3'> <b>Наименование:</b> </div>
          <div className='col-1'><b>ИНН:</b> </div>
          <div className='col-1'><b>Телефон:</b> </div>
          <div className='col-2'><b>Адрес:</b> </div>
        </div>
        {filteredGroups.map(supplier => (
          <li key={supplier.id}>
            <div className='row'>
              <div className='col-3'> {supplier.name} </div>
              <div className='col-1'>{supplier.inn}</div>
              <div className='col-1'>{supplier.phone}</div>
              <div className='col-2'>{supplier.address}</div>
              <div className='col-1'>
                <Button className='m-2' size="sm" variant="outline-info">
                  <FontAwesomeIcon icon={faPen} />
                </Button>
              </div>
              <div className='col-1'>
                <Button className='m-2' size="sm" variant="outline-danger">
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <AddSupplierForm
        showAddModal={showAddModal}
        handleClose={() => setShowAddModal(false)}
        updateGroupList={fetchSuppliers} // Передаем функцию обновления списка групп
      />
    </Container>
  );
}

export default GetAllSupplier;