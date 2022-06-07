import React, { useState, useEffect } from 'react';
import { 
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem } from "cdbreact";
import { NavLink, withRouter, useLocation } from "react-router-dom";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft, AiFillTwitterCircle } from "react-icons/ai";
import { BsPlay, BsMenuButton, BsDiscord } from "react-icons/bs";
import { BiTransferAlt, BiStar, BiPencil } from "react-icons/bi";

import { SiSurveymonkey, SiLinktree, SiNotion, SiTwitter } from "react-icons/si";
import { GiReceiveMoney, GiTrophyCup, GiSailboat } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { CgFileDocument } from "react-icons/cg";
import { FaDove, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";
import {connect} from 'react-redux'

import BankrollModal from './components/BanrollModal';
import LeaderboardModal from './components/LeaderboardModal';
import DepositModal from './components/DepositModal';
import StatsModal from './components/StatsModal';
import WithdrawModal from './components/WIthdrawModal';
import Cell from './pages/layouts/Sidebar/Cell.js';
import './Sidebar.scss';
import darkLogo from './assets/images/playpage/dark-logo.png';
import openSeaLogo from './assets/images/opensea.png';
import {changeCurrentPage} from './actions/userActions'

const Sidebar = (props) => {
  const {changeCurrentPage, history} = props;
  
  const [bankrollStatus, setBankrollStatus] = useState(false);
  const [showLeaderBoard, setShowLeaderBoard] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  
  const setPage = (targetPage) => {
    changeCurrentPage(targetPage)
  }
  const location = useLocation();
  useEffect(() => {
    console.log("~~url", location.pathname)
    setCurrentPage(location.pathname)
  }, [location]);
  return (
    <>
    <div
      className="app left-sidebar"
      style={{ display: "flex", height: "100%", overflow:"scroll initial"}}
    >
      <CDBSidebar
        textColor="#fff"
        backgroundColor="#333"
      >
        <div className="sidebar-mask"/>
        <CDBSidebarHeader
          className="display-button"
          prefix={
            <div className="icon">
              <FaAngleDoubleRight className="right-icon oc-icon"/>
              <FaAngleDoubleLeft className="left-icon oc-icon"/>
            </div>
          }
        >
        
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
        <div className="buttons normal-group">
          <button className="purple buy-now border-0">
            <img className="" src={darkLogo} alt="Italian Trulli"></img>
            BUY $TAK NOW
          </button>

          </div>
          <CDBSidebarMenu>
          

            <Cell linkStr="play" setPage={setPage} selectedPage={currentPage}>
              <BsPlay className="icon"/>
              <span className="detail-str">Play</span>
            </Cell>
            <Cell linkStr="transaction-history" setPage={setPage} selectedPage={currentPage}>
              <BiTransferAlt className="icon"/>
              <span className="detail-str">Transaction History</span>
            </Cell>
            <Cell linkStr="tak-stak" setPage={setPage} selectedPage={currentPage}>
                <BiStar className="icon"/>
                <span className="detail-str">TAK Staking</span>
            </Cell>
            <Cell linkStr="monkey-earning" setPage={setPage} selectedPage={currentPage}>
              <SiSurveymonkey className="icon"/>
                <span className="detail-str">Monkey Earnings</span>
            </Cell>
            <Cell linkStr="bookearning" setPage={setPage} selectedPage={currentPage}>
            <BiPencil className="icon"/>
                <span className="detail-str">Comic Book Earnings</span>
            </Cell>
            <Cell linkStr="bankroll" setPage={setPage} selectedPage={currentPage}>
            <BsMenuButton className="icon"/>
                <span className="detail-str">Bankroll</span>
            </Cell>
            <Cell linkStr="cashback" setPage={setPage} selectedPage={currentPage}>
            <GiReceiveMoney className="icon"/>
                <span className="detail-str">Cashback</span>
            </Cell>
            <Cell linkStr="win-bonus" setPage={setPage} selectedPage={currentPage}>
            <GiTrophyCup className="icon"/>
                <span className="detail-str">Winning Bonus</span>
            </Cell>
            <Cell linkStr="referral" setPage={setPage} selectedPage={currentPage}>
            <FiUsers className="icon"/>
                <span className="detail-str">Referral Program</span>
            </Cell>
            <Cell linkStr="docs" setPage={setPage} selectedPage={currentPage}>
            <CgFileDocument className="icon"/>
                <span className="detail-str">Docs</span>
            </Cell>
            

            
          </CDBSidebarMenu>
          <div className="buttons normal-group">

              <button className="image-back border-0 buy-monkey">
                  
                  <div className='mask'>
                      <span>BUY A  MONKY & EARN</span>
                  </div>
              </button>
              <button className="image-back border-0 join-bankroll"  onClick={() => setBankrollStatus(true)}>
                  
                  <div className='mask'>
                      <span>JOIN THE BANKROLL & EARN</span>
                  </div>
              </button>
              <button className="image-back border-0 leaderboard" onClick={() => setShowLeaderBoard(true)}>
              
                  <div className='mask'>
                      <span>LEARDERBOARD</span>
                  </div>
              </button>
              <button className="image-back border-0 stats" onClick={() => setShowStatsModal(true)}>
              <div className='mask'><span>STATS</span></div>
                  
              </button>
              <button className="image-back border-0 help">
              <div className='mask'><span>HELP</span></div>
                  
              </button>
              <button className="purple border-0 wallet-address">
                  0X488B...66JK6J
              
              </button>
          </div>
                    
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 5px"
            }}
          >
            <a href='https://discord.gg/MooningMonkey' target="_blank" rel="noopener noreferrer"><BsDiscord className="sidebar-foot-btn"/></a>
            <a href='https://twitter.com/MooningMonkeys' target="_blank" rel="noopener noreferrer"><SiTwitter className="sidebar-foot-btn"/></a>
            
            <a href='https://opensea.io/collection/officialmooningmonkey' target="_blank" rel="noopener noreferrer">
              <GiSailboat className="sidebar-foot-btn"/>
            </a>
            <a href='https://linktr.ee/MooningMonkeyOfficial' target="_blank" rel="noopener noreferrer"><SiLinktree className="sidebar-foot-btn"/></a>
            <a href='https://www.notion.so/mooningmonkey' target="_blank" rel="noopener noreferrer"><SiNotion className="sidebar-foot-btn"/></a>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      </div>
      
      <BankrollModal show={bankrollStatus} onHide={() => setBankrollStatus(false)} />
      <LeaderboardModal show={showLeaderBoard} onHide={() => setShowLeaderBoard(false)} />
      <StatsModal show={showStatsModal} onHide={() => setShowStatsModal(false)} />
      <DepositModal show={showDepositModal} onHide={() => setShowDepositModal(false)} />
      <WithdrawModal show={showWithdrawModal} onHide={() => setShowWithdrawModal(false)} />
    
    </>
  );
}

const mapStateToProps  = (state) => (
  {
    currentPage: state.userData.currentPage 
  }
)
export default withRouter(connect(mapStateToProps, {changeCurrentPage})(Sidebar))