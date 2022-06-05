import {connect} from 'react-redux'

import './index.scss';
import HistoryCell from "./HistoryCell.js";

const testData = [
    {
        address: "1",
        gameDate: "1",
        bet: "5435",
        multiplier: "1",
        payout: "341"
    },
    {
        address: "1",
        gameDate: "1",
        bet: "341",
        multiplier: "1",
        payout: "1"
    },
    {
        address: "1",
        gameDate: "1",
        bet: "4531",
        multiplier: "1",
        payout: "1"
    },
    {
        address: "1",
        gameDate: "1",
        bet: "1",
        multiplier: "1",
        payout: "341"
    }
]
const HistoryTable = (props) => {
    const {gameHistory, type} = props;

    return (
        <div className="history-table">
            <table className="table">
                <thead>
                    <tr className="table-header">
                        <th className="h-game">Game</th>
                        {
                            type !== "wager" &&
                            <th className="h-wager">Address</th>
                        }
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
                                h_payout={data.payout}
                                type={type}/>
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