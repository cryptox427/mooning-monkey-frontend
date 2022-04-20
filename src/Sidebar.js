import React, { useState } from 'react';
import { 
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem } from "cdbreact";
import { NavLink } from "react-router-dom";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft, AiFillTwitterCircle } from "react-icons/ai";
import { BsPlay, BsMenuButton, BsDiscord } from "react-icons/bs";
import { BiTransferAlt, BiStar, BiPencil } from "react-icons/bi";
import { SiSurveymonkey } from "react-icons/si";
import { GiReceiveMoney, GiTrophyCup, GiSailboat } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { CgFileDocument } from "react-icons/cg";
import { FaDove } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";


import Cell from './pages/layouts/Sidebar/Cell.js';
import './Sidebar.scss';

const Sidebar = () => {
  const [selectedPage, setPage] = useState('play');

  return (
    <div
      className="app left-sidebar"
      style={{ display: "flex", height: "100%", overflow:"scroll initial"}}
    >
      <CDBSidebar
        textColor="#fff"
        backgroundColor="#333"
      >
        <CDBSidebarHeader
          className="display-button"
          prefix={
            <div className="icon">
              <AiOutlineDoubleRight className="right-icon"/>
              <AiOutlineDoubleLeft className="left-icon"/>
            </div>
          }
        >
        
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          

            <Cell linkStr="play" setPage={setPage} selectedPage={selectedPage}>
              <BsPlay className="icon"/>
              <span className="detail-str">Play</span>
            </Cell>
            <Cell linkStr="transaction-history" setPage={setPage} selectedPage={selectedPage}>
              <BiTransferAlt className="icon"/>
              <span className="detail-str">Transaction History</span>
            </Cell>
            <Cell linkStr="tak-stak" setPage={setPage} selectedPage={selectedPage}>
                <BiStar className="icon"/>
                <span className="detail-str">TAK Staking</span>
            </Cell>
            <Cell linkStr="monkey-earning" setPage={setPage} selectedPage={selectedPage}>
              <SiSurveymonkey className="icon"/>
                <span className="detail-str">Monkey Earnings</span>
            </Cell>
            <Cell linkStr="bookearning" setPage={setPage} selectedPage={selectedPage}>
            <BiPencil className="icon"/>
                <span className="detail-str">Comic Book Earnings</span>
            </Cell>
            <Cell linkStr="bankroll" setPage={setPage} selectedPage={selectedPage}>
            <BsMenuButton className="icon"/>
                <span className="detail-str">Bankroll</span>
            </Cell>
            <Cell linkStr="cashback" setPage={setPage} selectedPage={selectedPage}>
            <GiReceiveMoney className="icon"/>
                <span className="detail-str">Cashback</span>
            </Cell>
            <Cell linkStr="win-bonus" setPage={setPage} selectedPage={selectedPage}>
            <GiTrophyCup className="icon"/>
                <span className="detail-str">Winning Bonus</span>
            </Cell>
            <Cell linkStr="referral" setPage={setPage} selectedPage={selectedPage}>
            <FiUsers className="icon"/>
                <span className="detail-str">Referral Program</span>
            </Cell>
            <Cell linkStr="docs" setPage={setPage} selectedPage={selectedPage}>
            <CgFileDocument className="icon"/>
                <span className="detail-str">Docs</span>
            </Cell>
            

            
          </CDBSidebarMenu>
          <CDBSidebarMenu>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 5px"
            }}
          >
            <BsDiscord className="sidebar-foot-btn"/>
            <FaDove className="sidebar-foot-btn"/>
            <GiSailboat className="sidebar-foot-btn"/>
            <RiHome2Fill className="sidebar-foot-btn"/>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

export default Sidebar;
