import { useState, useEffect } from 'react';
import { Row, Col, Form, ButtonGroup, ToggleButton } from 'react-bootstrap';
import {connect} from 'react-redux'
import { MDBBtn, MDBWaves, MDBTooltip } from "mdb-react-ui-kit";
import { BsFillExclamationCircleFill } from 'react-icons/bs';

import InputComponent from '../../../components/InputComponent';
import {GAME_STATE, betAmountMultiple} from '../../../utils/types'
import {getMaxCredits, betRequest, stopBet} from '../../../actions/betActions'
import {setPopUp} from '../../../actions/gameActions'
import BottomLineInputComponent from "../../../components/BottomLineInputComponent";
import Tooltip from "../../../components/Tooltip";

let totalProfit = 0;
const AutoBet = (props) => {
    const {gameState, maxCredits, betState, gameResult} = props;
    
    const [betAmount, setBetAmount] = useState(1);
    const [autoCashOut, setAutoCashOut] = useState(1);
    const [totalBets, setTotalBets] = useState(1);
    const [onWin, setOnWin] = useState({
        amount: 1,
        type: "increase"
    });
    const [onLoss, setOnLoss] = useState({
        amount: 1,
        type: "increase"
    });
    const [firstData, setFirstData] = useState({
        cashOut: 0
    });
    const [stopOnProfit, setStopOnProfit] = useState(1);
    const [stopOnLoss, setStopOnLoss] = useState(1);
    const [infiniteMode, setInfiniteMode] = useState(false);
    const [wasStarted, setWasStarted] = useState(false);
    const [originalBetAmount, setOriginalBetAmount] = useState(0);
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
        totalProfit = 0;
        if(betAmount > 0) {    
            setInfiniteMode(totalBets === 0)
            setOriginalBetAmount(betAmount)
            setWasStarted(true)
            if(!betState) {
                betRequest(betAmount, autoCashOut)
            }
        }
        else {
            setPopUp("Set bet amount")
        }
    }
    const calcGameResult = () => {
        let profit = gameResult >= autoCashOut ? gameResult * betAmount : -gameResult * betAmount;
        totalProfit += profit;
    }
    const clickStopBtn = () => {
        totalProfit = 0;
        setWasStarted(false)
    }
    const clickOnWinRadioBtn = (param) => {
        setOnWin({
            ...onWin,
            type: param
        })
    }
    const clickOnLossRadioBtn = (param) => {
        setOnLoss({
            ...onLoss,
            type: param
        })
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
                <div className="auto-cashout bet-detail">
                    <BottomLineInputComponent label="Bet Amount" 
                        className="fill-input moon-bet-input purple-bg-input-child" 
                        type="number" prefix="$" 
                        valueChangeHandler={setBetAmount} 
                        defaultValue={betAmount} />
                </div>
                
                <div className="sub-detail-content">
                    <span className="detail amount-change-btn" tabindex="1" onClick={()=>clickChangeBetAmountBtn(betAmountMultiple.half)}>1/2</span>
                    <span className="detail amount-change-btn" tabindex="2" onClick={()=>clickChangeBetAmountBtn(betAmountMultiple.double)}>Double</span>
                    <span className="detail amount-change-btn" tabindex="3" onClick={()=>clickChangeBetAmountBtn(betAmountMultiple.max)}>Max</span>
                    <span className="detail amount-change-btn" tabindex="4" onClick={()=>clickChangeBetAmountBtn(betAmountMultiple.min)}>Min</span>
                </div>
            </div>
            <div className="bet-detail">
                <Row>
                <Col>
                    <div className="auto-cashout bet-detail">
                        <BottomLineInputComponent label="Auto Cashout" 
                            className="fill-input moon-bet-input purple-bg-input-child" 
                            type="number" prefix="$" 
                            valueChangeHandler={setAutoCashOut} 
                            defaultValue={autoCashOut} />
                    </div>
                </Col>
                <Col>
                    <div className="total-bet bet-detail">
                        <div className="auto-cashout bet-detail">
                            <BottomLineInputComponent label="Total Bets" 
                                className="fill-input moon-bet-input purple-bg-input-child" 
                                type="number" prefix="$" 
                                valueChangeHandler={setTotalBets} 
                                defaultValue={totalBets} />
                        </div>
                        <div className="sub-detail-content">
                            <span className="detail">Ꚙ</span>
                        </div>
                    </div>
                </Col>
                </Row>
            </div>
            <div className="on-win bet-info-detail bet-detail">
                <BottomLineInputComponent label="On Win" 
                    className="fill-input moon-bet-input purple-bg-input-child" 
                    type="number" prefix="%" 
                    valueChangeHandler={(amount)=>setOnWin({...onWin, amount: amount})} 
                    defaultValue={onWin.amount} />
                <div className="sub-detail-content">
                <ButtonGroup>
                    
                    <ToggleButton
                        id="radio-2"
                        type="radio"
                        className="on-win-radio"
                        name="on-win-radio"
                        value="reset"
                        checked={onWin.type === "reset"}
                        onChange={(e) => clickOnWinRadioBtn(e.target.value)}
                    >
                        Reset
                    </ToggleButton>
                    <ToggleButton
                        id="radio-1"
                        type="radio"
                        className="on-win-radio"
                        name="on-win-radio"
                        value={"increase"}
                        checked={onWin.type === "increase"}
                        onChange={(e) => clickOnWinRadioBtn(e.target.value)}
                    >
                        Increase
                    </ToggleButton>
                </ButtonGroup>
                </div>
            </div>

            <div className="on-loss bet-info-detail bet-detail">
                <BottomLineInputComponent label="On Loss" 
                    className="fill-input moon-bet-input purple-bg-input-child" 
                    type="number" prefix="%" 
                    valueChangeHandler={(amount)=>setOnWin({...onLoss, amount: amount})} 
                    defaultValue={onLoss.amount} />
                <div className="sub-detail-content">
                    <ButtonGroup>
                        
                        <ToggleButton
                            id="loss-radio-2"
                            type="radio"
                            className="on-loss-radio"
                            name="on-loss-radio"
                            value="reset"
                            checked={onLoss.type === "reset"}
                            onChange={(e) => clickOnLossRadioBtn(e.target.value)}
                        >
                            Reset
                        </ToggleButton>
                        <ToggleButton
                            id="loss-radio-1"
                            type="radio"
                            className="on-loss-radio"
                            name="on-loss-radio"
                            value={"increase"}
                            checked={onLoss.type === "increase"}
                            onChange={(e) => clickOnLossRadioBtn(e.target.value)}
                        >
                            Increase
                        </ToggleButton>
                    </ButtonGroup>
                </div>
            </div>
            
            <div className="bet-detail">
                <Row>
                <Col>
                <div className="bet-detail">
                    <div className="stop-on-profit bet-info-detail">
                        <BottomLineInputComponent label="Stop On Profit" 
                            className="fill-input moon-bet-input purple-bg-input-child" 
                            type="number" prefix="%" 
                            valueChangeHandler={setStopOnProfit} 
                            defaultValue={stopOnProfit} />
                    </div>
                    
                    <div className="sub-detail-content">
                        <Tooltip
                            width="300px"
                            content="Use Stop onProfit to stop autobet after profiting a specified amount.For example, if you start with $100 and you set Stop on Profit to $25: if your balance went above $125 autobet will stop." 
                            direction="bottom">
                            <span className="detail"><BsFillExclamationCircleFill/></span>
                        </Tooltip>
                    </div>
                    
                </div>
                </Col>
                <Col>
                <div className="bet-detail">
                    <div className="stop-on-loss bet-info-detail">
                        <BottomLineInputComponent label="Stop On Loss" 
                            className="fill-input moon-bet-input purple-bg-input-child" 
                            type="number" prefix="%" 
                            valueChangeHandler={setStopOnLoss} 
                            defaultValue={stopOnLoss} />
                        
                    </div>
                    <div className="sub-detail-content">
                        <Tooltip
                            width="300px"
                            content="Use Stop onProfit to stop autobet after profiting a specified amount.For example, if you start with $100 and you set Stop on Profit to $25: if your balance went above $125 autobet will stop." 
                            direction="bottom">
                            <span className="detail"><BsFillExclamationCircleFill/></span>
                        </Tooltip>
                    </div>
                    </div>
                </Col>
                </Row>
            </div>
            {
                wasStarted?
                <MDBBtn className="play-button start-auto-bet" color='secondary'
                        onClick={()=>clickStopBtn()}>
                    <span>Stop Autobet</span></MDBBtn>
                :
                <MDBBtn className="play-button start-auto-bet" color='secondary'
                        onClick={()=>clickAutoBetBtn()}>
                    <span>Start Autobet</span></MDBBtn>
                
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