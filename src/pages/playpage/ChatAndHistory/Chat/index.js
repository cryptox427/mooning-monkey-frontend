import { IoMdSend } from 'react-icons/io';
import { FiPaperclip } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';
import { useState } from 'react';

import {serverUrl} from '../../../../utils/constant'
import {request} from '../../../../utils/request';
import emoji from '../../../../assets/images/playpage/emoji.png';
import country1 from '../../../../assets/images/playpage/country1.png';
import country2 from '../../../../assets/images/playpage/country2.png';
import country3 from '../../../../assets/images/playpage/country3.png';
import country4 from '../../../../assets/images/playpage/country4.png';
import './index.scss';
import TalkCell from './TalkCell';

let messageCounter = null;
const Chat = (props) => {
    const [messages, setMessages] = useState([]);
    const [meMessage, setMessage] = useState("");
    
    const getMesssage = async () => {
        const res = await request('get', `${serverUrl}chat/getMessagesOnetime.php`);
        setMessages(res.result.split('<///***br***///>'));
        console.log("~~~~~~~~~~chatMessage", res.result.split('<///***br***///>'))
    }
    const continueGetMessage = () => {
        if(messageCounter) {
            window.clearInterval(messageCounter);
        }
        
        messageCounter = window.setInterval(getMesssage, 2000);
    }
    continueGetMessage();
    const sendMessage = () => {
        request('get', `${serverUrl}chat/sendMessage.php?message=${meMessage}`);
        console.log("~~~~~~~~~~sendMessage")
    }
    return (
        <div className="chat">
            
            <div className="chat-talks">
                <div className="chat-talks-content">
                    <div className="talks">
                    {
                        messages.length > 0 &&
                        messages.map((message, index) => {
                                let messageParts = message.split(' | ');

                                let time = messageParts[0];
                                let username = messageParts[1];
                                let messageText = messageParts[2];
                                return (
                                    <TalkCell t_time={time} t_name={username} t_content={messageText}/>
                                )
                            }
                        )
                    }
                    </div>
                    <div className="mask">

                    </div>
                </div>
            </div>
            <div className="current-language">
                Current Chat Language: English
            </div>
            <div className="countries">
                
                    Countries
                <img src={country1}></img>
                <img src={country2}></img>
                <img src={country3}></img>
                <img src={country4}></img>
            </div>
            <div className="users">
                
                Users
                <div className="user">BA<div className="state"></div></div>
                <div className="user">BA<div className="state"></div></div>
                <div className="user">BA<div className="state"></div></div>
                <div className="user">BA<div className="state"></div></div>
                <div className="user">BA<div className="state"></div></div>
            </div>
            <div className="send-message">
                <div className="full-relative">
                    <img src={emoji} className="emoji"></img>
                    <FiPaperclip className="paper-clip"/>
                    <input onChange={(e) => setMessage(e.target.value)} value={meMessage} className="message-write-content" placeholder="Type something here..."></input>
                    <div className="send-button" onClick={()=>sendMessage()}>
                        <IoMdSend/>
                    </div>
                    <FaPlus className="plus-button"/>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Chat;