import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/reducers/modalAddSupplierSlice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function AddSupplierForm({ onSubmit }) {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.addSupplier.showModal);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Supplier</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formSupplierName">            
            <Form.Control
              type="text"
              placeholder="name"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSupplierAddress">            
            <Form.Control
              type="text"
              placeholder="Address"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSupplierPhone">            
            <Form.Control
              type="phone"
              placeholder="Phone"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSupplierINN">            
            <Form.Control
              type="number"
              placeholder="INN"
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddSupplierForm;