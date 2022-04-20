import React from 'react';
import './Header.scss';
import logo from '../../assets/images/playpage/logo.png';
import darkLogo from '../../assets/images/playpage/dark-logo.png';
import bnb from '../../assets/images/playpage/bnb.png';
import cryptoImg from '../../assets/images/playpage/crypto-net.png';

import { BsChevronDoubleDown } from 'react-icons/bs';
import { FaAngleDoubleLeft } from 'react-icons/fa';

import { Row, Col } from 'react-bootstrap';

const Header = (props) => {
    const { children } = props;
    return (
        <div className='header' >
            <img className="logo col" src={logo} alt="Italian Trulli"></img>
            <div className="buttons normal-group">

                <button className="purple border-0">
                    BUY A  MONKY & EARN
                </button>
                <button className="purple border-0 col">
                    
                    JOIN THE BANKROLL & EARN
                </button>
                <button className="image-back border-0 col">
                
                    <div className='mask'>LEARDERBOARD</div>
                </button>
                <button className="image-back border-0 col">
                <div className='mask'>STATS</div>
                    
                </button>
                <button className="image-back border-0 col">
                <div className='mask'>HELP</div>
                    
                </button>
            </div>
            <div className="buttons money-group">

                <button className="purple buy-now border-0 col">
                    <img className="" src={darkLogo} alt="Italian Trulli"></img>
                    BUY $TAK NOW
                </button>
                <button className="money-type border-0 col">
                    <div className="type">
                        <img className="" src={bnb} alt="Italian Trulli"></img>
                        BNB
                    </div>
                    <div className="price">
                        1.29
                        <BsChevronDoubleDown className="drop-icon"/>
                    </div>
                </button>
                <button className="image-back border-0 col">
                
                    <div className='mask'>DEPOSIT</div>
                </button>
                <button className="image-back border-0 col">
                    <div className='mask'>WITHDRAW</div>
                    
                </button>
                <button className="select-net border-0 col">
                    <BsChevronDoubleDown className="drop-icon"/>
                    <img className="net-icon" src={cryptoImg} alt="Italian Trulli"></img>
                </button>
                <button className="purple border-0 col">
                    0X488B...66JK6J
                   
                </button>
            </div>
            {children}
        </div>
    )
}

export default Header;