import { useState } from "react";
import { Modal } from "react-bootstrap";
import { BSC_TOKENS, DEPOSIT_WALLET_ADDRESS } from "../../constants/tokens";
import { AiOutlineClose } from "react-icons/ai";
import TakCoinImg from '../../assets/images/tak-coin.svg';
import ArrowDownImg from '../../assets/images/arrow-down.svg';
import './index.scss';
import {request, postRequest} from '../../utils/request';

const WithdrawModal = (props) => {
    const { show, onHide } = props;
    const tokenNames = Object.keys(BSC_TOKENS);
    const [selectedTokenName, setSelectedTokenName] = useState(tokenNames[0]);
    const [balance, setBalance] = useState(0);
    const [showSelect, setShowSelect] = useState(false);
    const [tokenAmount, setTokenAmount] = useState(0.01);

    const withdrawApiUrl = './monkey-moon/withdraw.php';

    const handleToken = (tokenName) => {
        setSelectedTokenName(tokenName);
        setShowSelect(false);
    };

    const onWithdraw = async () => {
        console.log("on~~~~~~~~~~~~ withdraw");
        const data = {
            tokenId: 1,
            tokenAmount: tokenAmount,
            publicKey: localStorage.getItem('publicKey')
        }
        // const res = await request('post', url, data);
        const checkSessionRes = await postRequest('post', withdrawApiUrl, data);
        console.log("response:", checkSessionRes.data);

        if (checkSessionRes.data === 'login success') {
            
        }
    }
    const handleTokenAmount = (e) => {
        const newValue = e.target.value;
        setTokenAmount(newValue)
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
                        <div className="w-100 d-flex  align-items-center justify-content-start p-1" onClick={() => setShowSelect(!showSelect)}>
                            <div className="d-flex align-items-center">
                                <img src={TakCoinImg} className="mr-2" width="25" alt="" />
                                <h6 className="mb-0 dropdwon-item-text">{selectedTokenName}</h6>
                            </div>
                        </div>
                        <img src={ArrowDownImg} alt="" style={{width: "15px"}}/>
                    </div>
                    <div className={`absolute select-money w-100 ${!showSelect ? 'hidden' : 'show'}`} style={{backgroundColor: "black"}}>
                        {
                            tokenNames.map((tokenName, index) =>
                                <div key={index} className="d-flex p-2 select-money-item" onClick={() => handleToken(tokenName)} >
                                    <div className="d-flex align-items-center">
                                        <img src={TakCoinImg} className="mr-2" width="25" alt="" />
                                        <h6 className="mb-0">{tokenName}</h6>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className="amount-balance mt-4 mb-1">
                    <h6 className="text-light">Amount</h6>
                    <div className="text-light">Wallet Balance: <span>{balance} {selectedTokenName} </span></div>
                </div>
                <div className="select-coin-box p-2">
                    <div className="w-100 d-flex align-items-center justify-content-between p-1">
                        <div className="d-flex align-items-center justify-content-between">
                            <img src={TakCoinImg} className="mr-2" width="25" alt="" />
                            <h6 className="mb-0">{selectedTokenName}</h6>
                        </div>
                        <div className="flex1 d-flex align-items-center">
                            <div className="pink" style={{marginRight: '16px'}}>
                                <input type='number' className="" value={tokenAmount} onChange={handleTokenAmount}  />
                                &nbsp;{selectedTokenName}
                            </div>
                            <div className="mb-0 cursor-pointer" onClick={() => setTokenAmount(balance * 1 - 0.1)}>MAX</div>
                        </div>
                    </div>
                </div> 
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