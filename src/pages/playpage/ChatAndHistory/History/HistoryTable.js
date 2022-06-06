import {connect} from 'react-redux'

import './index.scss';
import HistoryCell from "./HistoryCell.js";

const testData = [
    {
        address: "1",
        gameDate: "1",
        bet: "5435",
        multiplier: "1",
        payout: "341",
        username: "asdf"
    },
    {
        address: "1",
        gameDate: "1",
        bet: "341",
        multiplier: "1",
        payout: "1",
        username: "asdf"
    },
    {
        address: "1",
        gameDate: "1",
        bet: "4531",
        multiplier: "1",
        payout: "1",
        username: "asdf"
    },
    {
        address: "1",
        gameDate: "1",
        bet: "1",
        multiplier: "1",
        payout: "341",
        username: "asdf"
    },
    {
        address: "1",
        gameDate: "1",
        bet: "5435",
        multiplier: "1",
        payout: "341",
        username: "asdf"
    },
    {
        address: "1",
        gameDate: "1",
        bet: "341",
        multiplier: "1",
        payout: "1",
        username: "asdf"
    },
    {
        address: "1",
        gameDate: "1",
        bet: "4531",
        multiplier: "1",
        payout: "1",
        username: "asdf"
    },
    {
        address: "1",
        gameDate: "1",
        bet: "1",
        multiplier: "1",
        payout: "341",
        username: "asdf"
    }
]
const HistoryTable = (props) => {
    const {gameHistory, type} = props;

    return (
        <div className="history-table">
            <div className="data-header">
                <div className="h-game">Game</div>
                {
                    type !== "wager" &&
                    <div className="h-username">User Name</div>
                }
                {
                    type !== "wager" &&
                    <div className="h-address">Address</div>
                }
                <div className="h-time">Time</div>
                <div className="h-wager">Wager</div>
                <div className="h-multi">multi</div>
                <div className="h-payout">Payout</div>
            </div>
            <div className="data-container">
                <table className="table">
                    
                    <tbody className="table-body">
                        {
                            gameHistory && 
                            (
                                gameHistory.length > 0 &&
                                gameHistory.map((data, index) => 
                                    <HistoryCell pay_type="bnb1" h_game="Crashgame" 
                                        h_address={data.address.substring(0, 8)} 
                                        h_username={data.username} 
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
            
        </div>

                    
    );
}

const mapStateToProps  = (state) => (
    {
        gameHistory: state.betGameData.gameHistory
    }
)

export default connect(mapStateToProps, {})(HistoryTable)