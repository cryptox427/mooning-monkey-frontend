import { Modal } from "react-bootstrap";
import TakCoinImg from '../../assets/images/tak-coin.svg';

const WithdrawModal = (props) => {
    const { show, onHide } = props;

    return (
        <Modal show={show} onHide={onHide} >
            <Modal.Header style={{backgroundColor: '#100F25', borderBottom: 'none'}} closeButton>
                <Modal.Title><span style={{color: '#F001F4'}}>WITHDRAW</span></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#100F25', color: 'white'}}>
                <h6 class="text-light">Select coin</h6>
                <div class="select-coin-box p-2">
                <div class="w-100 d-flex align-items-center p-1">
                <img src={TakCoinImg} class="mr-2" width="25" alt="" />
                <h6 class="mb-0">TAK</h6>
                </div>

                <select name="" id="" class="form-control top-select bottom-select" style={{border: "none !important", width: "70px"}}>
                    
                <option value="">0.15</option>
                <option value="">0.15</option>
                <option value="">0.15</option>
                <option value="">0.15</option>
                    
                </select>

                </div>


                <div class="amount-balance mt-4 mb-1">
                <h6 class="text-light">Amount</h6>
                <div class="text-light">Wallet Balance: <span>0.15 TAK </span></div>
                </div>
                <div class="select-coin-box p-2">
                <div class="w-100 d-flex align-items-center justify-content-between p-1">
                <div class="d-flex align-items-center">
                    <img src={TakCoinImg} class="mr-2" width="25" alt="" />
                    <h6 class="mb-0">TAK</h6>
                </div>
                

                <h6 class="pink mb-0">0.01 TAK</h6>
                <h6 class="mb-0">MAX</h6>
                </div>

                <select name="" id="" class="form-control top-select bottom-select" style={{border: "none !important", width: "70px"}}>
                    
                <option value="">0.15</option>
                <option value="">0.15</option>
                <option value="">0.15</option>
                <option value="">0.15</option>
                    
                </select>

                </div>

                <div class="text-light text-right mt-2">Wallet Balance: <span>0.15 TAK </span></div>
                
                <a href="#" class="cta-btn justify-content-center mt-4" id="withdraw-btn">
                    Withdraw
                </a>
                <div class="amount-balance mt-4 mb-1 justify-content-center">
                    <a href="#" class="text-light" style={{textDecoration: "underline !important"}}>View History</a>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default WithdrawModal;