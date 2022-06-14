import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import React, { useEffect, useState } from "react";
import Pagination from 'react-responsive-pagination';
import {connect} from 'react-redux'

import LogoFooterComponent from '../../components/LogoFooterComponent';
import TransActionTableComponent from '../../components/TransActionTableComponent';
import MobileDataList from '../../components/MobileDataList';

import './index.scss';
import {TRANSACTION_TYPE} from '../../utils/types';
import {getTransactionHistory} from '../../actions/transactionHistoryActions'
import Select from 'react-select';

const defaultData = [
    // event: "Reward",
    // status: "Success",
    // amount: 0.05,
    // fee: 0,
    // creditedOn: "24-09-2021 16:03"
    "Reward",
    "Success",
    0.05,
    0,
    "24-09-2021 16:03"
]
const testDataList = [];
    

for (let i = 0; i < 11; i++) {
    testDataList.push(defaultData);
}
const TransactionHistory = (props) => {
    const { transactionHistory, getTransactionHistory } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const [displayCount, setDisplayCount] = useState(10);
    const [displayData, setDisplayData] = useState([]);
    const [totalPages, setTotalPageCopunt] = useState(10);
    
    const getDisplayData = (baseData, selectedPageNumber, selectedDisplayCount) => {
        const displayArray = baseData.slice((selectedPageNumber-1) * selectedDisplayCount, selectedPageNumber * selectedDisplayCount)
        return displayArray;
    }
    useEffect(
        () => {
            let displayDataList = getDisplayData(transactionHistory, currentPage, displayCount)
            setDisplayData(displayDataList)
        },
        [transactionHistory, currentPage, displayCount],
    );
    useEffect(
        () => {
            setTotalPageCopunt(parseInt((transactionHistory.length - 1) / displayCount + 1))
        },
        [transactionHistory, displayCount],
    );
    useEffect(
        () => {
            clickTabBtn(TRANSACTION_TYPE.DEPOSIT)
        },
        [],
    );
    const clickTabBtn = (type) => {
        getTransactionHistory(type)
        //setTransactionHistory(testDataList)
        
    }
    /////// pagination action
    const changeDisplayCount = (e) => {
        setDisplayCount(e);
    }
    const tableRecodCountOptions = [
        { value: 10, label: '10 Records' },
        { value: 20, label: '20 Records' },
        { value: 50, label: '50 Records' } 
    ];
    const recordTableStyle = {
        option: (provided, state) => ({
            ...provided
        }),
        control: (provided) => ({
            ...provided,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderRadius: '0',
            borderColor: '#515189',
        }),
        singleValue: provided => ({
            ...provided,
            color: 'white'
          })
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
                            <MobileDataList dataList={displayData}/>
                            <TransActionTableComponent dataList={displayData} transActionType={TRANSACTION_TYPE.DEPOSIT}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="withdraw">
                            <MobileDataList dataList={displayData}/>
                            <TransActionTableComponent dataList={displayData} transActionType={TRANSACTION_TYPE.WITHDRAW}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="rewards">
                            <MobileDataList dataList={displayData}/>
                            <TransActionTableComponent dataList={displayData} transActionType={TRANSACTION_TYPE.REWARDS}/>
                        </Tab.Pane>
                    
                    </Tab.Content>
                
                </Tab.Container>
            </div>
            <div className='custom-table-bottom'>
                <div className='custom-table-bottom-left'>
                <React.Fragment>
                    <Select value={{label: `${displayCount} Records`, value: displayCount}} className="record-count-select"
                        onChange={(e)=>changeDisplayCount(e.value)}
                        options = {tableRecodCountOptions} styles = {recordTableStyle}>

                    </Select>
                    <div className='custom-table-bottom-left-status'>{`Showing ${displayData.length} out of ${transactionHistory.length}`}</div>
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
        transactionHistory: state.transactionData.transactionHistory
    }
)

export default connect(mapStateToProps, {getTransactionHistory})(TransactionHistory)