import LogoFooterComponent from '../../components/LogoFooterComponent';
import TableComponent from '../../components/TableComponent';
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
                <div className="d-flex text-white mb-4">
                    <div className="">
                        <div className="">Deposit</div>
                        {/* <div className="underline" /> */}
                    </div>
                    <div className="mx-4">
                        <div className="">Withdraw</div>
                        {/* <div className="underline" /> */}
                    </div>
                    <div className="">
                        <div className="">Rewards</div>
                        <div className="underline" />
                    </div>
                </div>
                <div className='transaction-history-container-table'>
                    <TableComponent dataList={dataList} showPagination showPerPage />
                </div>
            </div>
            <LogoFooterComponent />
        </div>
    );
}

export default TransactionHistory;