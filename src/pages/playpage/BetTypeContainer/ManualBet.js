const ManualBet = (props) => {
    return (
        <div className="manual-bet">
            <div className="bet-amount bet-detail">
                <span className="title">Bet Amount</span>
                <span className="main-description">$ 5,00</span>
                <div className="sub-detail-content">
                    <span className="detail">1/2</span>
                    <span className="detail">Double</span>
                    <span className="detail">Max</span>
                    <span className="detail">Min</span>
                </div>
            </div>
            <div className="auto-cashout bet-detail">
                <span className="title">Auto Cashout</span>
                <span className="main-description">$ 25,00</span>
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