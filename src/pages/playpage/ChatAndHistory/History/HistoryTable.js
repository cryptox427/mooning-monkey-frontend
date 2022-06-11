import {connect} from 'react-redux'

import './index.scss';
import HistoryCell from "./HistoryCell.js";
import {GAME_HISTORY_TYPE} from "../../../../utils/types";

const testData = [
    {
        address: "1fdgljdfgjreoijtoierj",
        gameDate: "1asfaewkjewlkjrkerjwtkertfgdsf;gkerl;tk;erltkl",
        bet: "5asdfasfewfwef435",
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
                    type !== GAME_HISTORY_TYPE.MY_WAGER &&
                    <div className="h-username">User Name</div>
                }
                {
                    type !== GAME_HISTORY_TYPE.MY_WAGER &&
                    <div className="h-address">Address</div>
                }
                <div className="h-time">Time</div>
                <div className="h-wager">Wager</div>
                <div className="h-multi">Multi</div>
                <div className="h-payout">Payout</div>
            </div>
            <div className="data-container">
                        {
                            gameHistory && 
                            (
                                gameHistory.length > 0 &&
                                gameHistory.map((data, index) => 
                                    <HistoryCell pay_type="bnb1" h_game="Crashgame" 
                                        h_address={data.address} 
                                        h_username={data.username} 
                                        h_time={data.gameDate} 
                                        h_wager={data.bet} 
                                        h_mult={data.multiplier} 
                                        h_payout={data.payout}
                                        type={type}/>
                                )
                            )
                        }
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