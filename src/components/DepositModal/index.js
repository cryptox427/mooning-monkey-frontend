import { Modal } from "react-bootstrap";

const DepositModal = (props) => {
    const { show, onHide } = props;

    return (
        <Modal show={show} onHide={onHide} >
            <Modal.Header style={{backgroundColor: '#100F25', borderBottom: 'none'}} closeButton>
                <Modal.Title><span style={{color: '#F001F4'}}>DEPOSIT</span></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#100F25', color: 'white'}}>
                
            </Modal.Body>
        </Modal>
    );
}

export default DepositModal;