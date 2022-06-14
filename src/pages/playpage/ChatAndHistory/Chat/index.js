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

import albanian from '../../../../assets/Flags/albanian.svg';
import arabic from '../../../../assets/Flags/arabic.svg';
import armenian from '../../../../assets/Flags/armenian.svg';
import bengali from '../../../../assets/Flags/bengali.svg';
import bosnian from '../../../../assets/Flags/bosnian.svg';
import bulgarian from '../../../../assets/Flags/bulgarian.svg';
import estoniaFlag from '../../../../assets/Flags/albanian.svg';
import china from '../../../../assets/Flags/china.svg';
import croatian from '../../../../assets/Flags/croatian.svg';
import czech from '../../../../assets/Flags/czech.svg';
import denmark from '../../../../assets/Flags/denmark.svg';
import dutch from '../../../../assets/Flags/dutch.svg';
import english from '../../../../assets/Flags/english.svg';
import estonia from '../../../../assets/Flags/estonia.svg';
import farsi from '../../../../assets/Flags/farsi.svg';
import filipino from '../../../../assets/Flags/filipino.svg';
import finland from '../../../../assets/Flags/finland.svg';
import french from '../../../../assets/Flags/french.svg';
import german from '../../../../assets/Flags/german.svg';
import greek from '../../../../assets/Flags/greek.svg';
import help from '../../../../assets/Flags/help.svg';
import hungarian from '../../../../assets/Flags/hungarian.svg';
import india from '../../../../assets/Flags/india.svg';
import indonesia from '../../../../assets/Flags/indonesia.svg';
import israel from '../../../../assets/Flags/israel.svg';

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
    albanian: albanian,
    arabic: arabic,
    armenian: armenian,
    bengali: bengali,
    bosnian: bosnian,
    bulgarian: bulgarian,
    china: china,
    croatian: croatian,
    czech: czech,
    denmark: denmark,
    dutch: dutch,
    english: english,
    estonia: estonia,
    farsi: farsi,
    filipino: filipino,
    finland: finland,
    french: french,
    german: german,
    greek: greek,
    help: help,
    hungarian: hungarian,
    india: india,
    indonesia: indonesia,
    israel: israel
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
    const { userName, logged } = props;
    const [messages, setMessages] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState(["english"]);
    const [friends, setFriends] = useState([]);
    const [selectedCounty, setSelectedCountry] = useState("english");
    const [selectedChanel, setSelectedChanel] = useState({
        country: "english",
        friend: ""
    });
    const [meMessage, setMessage] = useState("");
    const [displayFlagContent, setDisplayFlagContent] = useState(false);
    const [displayCountryChanel, setDisplayCountryChannel] = useState(true);
    const [displayFriendChanel, setDisplayFriendChannel] = useState(true);
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
    },[selectedChanel]);
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
        
        if(selectedChanel.country !== "") {
            const selectedIndex = selectedCountries.indexOf(selectedChanel.country);
            console.log("removeSelectedCounntry", selectedIndex, selectedCountries)
            let _selectedCountries = [...selectedCountries];
            _selectedCountries.splice(selectedIndex, 1)
            setSelectedCountries(_selectedCountries);
            if(_selectedCountries.length > 0) {
                setSelectedChanel({
                    country: _selectedCountries[0],
                    friend: ""
                })
            }
            else {
                if(friends.length > 0) {
                    setSelectedChanel({
                        country: "",
                        friend: friends[0]
                    })
                }
                else {
                    setSelectedChanel({
                        country: "",
                        friend: ""
                    })
                }
            }
        }
    }
    const removeSelectedFriend = () => {
        
        if(selectedChanel.friend !== "") {
            const selectedIndex = friends.indexOf(selectedChanel.friend);
            console.log("removeSelectedFriend", selectedIndex, friends)
            let _friends = [...friends];
            _friends.splice(selectedIndex, 1)
            setFriends(_friends);
            if(_friends.length > 0) {
                setSelectedChanel({
                    country: "",
                    friend: _friends[0]
                })
            }
            else {
                if(selectedCountries.length > 0) {
                    setSelectedChanel({
                        country: selectedCountries[0],
                        friend: ""
                    })
                }
                else {
                    setSelectedChanel({
                        country: "",
                        friend: ""
                    })
                }
            }
        }
    }
    
    const getMesssage = async () => {
        let res = {}
        if(selectedChanel.friend !== "") {
            res = await request('get', `${serverUrl}chat/getMessagesOnetime.php?room=userToUser*__*${userName}*__*${selectedChanel.friend}`);

        }
        else if(selectedChanel.country !== "") {
            res = await request('get', `${serverUrl}chat/getMessagesOnetime.php?room=${selectedChanel.country}`);
        }
        
        setMessages(res.result.split('<///***br***///>'));
        
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
        if(selectedChanel.friend !== "") {
            
            await request('get', `${serverUrl}chat/sendMessage.php?message=${myMsg}&room=userToUser*__*${userName}*__*${selectedChanel.friend}`);
        }
        else if(selectedChanel.country !== "") {
            await request('get', `${serverUrl}chat/sendMessage.php?message=${myMsg}&room=${selectedChanel.country}`);
        }
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
                <div className="display-btn" onClick={()=>setDisplayCountryChannel(!displayCountryChanel)}>
                    {
                        displayCountryChanel ? <span><AiFillMinusSquare/></span> : <span><AiFillPlusSquare/></span>
                    }
                    Countries
                </div>
                <div className="countries-list">
                    {
                        displayCountryChanel &&
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
                <div className="leave-btn" onClick={()=>removeSelectedFriend()}>
                    <div className="close-symbol"><IoClose/></div>
                    
                    Unfriend
                </div>
                <div className="display-btn" onClick={()=>setDisplayFriendChannel(!displayFriendChanel)}>
                    {
                        displayFriendChanel ? <span><AiFillMinusSquare/></span> : <span><AiFillPlusSquare/></span>
                    }
                    Friends
                </div>
                <div className="friends-list">
                    {
                        displayFriendChanel &&
                        friends.length > 0 &&
                        friends.map(friend => 
                            <MDBTooltip placement="left" title={friend} tag="span">
                                <div className={`friend ${selectedChanel.friend === friend ? "selected-friend" : ""}`}>
                                    <div className="friend-background"></div>
                                    <p className="friend-name"  onClick={()=>setSelectedChanel({country: "", friend: friend})}>{friend.substring(0,2)}</p>
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
                        }} 
                        onChange={(e) => setMessage(e.target.value)} value={meMessage} className="message-write-content" 
                        placeholder={logged?"Type something here...":"You must be logged in to chat"}></input>
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
                    {
                        !logged &&
                        <div className="input-mask"></div>
                    }
                    
                </div>
            </div>
            <UserStatsModal clickAddBtn={addFriend} show={statsModalData.display} userName={statsModalData.userName} onHide={() => setShowStatsModal({...statsModalData, display: false})} />
        </div>
    );
}

const mapStateToProps  = (state) => (
    { 
        userName: state.userData.userName,
        logged: state.userData.logged
    }
)
export default connect(mapStateToProps, {})(Chat)