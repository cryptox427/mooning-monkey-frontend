import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { ethers, BigNumber } from 'ethers';
import { BSC_TOKENS, DEPOSIT_WALLET_ADDRESS } from "../../constants/tokens";
import { getTokenContract, getSigner, getBalance } from "../../utils/interact";
import TakCoinImg from '../../assets/images/tak-coin.svg';
import ArrowDownImg from '../../assets/images/arrow-down.svg';
import './index.scss';

const DepositModal = (props) => {
    const { show, onHide, walletAddress } = props;
    const tokenNames = Object.keys(BSC_TOKENS);
    const [selectedTokenName, setSelectedTokenName] = useState(tokenNames[0]);
    const [balance, setBalance] = useState(0);
    const [tokenAmount, setTokenAmount] = useState(0.01);
    const [showSelect, setShowSelect] = useState(false);
    const [txHash, setTxHash] = useState();
    const [showResult, setShowResult] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleToken = (tokenName) => {
        setSelectedTokenName(tokenName);
        setShowSelect(false);
    };

    const handleDeposit = async () => {
        setIsLoading(true);
        try {
            console.log(tokenAmount)
            const signer = getSigner();
            let tx;
            if (selectedTokenName === 'BNB') {
                tx = await signer.sendTransaction({to: DEPOSIT_WALLET_ADDRESS, value: ethers.utils.parseEther(tokenAmount.toString())});
            } else {
                const tokenContract = getTokenContract(selectedTokenName);
                tx = await tokenContract.transfer(DEPOSIT_WALLET_ADDRESS, ethers.utils.parseEther(tokenAmount));
            }

            const res = await tx.wait();
            if (res.transactionHash) {
                setIsSuccess(true);
                setTxHash(res.transactionHash);
                setIsLoading(false);
                setShowResult(true);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const handleTokenAmount = (e) => {
        const newValue = e.target.value > balance ? balance : e.target.value < 0 ? 0 : e.target.value;
        setTokenAmount(newValue)
    }
    
    useEffect(async () => {
        if (walletAddress) {
            try {
                const newBalance = await getBalance(walletAddress, selectedTokenName);
                setBalance(newBalance);
            } catch (error) {
                console.log(error);
            }
        }
    }, [selectedTokenName, walletAddress]);

    return (
        <Modal show={show} onHide={onHide} >
            <Modal.Header style={{backgroundColor: '#100F25', borderBottom: 'none'}} closeButton>
                <Modal.Title><span style={{color: '#F001F4'}}>DEPOSIT</span></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#100F25', color: 'white'}}>
                <h6 className="text-light">Select coin</h6>
                <div className="relative">
                    <div className="select-coin-box cursor-pointer p-2">
                        <div className="w-100 d-flex  align-items-center justify-content-start p-1" onClick={() => setShowSelect(!showSelect)}>
                            <div className="d-flex align-items-center">
                                <img src={TakCoinImg} className="mr-2" width="25" alt="" />
                                <h6 className="mb-0">{selectedTokenName}</h6>
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
                {
                    isLoading
                        ?   <a href="#" className="cta-btn justify-content-center mt-3" data-toggle="modal" data-target="#approve" >
                                Loading...
                            </a>
                        :   <a href="#" className="cta-btn justify-content-center mt-3" data-toggle="modal" data-target="#approve" onClick={handleDeposit}>
                                Deposit
                            </a>
                }
                {/* <div className="form-steps mt-4">
                    <div className="step">
                        1
                    </div>
                    <div className="step-line"></div>
                    <div className="step incomplete">
                        2
                    </div>
                </div> */}
                <div className="amount-balance mt-4 mb-1">
                    <h6 className="text-light">Recent Transactions</h6>
                    <a href="#" className="text-light" style={{textDecoration: "underline !important"}}>View History</a>
                </div>
                {
                    showResult &&
                        <div className="recent-transaction-history">
                            <div className="rth-row">
                                <div>Deposit</div>
                                <div className="success-box">
                                <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.12375 13.2457C8.93275 13.2457 8.73975 13.1727 8.59375 13.0258L6.21975 10.6528C5.92675 10.3598 5.92675 9.88575 6.21975 9.59275C6.51275 9.29975 6.98675 9.29975 7.27975 9.59275L9.12375 11.4348L13.3397 7.21975C13.6328 6.92675 14.1067 6.92675 14.3997 7.21975C14.6927 7.51275 14.6927 7.98675 14.3997 8.27975L9.65375 13.0258C9.50775 13.1727 9.31575 13.2457 9.12375 13.2457Z" fill="#6DE713"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10 1.5C5.313 1.5 1.5 5.313 1.5 10C1.5 14.687 5.313 18.5 10 18.5C14.687 18.5 18.5 14.687 18.5 10C18.5 5.313 14.687 1.5 10 1.5ZM10 20C4.486 20 0 15.514 0 10C0 4.486 4.486 0 10 0C15.514 0 20 4.486 20 10C20 15.514 15.514 20 10 20Z" fill="#6DE713"/>
                                    </svg>
                                <strong className="text-green">Success</strong>
                                </div>
                            </div>
                            <div className="rth-row">
                                <div>Amount(BNB)</div>
                                <div>{tokenAmount}</div>
                            </div>
                            <div className="rth-row">
                                <div>Free(BNB)</div>
                                <div>0</div>
                            </div>
                            <div className="rth-row">
                                <div>Hash</div>
                                <div>{`${txHash.substring(0, 9)}...${txHash.slice(-5)}`}</div>
                            </div>
                        </div>
                }
            </Modal.Body>
        </Modal>
    );
}

export default DepositModal;