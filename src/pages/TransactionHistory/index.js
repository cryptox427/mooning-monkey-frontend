import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Table, Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Pagination from 'react-responsive-pagination';

import LogoFooterComponent from '../../components/LogoFooterComponent';
import TableComponent from '../../components/TableComponent';
import MobileDataList from '../../components/MobileDataList';
import BNB1Img from '../../assets/images/playpage/bnb1.png';
import BNB2Img from '../../assets/images/playpage/bnb2.png';
import './index.scss';

const TransactionHistory = (props) => {
    const { showPagination, showPerPage } = props;
    const [currentPage, setCurrentPage] = useState(4);
    const totalPages = 17;
    const dataList = [];
    const defaultData = {
        Event: "Reward",
        Status: <span className='green-font'>Success</span>,
        Amount: <div className="">
                    <img className='mr-2' src={BNB1Img} alt="bnb1" />
                    0.05
                </div>,
        Fee: <div className="">
                <img src={BNB2Img} className='mr-2' alt="bnb2" />
                0
            </div>,
        "Txn Hash": "0x553a...b4js73",
        "Credited On": "24-09-2021 16:03"
    }

    for (let i = 0; i < 10; i++) {
        dataList.push(defaultData);
    }

    return (
        <div className="transaction-history">
            <div className='transaction-history-container'>
                <Tabs defaultActiveKey="deposit"
                      transition={false}
                      id="noanim-tab-example"
                      className="mb-3"
                    >
                    <Tab eventKey="deposit" title="Deposit">
                        <MobileDataList showPagination showPerPage/>
                        <TableComponent dataList={dataList} showPagination showPerPage />
                    </Tab>
                    <Tab eventKey="withdraw" title="Withdraw">
                        <MobileDataList showPagination showPerPage/>
                        <TableComponent dataList={dataList} showPagination showPerPage />
                    </Tab>
                    <Tab eventKey="rewards" title="Rewards">
                        <MobileDataList showPagination showPerPage/>
                        <TableComponent dataList={dataList} showPagination showPerPage />
                    </Tab>
                </Tabs>
                
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

export default TransactionHistory;