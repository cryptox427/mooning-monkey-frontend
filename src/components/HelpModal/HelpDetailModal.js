import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import {connect} from 'react-redux'
import { AiOutlineCaretLeft } from 'react-icons/ai';
import {showHelpModal} from '../../actions/gameActions'

import './index.scss';

const searchData = [
    "I forgot my password.",
    "My deposit has not been credited.",
    "My withdrawal has not arrived.",
    "How do I deposit?",
    "How does the game work?",
    "How do I withdraw?"
];
const HelpDetailModal = (props) => {
    const { show, onHide, helpDetailData, showHelpModal } = props;
    useEffect(async () => {
    
    }, []);
    const clickBackBtn = () => {
        showHelpModal()
        onHide()
    }
    return (
        <Modal show={show} onHide={onHide}  className="monkey-modal help-detail-modal">
    
            <Modal.Header closeButton closeVariant='white'>
                <Modal.Title><span>Help</span></Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <div className="title">{helpDetailData.title}</div>
                <div className="description">{helpDetailData.description}</div>
                <div className="bottom-buttons">
                    <button className="cta-btn back-btn" onClick={()=>clickBackBtn()}><AiOutlineCaretLeft/>Back to support index</button>
                    <div className="still-help">
                        <span className="text">Still need help?</span>
                        <span className="moonign-link">@mooning-monkeys.com</span>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

const mapStateToProps  = (state) => (
    { 
        helpDetailData: state.betGameData.helpDetailData
    }
)
export default connect(mapStateToProps, {showHelpModal})(HelpDetailModal)