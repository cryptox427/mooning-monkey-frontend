import { useState } from "react";
import { Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import TakCoinImg from '../../assets/images/tak-coin.svg';
import ArrowDownImg from '../../assets/images/arrow-down.svg';
import './index.scss';
import {request, postRequest} from '../../utils/request';

const WithdrawModal = (props) => {
    const { show, onHide } = props;
    const [moneyType, setMoneyType] = useState(false);

    const withdrawApiUrl = 'http://localhost/monkey-moon/withdraw.php';

    const onWithdraw = async () => {
        console.log("on~~~~~~~~~~~~ withdraw");
        const data = {
            tokenId: 1,
            tokenAmount: 12
        }
        // const res = await request('post', url, data);
        const checkSessionRes = await postRequest('post', withdrawApiUrl, data);
        console.log("response:", checkSessionRes.data);

        if (checkSessionRes.data === 'login success') {
            
        }
    }

    return (
        <Modal show={show} onHide={onHide} className="withdraw-modal">
            <Modal.Header style={{backgroundColor: '#100F25', borderBottom: 'none'}} closeButton closeVariant	
='white'>
                <Modal.Title><span style={{color: '#F001F4'}}>WITHDRAW</span></Modal.Title>

            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#100F25', color: 'white'}}>
                <h6 className="text-light dropdown-title">Select coin</h6>
                <div className="relative">
                <div className="select-coin-box p-2">
                    <div className="w-100 d-flex  align-items-center justify-content-start p-1" onClick={() => setMoneyType(!moneyType)}>
                        <div className="d-flex align-items-center">
                            <img src={TakCoinImg} className="mr-2" width="25" alt="" />
                            <h6 className="mb-0 dropdwon-item-text">TAK</h6>
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
                <h6 class="text-light dropdown-title">Amount</h6>
                <div class="text-light poppin-light-txt">Wallet Balance: <span className="poppin-light-txt">0.15 TAK </span></div>
                </div>
                <div className="select-coin-box p-2">
                <div className="w-100 d-flex align-items-center justify-content-between p-1">
                <div className="d-flex align-items-center">
                    <img src={TakCoinImg} className="mr-2" width="25" alt="" />
                    <h6 className="mb-0  dropdwon-item-text">TAK</h6>
                </div>
                

                <h6 className="pink mb-0 poppin-light-txt">0.01 TAK</h6>
                <h6 className="mb-0 poppin-light-txt">MAX</h6>
                </div>

                </div>

                <div className="text-light text-right mt-2 poppin-light-txt">Wallet Balance: <span className="poppin-light-txt">0.15 TAK </span></div>
                
                <div className="cta-btn justify-content-center mt-4 poppin-light-txt withdraw-btn" id="withdraw-btn" onClick={()=>onWithdraw()}>
                    Withdraw
                </div>
                <div className="amount-balance mt-4 mb-1 justify-content-center">
                    <a href="#" className="text-light poppin-light-txt" style={{textDecoration: "underline !important"}}>View History</a>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default WithdrawModal;