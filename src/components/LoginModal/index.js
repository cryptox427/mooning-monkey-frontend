import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import validator from 'validator'
import './index.scss';

import {connect} from 'react-redux'

import {setPublicKey, getMyRecentWins, login, register} from '../../actions/userActions'
import {getMaxCredits} from '../../actions/betActions'
import {setPopUp} from '../../actions/gameActions'

import BottomLineInputComponent from "../../components/BottomLineInputComponent";


const LoginModal = (props) => {
    const { show, onHide, publicKey, login, registered, register } = props;
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const onHideAction = () => {
        onHide()
    }
    const clickLoginBtn = async () => {
        if (userData.password === "") {
            setPopUp('Input all field correctly!')
            return;
        } 
        const data = {
            userName: null,
            password: userData.password,
            publicKey: publicKey,
            refCode: null
        }
        localStorage.setItem('publicKey', publicKey);
        login(data);
    }
    useEffect(() => {
        setUserData({
            userName: "",
            password: "",
            email: "",
            confirmPassword: ""
        })
    }, [show])
    const clickRegisterBtn = async () => {
        if (userData.password === "" || userData.confirmPassword === "" || userData.userName === "" ||
            userData.confirmPassword !== userData.password) {
            setPopUp('Input all field correctly!')
            return;
        } 
        const data = {
            userName: userData.userName,
            password: userData.password,
            email: userData.email,
            publicKey: publicKey,
            refCode: null
        }
        localStorage.setItem('publicKey', publicKey);
        register(data);
    }
    return (
        <>
            <Modal show={show} onHide={onHideAction} className="monkey-modal login-modal">
                <Modal.Header closeButton closeVariant='white'>
                    <Modal.Title><span>{registered ?"Login":"Register"}</span></Modal.Title>
                    
                </Modal.Header>
                <Modal.Body>
                    {
                        !registered &&
                        <BottomLineInputComponent label="username" className="fill-input moon-bet-input purple-bg-input-child" type="text" prefix=""
                            valueChangeHandler={(value)=>{setUserData({
                                ...userData,
                                userName: value
                            })}} defaultValue={userData.userName} />
                    }
                    <BottomLineInputComponent label="password" className="fill-input moon-bet-input purple-bg-input-child" type="password" prefix=""
                        valueChangeHandler={(value)=>{setUserData({
                            ...userData,
                            password: value
                        })}} defaultValue={userData.password} />
                    {
                        !registered &&
                        <BottomLineInputComponent label="confirm assword" className="fill-input moon-bet-input purple-bg-input-child" type="password" prefix=""
                            valueChangeHandler={(value)=>{setUserData({
                                ...userData,
                                confirmPassword: value
                            })}} defaultValue={userData.confirmPassword} />
                    }
                    {
                        registered ?
                            <button className="purple-gradient-btn" onClick={clickLoginBtn}>Login</button>
                            :
                            <button className="purple-gradient-btn" onClick={clickRegisterBtn}>Register</button>
                    }
                    
                    
                </Modal.Body>
            </Modal>
        </>
    );
}

const mapStateToProps  = (state) => (
    {
        registered: state.userData.registered,
        publicKey: state.userData.publicKey
    }
)
export default connect(mapStateToProps, {setPublicKey, getMaxCredits, getMyRecentWins, login, register})(LoginModal)