import { useState, useEffect, Fragment } from 'react';
import { MDBBtn, MDBWaves } from "mdb-react-ui-kit";

import InputComponent from "../../../components/InputComponent";
import BottomLineInputComponent from "../../../components/BottomLineInputComponent";

import {connect} from 'react-redux'
import {getMaxCredits, betRequest, stopBet} from '../../../actions/betActions'
import {GAME_STATE, betAmountMultiple} from '../../../utils/types'

const ManualBet = (props) => {

    const {maxCredits, betState, betRequest, gameState, gameResult, myRecentWin, stopBet, bettedMultiplier} = props;
    const [betAmount, setBetAmount] = useState(1);
    const [multiplier, setMultiplier] = useState(1);
    const [cursorPos, setWaveState] = useState({});
    const [playerButtonStyle, setPlayerButtonStyle] = useState({disableBtn: false, buttonName: "Play"});
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
        stopBet();
    }

    const handleClick = e => {
        e.stopPropagation();
        // Waves - Get Cursor Position
        let cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now() // time indicates particular clicks
        };
        setWaveState({ cursorPos: cursorPos });
      };
    useEffect(
        () => {
            switch(gameState) {
                case GAME_STATE.WAITING:
                    if(betState) {
                        setPlayerButtonStyle({disableBtn: false, buttonName: "Stop Bet"})
                    }
                    else {
                        setPlayerButtonStyle({disableBtn: false, buttonName: "Play"})
                    }
                    break;
                case GAME_STATE.RUNNING:
                    if(betState) {
                        if(gameResult >= bettedMultiplier) {
                            setPlayerButtonStyle({disableBtn: true, buttonName: "Stop Bet"})
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
                <BottomLineInputComponent label="Bet Amount" className="fill-input moon-bet-input purple-bg-input-child" type="number" prefix="$" valueChangeHandler={setBetAmount} defaultValue={betAmount} />
                <div className="sub-detail-content">
                    <span className="detail amount-change-btn" tabindex="1" onClick={()=>clickChangeBetAmountBtn(betAmountMultiple.half)}>1/2</span>
                    <span className="detail amount-change-btn" tabindex="2"  onClick={()=>clickChangeBetAmountBtn(betAmountMultiple.double)}>Double</span>
                    <span className="detail amount-change-btn" tabindex="3" onClick={()=>clickChangeBetAmountBtn(betAmountMultiple.max)}>Max</span>
                    <span className="detail amount-change-btn" tabindex="4" onClick={()=>clickChangeBetAmountBtn(betAmountMultiple.min)}>Min</span>
                </div>
            </div>
           
            <div className="auto-cashout bet-detail">
                <BottomLineInputComponent label="Auto Cashout" 
                    className="fill-input moon-bet-input purple-bg-input-child" 
                    type="number" prefix="x" 
                    valueChangeHandler={setMultiplier} 
                    defaultValue={multiplier} />
                
            </div>
       
            <MDBBtn className="play-button" color='secondary' disabled={playerButtonStyle.disableBtn}
                    onClick={playerButtonStyle.buttonName === "Play"?()=>clickPlayBtn():()=>clickStopBtn()}>
                <span>{playerButtonStyle.buttonName}</span></MDBBtn>
            
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
                                <td>$ {Number(data.payout).toFixed(2)}</td>
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
        bettedMultiplier: state.betData.multiplier,
        gameState: state.betGameData.gameState,
        gameResult: state.betGameData.gameResult,
        myRecentWin: state.userData.myRecentWin
    }
)

export default connect(mapStateToProps, {getMaxCredits, betRequest, stopBet})(ManualBet)