import InputComponent from "../../../components/InputComponent";

const ManualBet = (props) => {
    return (
        <div className="manual-bet">
            <div className="bet-amount bet-detail">
                <div className="bet-amount-left">
                    <span className="title">Bet Amount</span>
                    <div className="main-description">
                        <InputComponent prefix="$" defaultValue="5,00" />
                    </div>
                </div>
                <div className="sub-detail-content">
                    <span className="detail">1/2</span>
                    <span className="detail">Double</span>
                    <span className="detail">Max</span>
                    <span className="detail">Min</span>
                </div>
            </div>
            <div className="auto-cashout bet-detail">
                <span className="title">Auto Cashout</span>
                <span className="main-description">
                    <InputComponent prefix="$" defaultValue="25,00" />
                </span>
            </div>
            <div className="play-button">
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

export default ManualBet;