import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import './index.scss';
import LeaderBoardTable from './LeaderBoardTable';
import { Dropdown } from 'react-bootstrap';
import Pagination from 'react-responsive-pagination';

import {getLeaderBoards} from '../../actions/gameActions';

let testData = [["ServerTest",1667.6875,7362.3125,8235,1,110],
["ServerTest",1667.6875,7362.3125,8235,1,110],
["ServerTest",1667.6875,7362.3125,8235,1,110],
["ServerTest",1667.6875,7362.3125,8235,1,110],["ServerTest",1667.6875,7362.3125,8235,1,110],
["ServerTest",1667.6875,7362.3125,8235,1,110],
["ServerTest",1667.6875,7362.3125,8235,1,110],
["ServerTest",1667.6875,7362.3125,8235,1,110],
["ServerTest",1667.6875,7362.3125,8235,1,110],
["ServerTest",1667.6875,7362.3125,8235,1,110],
["ServerTest",1667.6875,7362.3125,8235,1,110],
["ServerTest",1667.6875,7362.3125,8235,1,110]];

const LeaderboardModal = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [displayCount, setDisplayCount] = useState(10);
    const [leaderBoardData, setLeaderBoardData] = useState([]);
    const [displayData, setDisplayData] = useState([]);
    const [totalPages, setTotalPageCopunt] = useState(10);
    const { show, onHide } = props;
    let dataList = [];
    for(let i = 0 ; i < 10 ; i ++) {
        dataList.push({
            player: "k",
            wagered: 5,
            profit: 5,
            profitAth: 10,
            profitAtl: "amount",
            bets: "Amount"
        });
    }
    const getDisplayData = (baseData, selectedPageNumber, selectedDisplayCount) => {
        const displayArray = baseData.slice((selectedPageNumber-1) * selectedDisplayCount, selectedPageNumber*selectedDisplayCount)
        return displayArray;
    }
    const getDataFromServer = async () => {
        const data = await getLeaderBoards()
        const _leaderBoardData = data.map(_data => {
            
            return {
                player: _data[0],
                wargered: _data[1],
                profit: _data[2],
                profitAth: _data[3],
                profitAtl: _data[4],
                bets: _data[5]
            }
        });
        setLeaderBoardData(_leaderBoardData)
    }
    useEffect(
        () => {
            
            let _displayData = getDisplayData(leaderBoardData, currentPage, displayCount)
            setDisplayData(_displayData)
        },
        [leaderBoardData, currentPage, displayCount],
    );
    useEffect(
        () => {
            setTotalPageCopunt(parseInt((leaderBoardData.length-1) / displayCount + 1))
        },
        [leaderBoardData, displayCount],
    );
    useEffect(
        () => {
            if(show) {
                getDataFromServer()
            }
        },
        [show],
    );
    const changeDisplayCount = (e) => {
        setDisplayCount(e);
    }
    
    const onHideAction = () => {
        onHide()
    }
    return (
        <Modal show={show} onHide={onHideAction} className="monkey-modal leaderboard-modal">
            <Modal.Header closeButton closeVariant='white'>
                <Modal.Title><span>Leaderboard</span></Modal.Title>
                <div className="right-headre-section">
                    <select className="time-select">
                        <option>All time </option>
                        <option>All time </option>
                        <option>All time </option>
                        <option>All time </option>
                    </select>
                    <div className="reload-btn">
                        <svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 13C26 9 24.2008 5.4 21.3008 3L25 3L25 1L17 1L17 9L19 9L19 3.80078C22 5.80078 24 9.1 24 13C24 19.1 19.1 24 13 24C6.9 24 2 19.1 2 13C2 6.9 6.9 2 13 2L13 -5.68248e-07C5.8 -8.8297e-07 -2.53526e-07 5.8 -5.68248e-07 13C-8.8297e-07 20.2 5.8 26 13 26C20.2 26 26 20.2 26 13Z" fill="#F001F4"/>
                        </svg>
                        
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body>
    
                <div className="table-responsive">
                    <LeaderBoardTable dataList={displayData}/>
                </div>

                <div className='custom-table-bottom'>
                    <div className='custom-table-bottom-left'>
                        <React.Fragment>
                            <div className='custom-table-bottom-left-select'>
                                <Dropdown onSelect={(e)=>changeDisplayCount(e)}>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        {displayCount} Records
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey={10}>10 Records</Dropdown.Item>
                                        <Dropdown.Item eventKey={20}>20 Records</Dropdown.Item>
                                        <Dropdown.Item eventKey={50}>50 Records</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className='custom-table-bottom-left-status'>{`Showing ${displayData.length} out of ${leaderBoardData.length}`}</div>
                        </React.Fragment>
                    </div>
                    <div className='pagination-content'>
                        <Pagination current={currentPage}
                            total={totalPages}
                            onPageChange={setCurrentPage}>  
                            </Pagination>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default LeaderboardModal;