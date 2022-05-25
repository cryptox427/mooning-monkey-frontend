import { IoMdSend } from 'react-icons/io';
import { FiPaperclip } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';

import { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import {serverUrl} from '../../../../utils/constant'
import {request} from '../../../../utils/request';
import emoji from '../../../../assets/images/playpage/emoji.png';
import estoniaFlag from '../../../../assets/images/playpage/country1.png';
import englishFlag from '../../../../assets/images/playpage/country1.png';
import country2 from '../../../../assets/images/playpage/country2.png';
import country3 from '../../../../assets/images/playpage/country3.png';
import country4 from '../../../../assets/images/playpage/country4.png';
import './index.scss';
import TalkCell from './TalkCell';
import InfoBox from '../../../../components/InfoBox';

const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        {props.countryName}
    </Tooltip>
);
let messageCounter = null;
const countries = {
    English: englishFlag,
    Slovenian: country2,
    Spanish: country3,
    Hungarian: country4
}
let initialised = false;
const Chat = (props) => {
    const [messages, setMessages] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [selectedCounty, setSelectedCountry] = useState(null);
    const [meMessage, setMessage] = useState("");
    const [displayFlagContent, setDisplayFlagContent] = useState(false);
    const [displayChannel, setDisplayChannel] = useState(false);
    const initData = () => {
        console.log("initData")
        initialised = true;
        if(selectedCountries.length === 0) {
            if(Object.keys(countries).length > 0) {
                setSelectedCountries([Object.keys(countries)[0]])
            }
        }
        if(selectedCounty === null && selectedCountries.length > 0) {
            setSelectedCountry(selectedCountries[0])
        }
    }
    if(!initialised) {
        initData();
    }
    
    const changeSelectedCountry = (country) => {
        console.log("changeSelectedCountry")
        if(selectedCounty !== country) {
            if(selectedCountries.includes(country)) {
                setSelectedCountry(country)
            }
        }
    }
    const removeSelectedCounntry = () => {
        
        if(selectedCounty !== null) {
            const selectedIndex = selectedCountries.indexOf(selectedCounty);
            console.log("removeSelectedCounntry", selectedIndex, selectedCountries)
            let _selectedCountries = [...selectedCountries];
            _selectedCountries.splice(selectedIndex, 1)
            setSelectedCountries(_selectedCountries);
            if(_selectedCountries.length > 0) {
                setSelectedCountry(_selectedCountries[0]);
            }
            else {
                setSelectedCountry(null);
            }
        }
    }
    
    const getMesssage = async () => {
        const res = await request('get', `${serverUrl}chat/getMessagesOnetime.php`);
        setMessages(res.result.split('<///***br***///>'));
    }
    const continueGetMessage = () => {
        if(messageCounter) {
            window.clearInterval(messageCounter);
        }
        
        messageCounter = window.setInterval(getMesssage, 2000);
    }
    
    const sendMessage = () => {
        request('get', `${serverUrl}chat/sendMessage.php?message=${meMessage}`);
        console.log("~~~~~~~~~~sendMessage")
    }
    const clickCountryImg = (country) => {
        if(!selectedCountries.includes(country)) {
            setSelectedCountries([...selectedCountries, country]);
            setSelectedCountry(country)
        }
        setDisplayFlagContent(false);
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
                {`Current Chat Language: ${selectedCounty === null ? "No language" : selectedCounty}`}
            </div>
            <div className="countries">
                <div className="leave-btn" onClick={()=>removeSelectedCounntry()}>
                    <div className="close-symbol"><IoClose/></div>
                    
                    Leave
                </div>
                <div className="display-btn" onClick={()=>setDisplayChannel(!displayChannel)}>
                    {
                        displayChannel ? <span><AiFillMinusSquare/></span> : <span><AiFillPlusSquare/></span>
                    }
                    Countries
                </div>
                    
                    {
                        displayChannel &&
                        selectedCountries.length > 0 &&
                        selectedCountries.map(country => 
                            <OverlayTrigger
                                placement="right"
                                overlay={renderTooltip({countryName:country})}
                            >
                                <div className={`country ${selectedCounty === country ? "selected-country" : ""}`}>
                                <img src={countries[country]} onClick={()=>changeSelectedCountry(country)}></img>
                                </div>       
                            </OverlayTrigger>
                                 
                        )
                    }
            </div>
            <div className="send-message">
                <div className="full-relative">
                    <img src={emoji} className="emoji"></img>
                    <FiPaperclip className="paper-clip"/>
                    <input onChange={(e) => setMessage(e.target.value)} value={meMessage} className="message-write-content" placeholder="Type something here..."></input>
                    <div className="send-button" onClick={()=>sendMessage()}>
                        <IoMdSend/>
                    </div>
                    <InfoBox className='relative flag-content' outSideClickFunc={setDisplayFlagContent}>
                        <FaPlus className="plus-button" onClick={() => setDisplayFlagContent(!displayFlagContent)}/>
                        <div className={`absolute flag-drop-box ${!displayFlagContent ? 'hidden' : 'show'}`}>
                            {
                                Object.keys(countries).length > 0 &&
                                Object.keys(countries).map(country => 
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={renderTooltip({countryName:country})}
                                    >
                                        <img src={countries[country]} onClick={()=>clickCountryImg(country)}></img>     
                                    </OverlayTrigger>
                                )
                            }
                        </div>
                    </InfoBox>
                </div>
            </div>
        </div>
    );
}

export default Chat;