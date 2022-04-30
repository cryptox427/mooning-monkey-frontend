import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import LogoFooterComponent from '../../components/LogoFooterComponent';
import TableComponent from '../../components/TableComponent';
import PaginationTableComponent from '../../components/PaginationTableComponent';
import BNB1Img from '../../assets/images/playpage/bnb1.png';
import BNB2Img from '../../assets/images/playpage/bnb2.png';
import './index.scss';

const TransactionHistory = (props) => {
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
                    <TableComponent dataList={dataList} showPagination showPerPage />
                    </Tab>
                    <Tab eventKey="withdraw" title="Withdraw">
                    <TableComponent dataList={dataList} showPagination showPerPage />
                    </Tab>
                    <Tab eventKey="rewards" title="Rewards">
                    <PaginationTableComponent />
                    </Tab>
                </Tabs>
                
            </div>
            <LogoFooterComponent />
        </div>
    );
}

export default TransactionHistory;