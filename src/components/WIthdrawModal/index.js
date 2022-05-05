import { useState } from "react";
import { Modal } from "react-bootstrap";
import TakCoinImg from '../../assets/images/tak-coin.svg';
import ArrowDownImg from '../../assets/images/arrow-down.svg';

const WithdrawModal = (props) => {
    const { show, onHide } = props;
    const [moneyType, setMoneyType] = useState(false);

    return (
        <Modal show={show} onHide={onHide} >
            <Modal.Header style={{backgroundColor: '#100F25', borderBottom: 'none'}} closeButton>
                <Modal.Title><span style={{color: '#F001F4'}}>WITHDRAW</span></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#100F25', color: 'white'}}>
                <h6 className="text-light">Select coin</h6>
                <div className="relative">
                <div className="select-coin-box p-2">
                    <div className="w-100 d-flex  align-items-center justify-content-start p-1" onClick={() => setMoneyType(!moneyType)}>
                        <div className="d-flex align-items-center">
                            <img src={TakCoinImg} className="mr-2" width="25" alt="" />
                            <h6 className="mb-0">TAK</h6>
                        </div>
                    </div>
                    <img src={ArrowDownImg} alt="" style={{width: "15px"}}/>
                </div>
                <div className={`absolute select-money w-100 ${!moneyType ? 'hidden' : 'show'}`} style={{backgroundColor: "black"}}>
                    <div className="d-flex p-2 select-money-item" style={{backgroundColor: "#3c3c9577"}}>
                        <div className="d-flex align-items-center">
                            <img src={TakCoinImg} className="mr-2" width="25" alt="" />
                            <h6 className="mb-0">TAK</h6>
                        </div>
                    </div>
                    <div className="d-flex p-2 select-money-item">
                        <div className="d-flex align-items-center">
                            <img src={TakCoinImg} className="mr-2" width="25" alt="" />
                            <h6 className="mb-0">TAK</h6>
                        </div>
                    </div>
                    <div className="d-flex p-2 select-money-item" style={{backgroundColor: "#3c3c9577"}}>
                        <div className="d-flex align-items-center">
                            <img src={TakCoinImg} className="mr-2" width="25" alt="" />
                            <h6 className="mb-0">TAK</h6>
                        </div>
                    </div>
                </div>
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