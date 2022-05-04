import './index.scss';
import ContainerComponent from "../../../../components/ContainerComponent";
import HistoryCell from "./HistoryCell.js";

const History = (props) => {
    return (
        <div className="w-80 m-auto flex flex-col players">
            <div className='' style={{display: 'flex', color: 'white', margin: '4px 0'}}>
                <div className=''>All</div>
                <div className='' style={{margin: '0 16px'}}>High Wins</div>
                <div className=''>lucky Wins</div>
            </div>
            <div className="player-table">
                <div className="chat-history">
                    <div className="table-scroll-content">
                        <table className="table table-borderless players-table chat-history-table mt-2">
                        
                        <thead>
                            <tr className="odd">
                            <th>Game</th>
                            <th>Address</th>
                            <th>Time</th>
                            <th>Wager</th>
                            <th>Mult</th>
                            <th>Payout</th>
                            </tr>
                            
                        </thead>
                            

                        <tr>
                            <td>Crash</td>
                            <td className="pink">Name</td>
                            <td>10:36 AM</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                            <td className="text-green">1.23x</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td>Crash</td>
                            <td className="pink">Name</td>
                            <td>10:36 AM</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                            <td className="text-green">1.23x</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Crash</td>
                            <td className="pink">Name</td>
                            <td>10:36 AM</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                            <td className="text-green">1.23x</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td>Crash</td>
                            <td className="pink">Name</td>
                            <td>10:36 AM</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                            <td className="text-green">1.23x</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Crash</td>
                            <td className="pink">Name</td>
                            <td>10:36 AM</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                            <td className="text-green">1.23x</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td>Crash</td>
                            <td className="pink">Name</td>
                            <td>10:36 AM</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                            <td className="text-green">1.23x</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Crash</td>
                            <td className="pink">Name</td>
                            <td>10:36 AM</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                            <td className="text-green">1.23x</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td>Crash</td>
                            <td className="pink">Name</td>
                            <td>10:36 AM</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                            <td className="text-green">1.23x</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Crash</td>
                            <td className="pink">Name</td>
                            <td>10:36 AM</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                            <td className="text-green">1.23x</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td>Crash</td>
                            <td className="pink">Name</td>
                            <td>10:36 AM</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                            <td className="text-green">1.23x</td>
                            <td>
                                <div className="coin-part">
                                <span className="text-green">
                                    +$2.50
                                </span>
                                <div className="coin-img">
                                    <img src="images/bitcoin.svg" alt="" />
                                </div>
                                </div>
                            </td>
                        </tr>
                        
        
                        </table>
                    </div>
                    
                    </div>
            </div>
        </div>
    );
}

export default History;