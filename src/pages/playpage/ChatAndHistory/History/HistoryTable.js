import {connect} from 'react-redux'

import './index.scss';
import HistoryCell from "./HistoryCell.js";

const HistoryTable = (props) => {
    const {gameHistory} = props;

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
                    {
                        gameHistory && 
                        (
                            gameHistory.length > 0 &&
                            gameHistory.map((data, index) => 
                                <HistoryCell pay_type="bnb1" h_game="Crashgame" 
                                h_address={data.address} 
                                h_time={data.gameDate} 
                                h_wager={data.bet} 
                                h_mult={data.multiplier} 
                                h_payout={data.payout}/>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>

                    
    );
}

const mapStateToProps  = (state) => (
    {
        gameHistory: state.betGameData.gameHistory
    }
)

export default connect(mapStateToProps, {})(HistoryTable)