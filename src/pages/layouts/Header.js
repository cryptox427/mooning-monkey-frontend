import React, { useState } from 'react';
import BankrollModal from '../../components/BanrollModal';
import LeaderboardModal from '../../components/LeaderboardModal';
import DepositModal from '../../components/DepositModal';
import StatsModal from '../../components/StatsModal';
import WithdrawModal from '../../components/WIthdrawModal';
import './Header.scss';
import logo from '../../assets/images/playpage/logo.png';
import darkLogo from '../../assets/images/playpage/dark-logo.png';
import bnb from '../../assets/images/playpage/bnb.png';
import cryptoImg from '../../assets/images/playpage/crypto-net.png';
import USDTImg from '../../assets/images/USDT.svg';
import CakeImg from '../../assets/images/cake.svg';
import BUSDImg from '../../assets/images/BUSD.svg';

import { BsChevronDoubleDown } from 'react-icons/bs';
import { FaAngleDoubleDown } from 'react-icons/fa';

import { Row, Col } from 'react-bootstrap';

const Header = (props) => {
    const { children } = props;
    const [bankrollStatus, setBankrollStatus] = useState(false);
    const [showLeaderBoard, setShowLeaderBoard] = useState(false);
    const [showStatsModal, setShowStatsModal] = useState(false);
    const [showDepositModal, setShowDepositModal] = useState(false);
    const [showWithdrawModal, setShowWithdrawModal] = useState(false);
    const [moneyType, setMoneyType] = useState(false);
    return (
        <>
            <div className='header' >
                <img className="logo col" src={logo} alt="Italian Trulli"></img>
                <div className="button-group">
                    <div className="buttons normal-group">

                        <button className="purple border-0 buy-monkey">
                            BUY A  MONKY & EARN
                        </button>
                        <button className="purple border-0 join-bankroll"  onClick={() => setBankrollStatus(true)}>
                            JOIN THE BANKROLL & EARN
                        </button>
                        <button className="image-back border-0 leaderboard" onClick={() => setShowLeaderBoard(true)}>
                        
                            <div className='mask'>
                                <span>LEARDERBOARD</span>
                            </div>
                        </button>
                        <button className="image-back border-0 stats" onClick={() => setShowStatsModal(true)}>
                        <div className='mask'><span>STATS</span></div>
                            
                        </button>
                        <button className="image-back border-0 help">
                        <div className='mask'><span>HELP</span></div>
                            
                        </button>
                    </div>
                    <div className="buttons money-group wnd-show">

                        <button className="purple buy-now border-0">
                            <img className="" src={darkLogo} alt="Italian Trulli"></img>
                            BUY $TAK NOW
                        </button>
                        <div className='relative'>
                            <button className="money-type border-0" onClick={() => setMoneyType(!moneyType)}>
                                <div className="type">
                                    <img className="" src={bnb} alt="Italian Trulli"></img>
                                    BNB
                                </div>
                                <div className="price">
                                    1.29
                                    <FaAngleDoubleDown className="drop-icon"/>
                                </div>
                            </button>
                            <div className={`absolute drop-profile-section ${!moneyType ? 'hidden' : 'show'}`}>
                                <div className="c-row " style={{backgroundColor: "#3c3c9577"}}>
                                    <div className="c-img">
                                        <img src={USDTImg} alt="" width="22" />
                                    </div>
                                    <div className="c-text">
                                        USDT
                                    </div>
                                    </div>
                                    <div className="c-row">
                                    <div className="c-img">
                                        <img src={CakeImg} alt="" width="22" />
                                    </div>
                                    <div className="c-text">
                                        Cake
                                    </div>
                                    </div>
                                    <div className="c-row" style={{backgroundColor: "#3c3c9577"}}>
                                    <div className="c-img">
                                        <img src={BUSDImg} alt="" width="22" />
                                    </div>
                                    <div className="c-text">
                                        BUSD
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="purple border-0 deposit" onClick={() => setShowDepositModal(true)}>
                        
                            DEPOSIT
                        </button>
                        <button className="image-back border-0 withdraw" onClick={() => setShowWithdrawModal(true)}>
                            <div className='mask'><span>WITHDRAW</span></div>
                            
                        </button>
                        <button className="select-net border-0">
                            <FaAngleDoubleDown className="drop-icon"/>
                            <img className="net-icon" src={cryptoImg} alt="Italian Trulli"></img>
                        </button>
                        <button className="purple border-0 wallet-address">
                            0X488B...66JK6J
                        
                        </button>
                    </div>
                    <div className="buttons money-group ph-show">
                        <button className="money-type border-0">
                            <div className="type">
                                <img className="" src={bnb} alt="Italian Trulli"></img>
                                BNB
                            </div>
                            <div className="price">
                                1.29
                                <FaAngleDoubleDown className="drop-icon"/>
                            </div>
                        </button>
                        <button className="dark-blue border-0 plus" onClick={() => {}}>
                            +
                        </button>
                        <button className="dark-blue border-0 minus" onClick={() => {}}>
                            -
                        </button>
                        
                        <button className="select-net border-0">
                            <FaAngleDoubleDown className="drop-icon"/>
                            <img className="net-icon" src={cryptoImg} alt="Italian Trulli"></img>
                        </button>
                        
                    </div>
                
                </div>
                {children}
            </div>
            <BankrollModal show={bankrollStatus} onHide={() => setBankrollStatus(false)} />
            <LeaderboardModal show={showLeaderBoard} onHide={() => setShowLeaderBoard(false)} />
            <StatsModal show={showStatsModal} onHide={() => setShowStatsModal(false)} />
            <DepositModal show={showDepositModal} onHide={() => setShowDepositModal(false)} />
            <WithdrawModal show={showWithdrawModal} onHide={() => setShowWithdrawModal(false)} />
        </>
    )
}

export default Header;