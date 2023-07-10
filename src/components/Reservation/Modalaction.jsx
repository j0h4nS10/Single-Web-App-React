
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const Modalaction = (handleShow, handleClose, show, props) => {

    return (
        <><Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.body}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}


export default Modalaction;