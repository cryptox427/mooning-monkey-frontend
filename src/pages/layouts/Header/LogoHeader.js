import React from 'react';
import { withRouter } from "react-router-dom";
import logo from '../../../assets/images/playpage/logo.png';

const LogoHeader = (props) => {
    const {history} = props;
    const goToHome = () => {
        history.push("/");
    }
    return (
        <>
            <div className='logo-header' onClick={()=>goToHome()}>
                <img className="logo col" src={logo} alt="Italian Trulli"></img>
            </div>
        </>
    )
}

export default withRouter(LogoHeader);