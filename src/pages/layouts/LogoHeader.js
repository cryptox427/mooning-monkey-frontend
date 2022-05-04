import React from 'react';
import './Header.scss';
import logo from '../../assets/images/playpage/logo.png';

const LogoHeader = (props) => {

    return (
        <>
            <div className='logo-header' >
                <img className="logo col" src={logo} alt="Italian Trulli"></img>
            </div>
        </>
    )
}

export default LogoHeader;