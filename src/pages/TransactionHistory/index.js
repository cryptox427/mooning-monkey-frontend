import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { Table, Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Pagination from 'react-responsive-pagination';
import {connect} from 'react-redux'

import LogoFooterComponent from '../../components/LogoFooterComponent';
import TransActionTableComponent from '../../components/TransActionTableComponent';
import MobileDataList from '../../components/MobileDataList';

import './index.scss';
import {TRANSACTION_TYPE} from '../../utils/types';
import {getTransactionHistory} from '../../actions/transactionHistoryActions'

const TransactionHistory = (props) => {
    const { showPagination, showPerPage, getTransactionHistory } = props;
    const [currentPage, setCurrentPage] = useState(4);
    const totalPages = 17;
    const dataList = [];
    const defaultData = {
        event: "Reward",
        status: "Success",
        amount: 0.05,
        fee: 0,
        creditedOn: "24-09-2021 16:03"
    }

    for (let i = 0; i < 10; i++) {
        dataList.push(defaultData);
    }

    const clickTabBtn = (type) => {
        getTransactionHistory(type)
    }
    return (
        <div className="transaction-history">
            <div className='transaction-history-container'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="deposit">
            <Nav variant="pills" className="nav-tabs">
                <Nav.Item>
                    <Nav.Link eventKey="deposit" onClick={()=>clickTabBtn(TRANSACTION_TYPE.DEPOSIT)}>Deposit</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="withdraw" onClick={()=>clickTabBtn(TRANSACTION_TYPE.WITHDRAW)}>Withdraw</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="rewards" onClick={()=>clickTabBtn(TRANSACTION_TYPE.REWARDS)}>Rewards</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="deposit">
                    <MobileDataList showPagination showPerPage dataList={dataList}/>
                    <TransActionTableComponent transActionType={TRANSACTION_TYPE.DEPOSIT} dataList={dataList} showPagination showPerPage />
                </Tab.Pane>
                <Tab.Pane eventKey="withdraw">
                    <MobileDataList showPagination showPerPage dataList={dataList}/>
                    <TransActionTableComponent transActionType={TRANSACTION_TYPE.WITHDRAW} dataList={dataList} showPagination showPerPage />
                </Tab.Pane>
                <Tab.Pane eventKey="rewards">
                    <MobileDataList showPagination showPerPage dataList={dataList}/>
                    <TransActionTableComponent transActionType={TRANSACTION_TYPE.REWARDS} dataList={dataList} showPagination showPerPage />
                </Tab.Pane>
               
            </Tab.Content>
                
                </Tab.Container>
            </div>
            <div className='custom-table-bottom'>
                <div className='custom-table-bottom-left'>
                <React.Fragment>
                                <div className='custom-table-bottom-left-select'>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            10 Records
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">10 Records</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">20 Records</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">50 Records</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className='custom-table-bottom-left-status'>Showing 10 out of 100</div>
                            </React.Fragment>
                </div>
                <div className='pagination-content'>
                <Pagination current={currentPage}
                            total={totalPages}
                            onPageChange={setCurrentPage}>  
                            </Pagination>
                </div>
            </div>
        
            <LogoFooterComponent />
        </div>
    );
}

const mapStateToProps  = (state) => (
    {
    
    }
)

export default connect(mapStateToProps, {getTransactionHistory})(TransactionHistory)