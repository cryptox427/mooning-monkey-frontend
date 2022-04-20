import { useState } from "react";
import { Modal } from "react-bootstrap";
import './index.scss';

const BankrollModal = (props) => {
    const { show, onHide } = props;
    const [status, setStatus] = useState(0);
    return (
        <Modal show={show} onHide={onHide} >
            <Modal.Header style={{backgroundColor: '#100F25', borderBottom: 'none'}} closeButton>
                <Modal.Title><span style={{color: '#F001F4'}}>Bankroll</span></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#100F25', color: 'white'}}>
                <div className="d-flex mb-4">
                    <div className="d-flex flex-column select-item" onClick={() => setStatus(0)}>
                        OVERVIEW
                        {status === 0 && <div className="underline"></div>}
                        
                    </div>
                    <div className="d-flex flex-column px-4 select-item" onClick={() => setStatus(1)}>
                        CHANGE THE BANKROLL
                        {status === 1 && <div className="underline"></div>}
                    </div>
                    <div className="d-flex flex-column select-item" onClick={() => setStatus(2)}>
                        HISTORY
                        {status === 2 && <div className="underline"></div>}
                    </div>
                </div>
                <div className="">
                    {
                        status === 0 &&
                            <div className="">Overview</div>
                    }
                    {
                        status === 1 &&
                            <div className="">Change the bankroll</div>
                    }
                    {
                        status === 2 &&
                            <div className="">History</div>
                    }
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default BankrollModal;