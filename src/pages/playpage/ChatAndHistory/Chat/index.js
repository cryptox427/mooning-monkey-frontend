import { IoMdSend } from 'react-icons/io';
import { FiPaperclip } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import {connect} from 'react-redux'

import { useState, useEffect } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { MDBTooltip } from 'mdb-react-ui-kit';

import {serverUrl} from '../../../../utils/constant'
import {request} from '../../../../utils/request';
import emoji from '../../../../assets/images/playpage/emoji.png';
import estoniaFlag from '../../../../assets/images/playpage/country1.png';
import englishFlag from '../../../../assets/images/flags/english.svg';
import frenchFlag from '../../../../assets/images/flags/french.svg';
import germanFlag from '../../../../assets/images/flags/german.svg';
import spanishFlag from '../../../../assets/images/flags/spanish.svg';
import './index.scss';
import TalkCell from './TalkCell';
import InfoBox from '../../../../components/InfoBox';
import UserStatsModal from '../../../../components/UserStatsModal';
import {setPopUp} from '../../../../actions/gameActions';


const renderTooltip = (props) => (
    <MDBTooltip wrapperProps={{ color: 'secondary' }} {...props} placement='right' title={props.countryName}>
        {props.countryName}
    </MDBTooltip>
);
let messageCounter = null;
const countries = {
    english: englishFlag,
    german: germanFlag,
    french: frenchFlag,
    spanish: spanishFlag
}
const chatTestData = [
    {
        time: "1234:54:3:23",
        username: "Luis",
        messageText: "Nice to meet you"
    },
    {
        time: "1234:54:3:23",
        username: "Luis",
        messageText: "Nice to meet you"
    },
    {
        time: "1234:54:3:23",
        username: "Luis",
        messageText: "Nice to meet you"
    },
    {
        time: "1234:54:3:23",
        username: "Luis",
        messageText: "Nice to meet you"
    }
]
const testStr = ['2022-05-22 20:43:47 | ServerTest | Whats up?', '2022-05-22 20:43:47 | ServerTest | afasd', '2022-05-23 17:34:15 | ServerTest | Hi', '2022-05-23 18:24:18 | test2 | Hi', '2022-05-23 18:24:24 | test2 | afdasfasf', '2022-05-23 20:34:28 | test2 | ', '2022-05-23 20:45:11 | test2 | ', '2022-05-26 11:38:56 | Ampeldruecker | afdasfasf', '2022-05-26 11:51:21 | Ampeldruecker | sd', '2022-05-26 11:51:21 | Ampeldruecker | sd', '']

