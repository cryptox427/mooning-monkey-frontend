import { Col, Row, Nav, Tab } from 'react-bootstrap';
import { BsFillChatDotsFill, BsClockHistory } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
import React, { useState } from "react";

import Chat from './Chat';
import History from './History';

import ScamedPage from './ScamedPage';
import ContainerComponent from "../../../components/ContainerComponent";
import './index.scss';

const ChatAndHistory = (props) => {
    const [scamed, setScamed] = useState(true);
    const closeScamedPage = () => {
        setScamed(false);
    }
    return (
        <ContainerComponent className="chat-container">
            <div className="chat-and-history">
                <Tab.Container id="left-tabs-example" defaultActiveKey="chat">
                    <div className="left-btns">
                        <Nav variant="pills" className="left-nav">
                            <Nav.Item>
                            <Nav.Link eventKey="chat" className="left-tab-button">
                                <span><div><BsFillChatDotsFill/>CHAT</div></span>
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="history">
                                <span><div><BsClockHistory/>History</div></span>
                            </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        {/* <div className="setting">
                            <AiFillSetting></AiFillSetting>
                        </div> */}
                    </div>        
                    <Tab.Content>
                        <Tab.Pane eventKey="chat">
                            {
                                !scamed &&
                                <Chat/>
                            }
                            {
                                scamed &&
                                <ScamedPage closePage={closeScamedPage}/>
                            }
                        </Tab.Pane>
                        <Tab.Pane eventKey="history">
                            <History/>
                        </Tab.Pane>
                    </Tab.Content>

                </Tab.Container>
            </div>
        </ContainerComponent>
    );
}

export default ChatAndHistory;