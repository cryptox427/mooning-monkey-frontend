import { IoMdSend } from 'react-icons/io';
import { FiPaperclip } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';

import emoji from '../../../../assets/images/playpage/emoji.png';
import country1 from '../../../../assets/images/playpage/country1.png';
import country2 from '../../../../assets/images/playpage/country2.png';
import country3 from '../../../../assets/images/playpage/country3.png';
import country4 from '../../../../assets/images/playpage/country4.png';
import './index.scss';
import TalkCell from './TalkCell';


const Chat = (props) => {
    return (
        <div className="chat">
            
            <div className="chat-talks">
                <div className="chat-talks-content">
                    <div className="talks">
                        <TalkCell t_time="12:00" t_name="madam" t_content="hello"/>
                        <TalkCell t_time="12:00" t_name="junior" t_content="hello"/>
                        <TalkCell t_time="12:00" t_name="madam" t_content="how are you"/>
                        <TalkCell t_time="12:00" t_name="ker" t_content="hello"/>
                        <TalkCell t_time="12:00" t_name="erstews_sdfe" t_content="hello"/>
                        <TalkCell t_time="12:00" t_name="evbdfgrw" t_content="hello"/>
                        <TalkCell t_time="12:00" t_name="madam" t_content="hello"/>
                        <TalkCell t_time="12:00" t_name="junior" t_content="hello"/>
                        <TalkCell t_time="12:00" t_name="madam" t_content="how are you"/>
                        <TalkCell t_time="12:00" t_name="ker" t_content="hello"/>
                        <TalkCell t_time="12:00" t_name="erstews_sdfe" t_content="hello"/>
                        <TalkCell t_time="12:00" t_name="evbdfgrw" t_content="hello"/>
                        <TalkCell t_time="12:00" t_name="madam" t_content="hello"/>
                        <TalkCell t_time="12:00" t_name="junior" t_content="hello"/>
                        <TalkCell t_time="12:00" t_name="madam" t_content="how are you"/>
                        <TalkCell t_time="12:00" t_name="ker" t_content="hello"/>
                        <TalkCell t_time="12:00" t_name="erstews_sdfe" t_content="hello"/>
                        <TalkCell t_time="12:00" t_name="evbdfgrw" t_content="hello"/>
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
                    <input className="message-write-content" placeholder="Type something here..."></input>
                    <div className="send-button">
                        <IoMdSend/>
                    </div>
                    <FaPlus className="plus-button"/>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Chat;