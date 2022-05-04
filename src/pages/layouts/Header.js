import React, { useState } from 'react';
import BankrollModal from '../../components/BanrollModal';
import LeaderboardModal from '../../components/LeaderboardModal';
import DepositModal from '../../components/DepositModal';
import StatsModal from '../../components/StatsModal';
import WithdrawModal from '../../components/WIthdrawModal';
import InfoBox from '../../components/InfoBox';
import './Header.scss';
import logo from '../../assets/images/playpage/logo.png';
import darkLogo from '../../assets/images/playpage/dark-logo.png';
import bnb from '../../assets/images/playpage/bnb.png';
import cryptoImg from '../../assets/images/playpage/crypto-net.png';
import USDTImg from '../../assets/images/USDT.svg';
import CakeImg from '../../assets/images/cake.svg';
import BUSDImg from '../../assets/images/BUSD.svg';
import CashBackImg from '../../assets/images/cashback.svg';
import ComicBookImg from '../../assets/images/comic-book.svg';
import DocsImg from '../../assets/images/docs.svg';
import MonkeyImg from '../../assets/images/monkey.svg';
import PlayImg from '../../assets/images/play.svg';
import ReferralImg from '../../assets/images/referral.svg';
import TakImg from '../../assets/images/tak.svg';
import TransactionImg from '../../assets/images/transaction.svg';
import WinningImg from '../../assets/images/winning-bonus.svg';
import AvatarImg from '../../assets/images/user-img.png';
import LogoHeader from './LogoHeader.js';

import { BsChevronDoubleDown } from 'react-icons/bs';
import { FaAngleDoubleDown } from 'react-icons/fa';

import { Row, Col } from 'react-bootstrap';
import SelectNetworkModal from '../../components/SelectNetworkModal';

const Header = (props) => {
    const { children } = props;
    const [bankrollStatus, setBankrollStatus] = useState(false);
    const [showLeaderBoard, setShowLeaderBoard] = useState(false);
    const [showStatsModal, setShowStatsModal] = useState(false);
    const [showDepositModal, setShowDepositModal] = useState(false);
    const [showWithdrawModal, setShowWithdrawModal] = useState(false);
    const [showSelectNetworkModal, setShowSelectNetworkModal] = useState(false);
    const [moneyType, setMoneyType] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    

    return (
        <>
            <LogoHeader/>
            <div className='header' >
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
                        <InfoBox className='relative' outSideClickFunc={setMoneyType}>
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
                        </InfoBox>
                        <button className="purple border-0 deposit" onClick={() => setShowDepositModal(true)}>
                        
                            DEPOSIT
                        </button>
                        <button className="image-back border-0 withdraw" onClick={() => setShowWithdrawModal(true)}>
                            <div className='mask'><span>WITHDRAW</span></div>
                            
                        </button>
                        <button className="select-net border-0" onClick={() => setShowSelectNetworkModal(true)}>
                            <FaAngleDoubleDown className="drop-icon"/>
                            <img className="net-icon" src={cryptoImg} alt="Italian Trulli"></img>
                        </button>
                        <InfoBox className='relative' outSideClickFunc={setShowProfile}>
                            <button className="purple border-0 wallet-address" onClick={() => setShowProfile(!showProfile)}>
                                0X488B...66JK6J
                            </button>
                            <div className={`absolute dropdown-profile ${showProfile ? 'show' : 'hidden'}`} aria-labelledby="dropdownMenuLink"  >
                                <div className="drop-profile-section">
                                <div className="profile-user">
                                    <img src={AvatarImg} alt="" width="42" />
                                </div>
                                <div className="profile-details text-left">
                                    <div className="pink font-weight-bold">VIP LEVEL 1</div>
                                    <div className="text-light"><span>VIP 0</span> <span>Novice</span></div>
                                </div>
                                </div>
        
                                <hr className="my-4" style={{backgroundColor: "#515189"}} />
                            
                                <a className="dropdown-item" href="#">
                                <img src={PlayImg} alt="" width="20" className="mr-2" />
                                Action</a>
                                <a className="dropdown-item" href="#">
                                <img src={TransactionImg} alt="" width="20" className="mr-2" />
                                Transaction History</a>
                                <a className="dropdown-item" href="#">
                                <img src={TakImg} alt="" width="20" className="mr-2" />
                                TAK Staking</a>
                                <a className="dropdown-item" href="#">
                                <img src={MonkeyImg} alt="" width="20" className="mr-2" />
                                Monkey Earnings</a>
                                <a className="dropdown-item" href="#">
                                <img src={ComicBookImg} alt="" width="20" className="mr-2" />
                                Comic Book Earnings</a>
                                <a className="dropdown-item" href="#">
                                <img src={MonkeyImg} alt="" width="20" className="mr-2" />
                                Mooning Monkey Earnings</a>
                                <a className="dropdown-item" href="#">
                                <img src={CashBackImg} alt="" width="20" className="mr-2" />
                                Cashback</a>
                                <a className="dropdown-item" href="#">
                                <img src={WinningImg} alt="" width="20" className="mr-2" />
                                Winning Bonus</a>
                                <a className="dropdown-item" href="#">
                                <img src={ReferralImg} alt="" width="20" className="mr-2" />
                                Referral Program</a>
                                <a className="dropdown-item" href="#">
                                <img src={DocsImg} alt="" width="20" className="mr-2" />
                                Docs</a>
                                
                            </div>
                        </InfoBox>
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
            <SelectNetworkModal show={showSelectNetworkModal} onHide={() => setShowSelectNetworkModal(false)} />
        </>
    )
}

export default Header;