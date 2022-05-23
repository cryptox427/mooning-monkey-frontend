import { useState, useEffect } from 'react';

import InputComponent from "../../../components/InputComponent";
import {connect} from 'react-redux'
import {getMaxCredits, betRequest, stopBet} from '../../../actions/betActions'
import {GAME_STATE} from '../../../utils/types'

const ManualBet = (props) => {

    const {maxCredits, betState, betRequest, gameState, gameResult, myRecentWin, stopBet} = props;
    const [betAmount, setBetAmount] = useState(1);
    const [multiplier, setMultiplier] = useState(1);
    const [playerButtonStyle, setPlayerButtonStyle] = useState({disableBtn: false, buttonName: "Play"});

    const betAmountMultiple = {
        half: 'half',
        double: 'double',
        max: 'max',
        min: 'min'
    };

    const clickChangeBetAmountBtn = (multipleAmount) => {
        let _betAmount = 0;
        switch(multipleAmount) {
            case betAmountMultiple.half:
                _betAmount = betAmount / 2 > 1 ? betAmount / 2 : 1;
                setBetAmount(_betAmount);
                break;
            case betAmountMultiple.double:
                _betAmount = betAmount * 2 < maxCredits ? betAmount * 2 : maxCredits;
                setBetAmount(_betAmount);
                break;
            case betAmountMultiple.max:
                setBetAmount(maxCredits);
                break;
            case betAmountMultiple.min:
                setBetAmount(1);
                break;
        }
    }
    const clickPlayBtn = () => {
        console.log("clickPlayBtn")
        betRequest(betAmount, multiplier);
    }
    const clickStopBtn = () => {
        console.log("clickStopBtn")
        betRequest(betAmount, multiplier);
    }
    useEffect(
        () => {
            switch(gameState) {
                case GAME_STATE.WAITING:
                    setPlayerButtonStyle({disableBtn: false, buttonName: "Play"})
                    break;
                case GAME_STATE.RUNNING:
                    if(betState) {
                        if(gameResult >= multiplier) {
                            setPlayerButtonStyle({disableBtn: true, buttonName: "Play"})
                        }
                        else {
                            setPlayerButtonStyle({disableBtn: false, buttonName: "Stop Bet"})
                        }
                    }
                    else {
                        setPlayerButtonStyle({disableBtn: true, buttonName: "Play"})
                    }
                    break;
                case GAME_STATE.CRASHED:
                    setPlayerButtonStyle({disableBtn: true, buttonName: "Play"})
                    break;
            }
        },
        [gameState, betState, gameResult],
    );

    return (
        <div className="manual-bet">
            <div className="bet-amount bet-detail">
                <div className="bet-amount-left">
                    <span className="title">Bet Amount</span>
                    <div className="main-description">
                        <InputComponent type="number" prefix="$" valueChangeHandler={setBetAmount} defaultValue={betAmount} />
                    </div>
                </div>
                <div className="sub-detail-content">
                    <span className="detail amount-change-btn" onClick={()=>clickChangeBetAmountBtn(betAmountMultiple.half)}>1/2</span>
                    <span className="detail amount-change-btn" onClick={()=>clickChangeBetAmountBtn(betAmountMultiple.double)}>Double</span>
                    <span className="detail amount-change-btn" onClick={()=>clickChangeBetAmountBtn(betAmountMultiple.max)}>Max</span>
                    <span className="detail amount-change-btn" onClick={()=>clickChangeBetAmountBtn(betAmountMultiple.min)}>Min</span>
                </div>
            </div>
            <div className="auto-cashout bet-detail">
                <span className="title">Auto Cashout</span>
                <span className="main-description">
                    <InputComponent prefix="x"  type="number" defaultValue="25" valueChangeHandler={setMultiplier} defaultValue={multiplier} />
                </span>
            </div>
            <button type="button" className="play-button" disabled={playerButtonStyle.disableBtn} 
                onClick={playerButtonStyle.buttonName === "Play"?()=>clickPlayBtn():()=>clickStopBtn()}>
                <span>{playerButtonStyle.buttonName}</span>
            </button>
            <div className="my-recent-wins">
                <div className="title"><span>My Recent Wins</span></div>
                <table className="table">
                    <tr>
                        <th>Wager</th>
                        <th>Mult</th>
                        <th>Payout</th>
                    </tr>
                    <tbody>
                    {
                        myRecentWin.length > 0 &&
                        myRecentWin.map((data, index) => 
                            <tr>
                                <td>$ {data.bet}</td>
                                <td>{data.multiplier}X</td>
                                <td>$ {data.payout}</td>
                            </tr>
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
        maxCredits: state.betData.maxCredits,
        betState: state.betData.betState,
        gameState: state.betGameData.gameState,
        gameResult: state.betGameData.gameResult,
        myRecentWin: state.userData.myRecentWin
    }
)

export default connect(mapStateToProps, {getMaxCredits, betRequest, stopBet})(ManualBet)