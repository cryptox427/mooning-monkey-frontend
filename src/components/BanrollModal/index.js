import { useState } from "react";
import { Modal } from "react-bootstrap";
import TakCoinImg from '../../assets/images/tak-coin.svg';
import './index.scss';

const BankrollModal = (props) => {
    const { show, onHide } = props;
    const [status, setStatus] = useState(0);
    return (
        <Modal className="bank-roll-modal" show={show} onHide={onHide} >
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
                <div className="chat-history-tabContent">
                    {
                        status === 0 &&
                        <div className="tab-pane fade show active mt-4" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h5 className="popup_title mb-3">Username</h5>
                            <ul>
                                <li>
                                    <div className="share_detail">
                                    <span>Your share:</span>
                                    <span>$0.0001</span>
                                </div>
                                </li>
                                <li>
                                    <div className="share_detail">
                                    <span>Your investing profit:</span>
                                    <span>$0.0473762</span>
                                </div>
                                </li>
                                <li>
                                    <div className="share_detail">
                                    <span>Mooning Monkeys bankroll:</span>
                                    <span>$1,844.89374</span>
                                </div>
                                </li>
                                <li>
                                    <div className="share_detail">
                                    <span>Investors’ total profit:</span>
                                    <span>$4,576.846343</span>
                                </div>
                                </li>
                                <li>
                                    <div className="share_detail">
                                    <span>Commission rate:</span>
                                    <span>90.6%</span>
                                </div>
                                </li>
                            </ul>
            
                            <p>If you want to  learn more about the bankroll, click <a href="#" className="pink"> here. </a></p>
                        </div>
                    }
                    {
                        status === 1 &&
                            <div className="tab-pane mt-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <p>Up to 2 % of your investment is deducted as a non-refundable dilution fee. This fee is deducted from your bankroll investment</p>
                
                                <p className="pink">Only invest or divest if you fully understand the consequence.</p>
                
                                <p className="pink mb-1"><strong>Note:</strong></p>
                                <p className="mb-0"> <span>Positive value: </span> Money added to the bankroll.</p>
                                <p><span>Negative values:</span> Money removed from the bankroll.</p>
                                
                                <div className="change-bankroll-section">
                                <h5>Change</h5>
                
                                <div className="change-box">
                                <div className="change-box-left">
                                    <div className="c-box-title-img">
                                    <img src={TakCoinImg} alt="" width="35" />
                                    <h5 className="mb-0 pink">TAK</h5>
                                    </div>
                
                                    <div className="change-value">
                                    <h5 className="mb-0 pink">+0.15 TAK</h5>
                                    </div>
                
                                </div>
                                    
                                    
                                    <div className="right-bet-box">
                                    <div>Max</div>
                                    <div>Min</div>
                                    </div>
                                </div>
                
                                <div className="change-box-bottom-btn mt-3">
                                    <a href="#" className="cta-btn">
                                    <svg className="mr-2" width="28" height="28" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.4771 2V6.09562" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M32.716 4.74316L30.6682 8.29003" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M40.2127 12.2388L36.6658 14.2866" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M42.9552 22.478H38.8596" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M40.2127 32.7172L36.6658 30.6694" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M32.716 40.2124L30.6682 36.6655" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M22.4771 42.956V38.8604" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.2383 40.2124L14.2861 36.6655" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4.74292 32.7172L8.28979 30.6694" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M1.99902 22.478H6.09464" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4.74292 12.2388L8.28979 14.2866" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.2383 4.74316L14.2861 8.29003" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        
                                    Waiting for the game to end
                                    </a>
                                    <a href="#" className="cta-btn">
                                    <svg className="mr-2" width="28" height="28" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.4771 2V6.09562" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M32.716 4.74316L30.6682 8.29003" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M40.2127 12.2388L36.6658 14.2866" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M42.9552 22.478H38.8596" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M40.2127 32.7172L36.6658 30.6694" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M32.716 40.2124L30.6682 36.6655" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M22.4771 42.956V38.8604" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.2383 40.2124L14.2861 36.6655" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4.74292 32.7172L8.28979 30.6694" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M1.99902 22.478H6.09464" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4.74292 12.2388L8.28979 14.2866" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.2383 4.74316L14.2861 8.29003" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        
                                    Waiting for the game to end 
                                    </a>
                                </div>
                
                
                                <ul className="mt-4 bullet-2">
                                    <li>
                                    <div className="share_detail">
                                        <span>Your current stake:</span>
                                        <span>0%</span>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="share_detail">
                                        <span>Estimated bankroll change:</span>
                                        <span>x amount</span>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="share_detail">
                                        <span>Estimated fee:</span>
                                        <span>x amount</span>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="share_detail">
                                        <span>Estimated  stake after investing:</span>
                                        <span>0.001%</span>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="share_detail">
                                        <span>Estimated  bankroll after investing:</span>
                                        <span>x amount</span>
                                    </div>
                                    </li>
                                
                                </ul>
                
                
                                <p>If you want to  learn more about the bankroll, click <a href="#" className="pink"> here. </a></p>
                                </div>
                            </div>
                    }
                    {
                        status === 2 &&
                        <div className="tab-pane mt-4" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="change-box mb-3">
                            
                                <div className="c-box-title-img">
                                Amount
                                </div>
                                
                                
                                <div className="right-bet-box">
                                Time
                                </div>
                            </div>
                            <div className="change-box filled">
                            
                                <div className="c-box-title-img">
                                <img src={TakCoinImg} alt="" width="30" />
                                <span>+0.001</span>
                                </div>
                                
                                
                                <div className="right-bet-box">
                                <span>2021-10-01 at 14:37</span>
                                </div>
                            </div>
                            <div className="change-box odd">
                            
                                <div className="c-box-title-img">
                                <img src={TakCoinImg} alt="" width="30" />
                                <span>+0.001</span>
                                </div>
                                
                                
                                <div className="right-bet-box">
                                <span>2021-10-01 at 14:37</span>
                                </div>
                            </div>
                            <div className="change-box filled">
                            
                                <div className="c-box-title-img">
                                <img src={TakCoinImg} alt="" width="30" />
                                <span>+0.001</span>
                                </div>
                                
                                
                                <div className="right-bet-box">
                                <span>2021-06-24 at 16:45</span>
                                </div>
                            </div>
                            
            
                            <p className="mt-4">
                                <strong className="pink pr-1">Note: </strong>
                                Positive values: Money added to the bankroll. Negative values: Money removed from the bankroll.</p>
                            
                        </div>
                    }
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default BankrollModal;