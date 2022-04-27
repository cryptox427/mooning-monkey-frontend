import LogoFooterComponent from '../../components/LogoFooterComponent';
import TableComponent from '../../components/TableComponent';
import './index.scss';

const TransactionHistory = (props) => {
    const dataList = [];
    const defaultData = {
        Event: "Reward",
        Status: <span className='green-font'>Success</span>,
        Amount: 0.05,
        Fee: 0,
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
                        <div className="underline" />
                    </div>
                    <div className="mx-4">
                        <div className="">Withdraw</div>
                        <div className="underline" />
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