import { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import {connect} from 'react-redux'
import InputComponent from '../../../components/InputComponent';
import {GAME_STATE, betAmountMultiple} from '../../../utils/types'
import {getMaxCredits, betRequest, stopBet} from '../../../actions/betActions'



const AutoBet = (props) => {
    const {gameState, maxCredits, betState, gameResult} = props;
    
    const [betAmount, setBetAmount] = useState(1);
    const [autoCashOut, setAutoCashOut] = useState(1);
    const [totalBets, setTotalBets] = useState(1);
    const [onWin, setOnWin] = useState({
        amount: 1,
        increase: false,
        reset: true
    });
    const [onLoss, setOnLoss] = useState({
        amount: 1,
        increase: false,
        reset: true
    });
    const [firstData, setFirstData] = useState({
        cashOut: 0
    });
    const [stopOnProfit, setStopOnProfit] = useState(1);
    const [stopOnLoss, setStopOnLoss] = useState(1);
    const [infiniteMode, setInfiniteMode] = useState(false);
    const [wasStarted, setWasStarted] = useState(false);
    useEffect(
        () => {
            if(wasStarted) {    
                switch(gameState) {
                    case GAME_STATE.CRASHED:
                        if(!infiniteMode) {
                            if(totalBets > 0) {
                                setTotalBets(totalBets-1)
                                checkUpdateAutoValues()
                            }
                            else {
                                setWasStarted(false)
                            }
                        }          
                        else {
                            checkUpdateAutoValues()
                        }              
                    break;
                    case GAME_STATE.WAITING:
                        if(wasStarted) {
                            if(!betState) {
                                betRequest(betAmount, autoCashOut)
                            }
                        }                        
                    break;
                }
            }
        },
        [gameState],
    );
    const checkUpdateAutoValues = () => {
        if(gameResult > autoCashOut) {
            if(onWin.reset) {
                
            }
            else {

            }
        }
        else {

        }
    }
    const clickAutoBetBtn = () => {
        setInfiniteMode(totalBets === 0)
        setWasStarted(true)
        if(!betState) {
            betRequest(betAmount, autoCashOut)
        }
    }
    const clickStopBtn = () => {
        setWasStarted(false)
    }
    const clickOnWinRadioBtn = (e, param) => {
        if(e.target.checked) {
            if(param === "increase") {
                setOnWin({
                    ...onWin,
                    increase: true,
                    reset: false
                })
            }
            if(param === "reset") {
                setOnWin({
                    ...onWin,
                    increase: false,
                    reset: true
                })
            }
        }
    }
    const clickOnLossRadioBtn = (e, param) => {
        if(e.target.checked) {
            if(param === "increase") {
                setOnLoss({
                    ...onLoss,
                    increase: true,
                    reset: false
                })
            }
            if(param === "reset") {
                setOnLoss({
                    ...onLoss,
                    increase: false,
                    reset: true
                })
            }
        }
    }
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
    return (
        <div className="auto-bet bet-info">
            <div className="bet-amount bet-detail">
                <span className="title">Bet Amount</span>
                <span className="main-description">
                    <InputComponent type="number" prefix="$" valueChangeHandler={setBetAmount} defaultValue={betAmount}/>
                </span>
                <div className="sub-detail-content">
                <span className="detail amount-change-btn" onClick={()=>clickChangeBetAmountBtn(betAmountMultiple.half)}>1/2</span>
                    <span className="detail amount-change-btn" onClick={()=>clickChangeBetAmountBtn(betAmountMultiple.double)}>Double</span>
                    <span className="detail amount-change-btn" onClick={()=>clickChangeBetAmountBtn(betAmountMultiple.max)}>Max</span>
                    <span className="detail amount-change-btn" onClick={()=>clickChangeBetAmountBtn(betAmountMultiple.min)}>Min</span>
                </div>
            </div>
            <div className="bet-detail">
                <Row>
                <Col>
                    <div className="auto-cashout bet-detail">
                        <span className="title">Auto Cashout</span>
                        <span className="main-description">
                            <InputComponent type="number" prefix="$" valueChangeHandler={setAutoCashOut} defaultValue={autoCashOut}/>
                        </span>
                    </div>
                </Col>
                <Col>
                    <div className="total-bet bet-detail">
                        <span className="title">Total Bets</span>
                        <span className="main-description">
                            <InputComponent type="number" prefix="$" valueChangeHandler={setTotalBets} defaultValue={totalBets}/>
                        </span>
                        <div className="sub-detail-content">
                            <span className="detail">Ꚙ</span>
                        </div>
                    </div>
                </Col>
                </Row>
            </div>
            <div className="on-win bet-info-detail bet-detail">
                <span className="title">On Win</span>
                <span className="main-description">
                    <InputComponent type="number" prefix="%" valueChangeHandler={(amount)=>setOnWin({...onWin, amount: amount})} defaultValue={onWin.amount}/>
                </span>
                <div className="sub-detail-content">
                    <Form.Check onClick={(e)=>{clickOnWinRadioBtn(e, "increase")}} className="detail" type="radio" name="flexRadioDefault" id="increase" label="Increase"/>
                    <Form.Check onClick={(e)=>{clickOnWinRadioBtn(e, "reset")}} className="detail" type="radio" name="flexRadioDefault" id="decrease" label="Reset" defaultChecked/>
    
                </div>
            </div>

            <div className="on-loss bet-info-detail bet-detail">
                <span className="title">On Loss</span>
                <span className="main-description">
                    <InputComponent type="number" prefix="%" valueChangeHandler={(amount)=>setOnLoss({...onLoss, amount: amount})} defaultValue={onLoss.amount}/>
                </span>
                <div className="sub-detail-content">
                    <Form.Check onClick={(e)=>{clickOnLossRadioBtn(e, "increase")}} className="detail" type="radio" name="onLoss" id="loss-increase" label="Increase"/>
                    <Form.Check onClick={(e)=>{clickOnLossRadioBtn(e, "reset")}} className="detail" type="radio" name="onLoss" id="loss-decrease" label="Reset" defaultChecked/>
    
                </div>
            </div>
            
            <div className="bet-detail">
                <Row>
                <Col>
                    <div className="stop-on-profit bet-info-detail">
                        <span className="title">Stop On Profit</span>
                        <span className="main-description">
                            <InputComponent type="number" prefix="%" valueChangeHandler={setStopOnProfit} defaultValue={stopOnProfit}/>
                        </span>
                    </div>
                </Col>
                <Col>
                    <div className="stop-on-loss bet-info-detail">
                        <span className="title">Stop On Loss</span>
                        <span className="main-description">
                            <InputComponent type="number" prefix="%" valueChangeHandler={setStopOnLoss} defaultValue={stopOnLoss}/>
                        </span>
                        <div className="sub-detail-content">
                            <span className="detail">i</span>
                        </div>
                    </div>
                </Col>
                </Row>
            </div>
            {
                wasStarted?
                <div onClick={()=>clickStopBtn()} className="play-button start-auto-bet">
                    <span>Stop Autobet</span>
                </div>:
                <div onClick={()=>clickAutoBetBtn()} className="play-button start-auto-bet">
                    <span>Start Autobet</span>
                </div>
                
            }
            
        </div>
    );
}
const mapStateToProps  = (state) => (
    {
        betState: state.betData.betState,
        maxCredits: state.betData.maxCredits,
        gameResult: state.betGameData.gameResult,
        gameState: state.betGameData.gameState
    }
)

export default connect(mapStateToProps, {betRequest})(AutoBet)