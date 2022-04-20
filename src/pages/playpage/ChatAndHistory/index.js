import { Col, Row, Nav, Tab } from 'react-bootstrap';
import { BsFillChatDotsFill, BsClockHistory } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';

import Chat from './Chat';
import ContainerComponent from "../../../components/ContainerComponent";
import './index.scss';

const ChatAndHistory = (props) => {
    return (
        <ContainerComponent>
        <div className=" flex flex-col chat-and-history">
            <Tab.Container id="left-tabs-example" defaultActiveKey="chat">

                        <Nav variant="pills" className="flex-column">
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
                            <div className="setting">
                                <AiFillSetting></AiFillSetting>
                            </div>
                        </Nav>
                        
                    <Tab.Content>
                        <Tab.Pane eventKey="chat">
                            <Chat/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="history">
                        
                        </Tab.Pane>
                    </Tab.Content>

            </Tab.Container>
        </div>
        </ContainerComponent>
    );
}

export default ChatAndHistory;