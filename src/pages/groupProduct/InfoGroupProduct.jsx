import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { closeModalInfo } from '../../redux/reducers/modalInfoGroupProductSlice';

function InfoGroupProduct() {
    const dispatch = useDispatch();
    const showModalInfo = useSelector((state) => state.infoGroupProduct.showModalInfo);
    const selectedGroupId = useSelector((state) => state.infoGroupProduct.selectedGroupId);

    const handleClose = () => dispatch(closeModalInfo());

    return (
        <Modal
            show={showModalInfo}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {selectedGroupId ? (
                    <p>ID выбранной группы: {selectedGroupId}</p>
                ) : (
                    <p>Группа не выбрана</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default InfoGroupProduct;