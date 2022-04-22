import TableComponent from '../../components/TableComponent';
import LogoWithGlowImg from '../../../src/assets/images/logo-with-glow.png';
import './index.scss';

const TransactionHistory = (props) => {
    const dataList = [];
    const defaultData = {
        Event: "Reward",
        Status: "Success",
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
            <div className='transaction-history-bottom'>
                <div className='transaction-history-bottom-logo'>
                    <img src={LogoWithGlowImg} />
                </div>
                <div className='transaction-history-bottom-info'>
                    <div className='title'>DISCLAIMER</div>
                    <div className=''>MooningMonkey.com offers games with an element of chance. By using this site you ensure that you are at least 18 years of age. You accept that we are not responsible for any violation of your local laws pertaining to online gaming and games of chance. Play responsibly and have a great time on MooningMonkey.com. May the luck be with you.</div>
                </div>
            </div>
        </div>
    );
}

export default TransactionHistory;