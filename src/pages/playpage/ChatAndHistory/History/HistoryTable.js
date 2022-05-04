import './index.scss';
import HistoryCell from "./HistoryCell.js";

const HistoryTable = (props) => {
    
    return (
        <div className="history-table">
            <table className="table">
                <thead>
                    <tr className="table-header">
                        <th className="h-game">Game</th>
                        <th className="h-wager">Address</th>
                        <th className="h-time">Time</th>
                        <th className="h-wager">Wager</th>
                        <th className="h-multi">multi</th>
                        <th className="h-payout">Payout</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    <HistoryCell pay_type="bnb1" h_game="Crash" h_address="Hidden" h_time="10:36 AM" h_wager="$2.50" h_mult="1.23x" h_payout="$100.00"/>
                    <HistoryCell pay_type="bnb1" h_game="Crash" h_address="Hidden" h_time="10:36 AM" h_wager="$2.50" h_mult="1.23x" h_payout="$100.00"/>
                    <HistoryCell pay_type="bnb1" h_game="Crash" h_address="Hidden" h_time="10:36 AM" h_wager="$2.50" h_mult="1.23x" h_payout="$100.00"/>
                    <HistoryCell pay_type="bnb1" h_game="Crash" h_address="Hidden" h_time="10:36 AM" h_wager="$2.50" h_mult="1.23x" h_payout="$100.00"/>
                    <HistoryCell pay_type="bnb1" h_game="Crash" h_address="Hidden" h_time="10:36 AM" h_wager="$2.50" h_mult="1.23x" h_payout="$100.00"/>
                    <HistoryCell pay_type="bnb1" h_game="Crash" h_address="Hidden" h_time="10:36 AM" h_wager="$2.50" h_mult="1.23x" h_payout="$100.00"/>
                    <HistoryCell pay_type="bnb1" h_game="Crash" h_address="Hidden" h_time="10:36 AM" h_wager="$2.50" h_mult="1.23x" h_payout="$100.00"/>
                    <HistoryCell pay_type="bnb1" h_game="Crash" h_address="Hidden" h_time="10:36 AM" h_wager="$2.50" h_mult="1.23x" h_payout="$100.00"/>
                    
                    <HistoryCell pay_type="bnb1" h_game="Crash" h_address="Hidden" h_time="10:36 AM" h_wager="$2.50" h_mult="1.23x" h_payout="$100.00"/>
                </tbody>
            </table>
        </div>

                    
    );
}

export default HistoryTable;