import { useState, useEffect } from "react";
import {connect} from 'react-redux'
import { Modal } from "react-bootstrap";
import { BSC_TOKENS, DEPOSIT_WALLET_ADDRESS } from "../../constants/tokens";
import { withdrawTokenIDs } from "../../utils/constant";

import { AiOutlineClose } from "react-icons/ai";
import TakCoinImg from '../../assets/images/tak-coin.svg';
import ArrowDownImg from '../../assets/images/arrow-down.svg';
import './monkeymodal.scss';
import './index.scss';
import {request, postRequest} from '../../utils/request';
import {serverUrl} from '../../utils/constant'
import {withdraw} from '../../actions/withdrawActions'
import {changeCurrentPage} from '../../actions/userActions'

import { withRouter } from "react-router-dom";
import { getMaxCredits } from "../../actions/betActions";

const WithdrawModal = (props) => {
    const { show, onHide, maxCredits, history, changeCurrentPage } = props;
    const tokenNames = Object.keys(withdrawTokenIDs);
    const [selectedTokenName, setSelectedTokenName] = useState(tokenNames[0]);
    const [balance, setBalance] = useState(0);
    const [showSelect, setShowSelect] = useState(false);
    const [tokenAmount, setTokenAmount] = useState({
        vale: 0,
        error: null    
    });

    const withdrawApiUrl = serverUrl + 'monkey-moon/withdraw.php';

    const handleToken = (tokenName) => {
        setSelectedTokenName(tokenName);
        setShowSelect(false);
    };

    const onWithdraw = async () => {
        const result = await withdraw(withdrawTokenIDs[selectedTokenName], tokenAmount.value);
        getMaxCredits();
    }
    const handleTokenAmount = (e) => {
        validateAmountSet(e.target.value)
    }
    const validateAmountSet = (value) => {
        console.log(value)
        let newValue = Math.max(value, 0);
        let err = null;
        if(newValue > maxCredits) {
            err = "Insufficient amount"
        }
        setTokenAmount({
            value: newValue,
            error: err
        })
    }  
    useEffect(() => {
        validateAmountSet(tokenAmount.value)
    }, [maxCredits]);
    useEffect(() => {
        setTokenAmount({
            value: 0,
            error: null
        })
    }, [show]);
    
    const gotoHistoryPage = () => {
        history.push("/transaction-history");
        changeCurrentPage("transaction-history");
        onHide();
    }
    return (
        <Modal show={show} onHide={onHide} className="monkey-modal withdraw-modal">
            <Modal.Header closeButton closeVariant='white'>
                <Modal.Title><span>WITHDRAW</span></Modal.Title>

            </Modal.Header>
            <Modal.Body>
            <div className="dropdown-container">
                    <div className="title">
                        <h6 className="poppin-light-txt">Select coin</h6>
                    </div>
                <div className="relative">
                    <div className="dropdown-box p-2">
                        <div className="w-100 d-flex  align-items-center justify-content-start p-1" onClick={() => setShowSelect(!showSelect)}>
                            <div className="d-flex align-items-center">
                                <img src={TakCoinImg} className="mr-2" width="25" alt="" />
                                <h6 className="mb-0 dropdwon-item-text">{selectedTokenName}</h6>
                            </div>
                        </div>
                        <img src={ArrowDownImg} alt="" style={{width: "15px"}}/>
                    </div>
                    <div className={`absolute w-100 dropdown-content ${!showSelect ? 'hidden' : 'show'}`}>
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
                </div>
                
                <div className={`dropdown-container ${tokenAmount.error ? 'err-field' : ''}`}>
                    <div className="title">
                        <h6 className="poppin-light-txt red-under-error">Amount</h6>
                        <div className="poppin-light-txt hint red-under-error">WIthdrawable: <span className="poppin-light-txt">{maxCredits} {selectedTokenName} </span></div>    
                    </div>
                    
                    <div className="dropdown-box p-2 red-border-under-error">
                        
                        <div className="w-100 d-flex align-items-center justify-content-between p-1">
                            <input type='number' className="token-amount poppin-bold-txt red-outline-under-error" value={tokenAmount.value} onChange={handleTokenAmount}  />
                            <div className="d-flex align-items-center justify-content-between">
                                <img src={TakCoinImg} className="mr-2" width="25" alt="" />
                                <h6 className="mb-0 amount-coin poppin-light-txt">{selectedTokenName}</h6>
                            </div>
                            <div className="flex1 d-flex align-items-center">          
                                    &nbsp;<span className="poppin-bold-txt">{selectedTokenName}</span>
                                <div className="mb-0 max-btn cursor-pointer poppin-light-txt" onClick={() => validateAmountSet(maxCredits)}>MAX</div>
                            </div>
                            
                            <div className="display-under-error red-under-error error-alert">
                                {tokenAmount.error}   
                            </div>
                        </div>

                        
                    </div>
                </div>
                 
                <button disabled={tokenAmount.error ? true: false} className="cta-btn withdraw-btn justify-content-center poppin-light-txt" id="withdraw-btn" onClick={()=>onWithdraw()}>
                    Withdraw
                </button>
                <div className="mt-4 mb-1 justify-content-center">
                    <div onClick={()=>gotoHistoryPage()} className="text-light view-history-btn poppin-light-txt view-history" style={{textDecoration: "underline !important"}}>View History</div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

const mapStateToProps  = (state) => (
    {
        maxCredits: state.betData.maxCredits
    }
)
export default withRouter(connect(mapStateToProps, {changeCurrentPage})(WithdrawModal))