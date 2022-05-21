import { useState } from 'react';

import InputComponent from "../../../components/InputComponent";
import {request, postRequest} from '../../../utils/request';
import {connect} from 'react-redux'
import {getMaxCredits, betRequest} from '../../../actions/betActions'
const creditsUrl = 'http://localhost/getCredits.php';
const betUrl = 'http://localhost/bet.php';

const ManualBet = (props) => {

    const {maxCredits, betState, betRequest, publicKey} = props;
    const [betAmount, setBetAmount] = useState(1);
    const [multiplier, setMultiplier] = useState(1);
    
    const betAmountMultiple = {
        half: 'half',
        double: 'double',
        max: 'max',
        min: 'min'
    };

    const clickChangeBetAmountBtn = (multipleAmount) => {
        switch(multipleAmount) {
            case betAmountMultiple.half:
                setMultiplier(1 / 2);
                break;
            case betAmountMultiple.double:
                setMultiplier(2);
                break;
            case betAmountMultiple.max:
                setMultiplier(maxCredits / betAmount);
                break;
            case betAmountMultiple.min:
                setMultiplier(1);
                break;
        }
    }
    const clickPlayBtn = () => {
        console.log("clickPlayBtn")
        betRequest(publicKey, betAmount, multiplier);
    }
    
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
                    <InputComponent prefix="$" defaultValue="25" />
                </span>
            </div>
            <div className={`play-button ${betState ? 'disable-bet' : 'enable-bet'}`} onClick={()=>clickPlayBtn()}>
                <span>Play</span>
            </div>
            <div className="my-recent-wins">
                <div className="title"><span>My Recent Wins</span></div>
                <table className="table">
                    <tr>
                        <th>Wager</th>
                        <th>Mult</th>
                        <th>Payout</th>
                    </tr>
                    <tr>
                        <td>X amount</td>
                        <td>2.50X</td>
                        <td>X amount</td>
                    </tr>
                    <tr>
                        <td>X amount</td>
                        <td>2.50X</td>
                        <td>X amount</td>
                    </tr>
                    <tr>
                        <td>X amount</td>
                        <td>2.50X</td>
                        <td>X amount</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

const mapStateToProps  = (state) => (
    {
        maxCredits: state.betData.maxCredits,
        betState: state.betData.betState,
        publicKey: state.userData.publicKey
    }
)

export default connect(mapStateToProps, {getMaxCredits, betRequest})(ManualBet)