const Chat = (props) => {
    const { userName } = props;
    const [messages, setMessages] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [friends, setFriends] = useState(["1","2","3"]);
    const [selectedCounty, setSelectedCountry] = useState("english");
    const [selectedChanel, setSelectedChanel] = useState({
        country: "",
        friend: ""
    });
    const [meMessage, setMessage] = useState("");
    const [displayFlagContent, setDisplayFlagContent] = useState(false);
    const [displayChannel, setDisplayChannel] = useState(true);
    const [statsModalData, setShowStatsModal] = useState({
        display: false,
        userName: ""
    });
    const initData = async () => {
        console.log("initData")
        if(selectedCountries.length === 0) {
            if(Object.keys(countries).length > 0) {
                await setSelectedCountries([Object.keys(countries)[0]])
            }
        }
        if(selectedCounty === null && selectedCountries.length > 0) {
            setSelectedCountry(selectedCountries[0])
        }
    }
    useEffect(() => {
        initData();
        continueGetMessage()
        // clearing interval
    },[]);
    useEffect(() => {
        continueGetMessage()
        // clearing interval
    },[selectedCounty]);
    const changeSelectedCountry = (country) => {
        console.log("changeSelectedCountry")
        if(selectedCounty !== country) {
            if(selectedCountries.includes(country)) {
                setSelectedCountry(country)
            }
        }
    }
    const selectFriend = (friendName) => {
        setSelectedChanel({
            country: "",
            friend: friendName
        })
    }
    const selectCountry = (country) => {
        setSelectedChanel({
            country: country,
            friend: ""
        })
    }
    const addFriend = (friendName) => {
        if(friends.includes(friendName)) {
            setPopUp("The user is already your friend")
        }
        else {       
            setFriends([...friends, friendName])
            selectFriend(friendName)
        }
    }
    const addCountry = (country) => {
        if(!selectedCountries.includes(country)) {
            setSelectedCountries([...selectedCountries, country]);
            selectCountry(country)
        }
        setDisplayFlagContent(false);
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
        const res = await request('get', `${serverUrl}chat/getMessagesOnetime.php?room=${selectedCounty}`);
        setMessages(res.result.split('<///***br***///>'));
        console.log("~~~~~~~getMesssage", res.result.split('<///***br***///>'), selectedCounty)
    }
    const continueGetMessage = () => {
        getMesssage()
        if(messageCounter) {
            window.clearInterval(messageCounter);
        }
        
        messageCounter = window.setInterval(getMesssage, 2000);
    }
    
    const sendMessage = async () => {
        const myMsg = meMessage
        setMessage("")
        var today = new Date()
        var timeStr = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' +
            today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        setMessages([...messages, `${timeStr} | ${userName} | ${myMsg}`]);
        await request('get', `${serverUrl}chat/sendMessage.php?message=${myMsg}&room=${selectedCounty}`);
        
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
                        messages.map((message) => {
                                let messageParts = message.split(' | ');
                                
                                let time = messageParts[0];
                                let username = messageParts[1];
                                let messageText = messageParts[2];
                                if(messageParts.length>2) {
                                    return (
                                        <TalkCell clickUserName={setShowStatsModal} t_time={time} t_name={username} t_content={messageText}/>
                                    )
                                }
                            }
                        )
                        // chatTestData.length > 0 &&
                        // chatTestData.map((chat, index) => {
                            
                        //         return (
                        //             <TalkCell clickUserName={setShowStatsModal} t_time={chat.time} t_name={chat.username} t_content={chat.messageText}/>
                        //         )
                        //     }
                        // )
                    }
                    </div>
                    {/* {<div className="mask"></div>} */}

                    
                </div>
            </div>
            <div className="current-language">
                {selectedChanel.friend !== "" ?
                    `Current Chat Friend: ${selectedChanel.friend}`
                    :
                    `Current Chat Language: ${selectedChanel.country === "" ? "No language" : selectedChanel.country}`}
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
                <div className="countries-list">
                    {
                        displayChannel &&
                        selectedCountries.length > 0 &&
                        selectedCountries.map(country => 
                            <MDBTooltip placement="left" title={country} tag="span">
                                <div className={`country ${selectedChanel.country === country ? "selected-country" : ""}`}>
                                <img src={countries[country]} onClick={()=>setSelectedChanel({friend: "", country: country})}></img>
                                </div> 
                            
                            </MDBTooltip>
                        )
                    }
                </div>
            </div>
            <div className="friends">
                <div className="leave-btn" onClick={()=>removeSelectedCounntry()}>
                    <div className="close-symbol"><IoClose/></div>
                    
                    Leave
                </div>
                <div className="display-btn" onClick={()=>setDisplayChannel(!displayChannel)}>
                    {
                        displayChannel ? <span><AiFillMinusSquare/></span> : <span><AiFillPlusSquare/></span>
                    }
                    Friedns
                </div>
                <div className="friends-list">
                    {
                        displayChannel &&
                        friends.length > 0 &&
                        friends.map(friend => 
                            <MDBTooltip placement="left" title={friend} tag="span">
                                <div className={`friend ${selectedChanel.friend === friend ? "selected-friend" : ""}`}>
                                    <div className="friend-background" onClick={()=>setSelectedChanel({country: "", friend: friend})}></div>
                                    <p className="friend-name"  onClick={()=>setSelectedChanel({country: "", friend: friend})}>{friend}</p>
                                </div> 
                            
                            </MDBTooltip>
                        )
                    }
                </div>
            </div>
            <div className="send-message">
                <div className="full-relative">
                    <img src={emoji} className="emoji"></img>
                    <FiPaperclip className="paper-clip"/>
                    
                    <input onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            sendMessage()
                        }
                    }} onChange={(e) => setMessage(e.target.value)} value={meMessage} className="message-write-content" placeholder="Type something here..."></input>
                    <div className="send-button" onClick={()=>sendMessage()}>
                        <IoMdSend/>
                    </div>
                    <InfoBox className='relative flag-content' outSideClickFunc={setDisplayFlagContent}>
                        <FaPlus className="plus-button" onClick={() => setDisplayFlagContent(!displayFlagContent)}/>
                        <div className={`absolute flag-drop-box ${!displayFlagContent ? 'hidden' : 'show'}`}>
                            {
                                Object.keys(countries).length > 0 &&
                                Object.keys(countries).map(country => 
                                    <MDBTooltip placement="left" title={country} tag="span">
                                        <img src={countries[country]} onClick={()=>addCountry(country)}></img>
                                    
                                    </MDBTooltip>
                                )
                            }
                        </div>
                    </InfoBox>
                </div>
            </div>
            <UserStatsModal clickAddBtn={addFriend} show={statsModalData.display} userName={statsModalData.userName} onHide={() => setShowStatsModal({...statsModalData, display: false})} />
        </div>
    );
}

const mapStateToProps  = (state) => (
    { 
        userName: state.userData.userName
    }
)
export default connect(mapStateToProps, {})(Chat)