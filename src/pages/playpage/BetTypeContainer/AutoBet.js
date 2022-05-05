import { Row, Col } from 'react-bootstrap';
import InputComponent from '../../../components/InputComponent';

const AutoBet = (props) => {
    return (
        <div className="auto-bet bet-info">
            <div className="bet-amount bet-detail">
                <span className="title">Bet Amount</span>
                <span className="main-description">
                    <InputComponent prefix="$" defaultValue="5,00" />
                </span>
                <div className="sub-detail-content">
                    <span className="detail">1/2</span>
                    <span className="detail">2x</span>
                    <span className="detail">Max</span>
                </div>
            </div>
            <div className="bet-detail">
                <Row>
                <Col>
                    <div className="auto-cashout bet-detail">
                        <span className="title">Auto Cashout</span>
                        <span className="main-description">
                            <InputComponent prefix="$" defaultValue="5,00" />
                        </span>
                    </div>
                </Col>
                <Col>
                    <div className="total-bet bet-detail">
                        <span className="title">Total Bets</span>
                        <span className="main-description">1</span>
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
                    <InputComponent prefix="%" defaultValue="5,00" />
                </span>
                <div className="sub-detail-content">
                    <span className="detail">Increase</span>
                    <span className="detail">Reset</span>
                </div>
            </div>

            <div className="on-loss bet-info-detail bet-detail">
                <span className="title">On Loss</span>
                <span className="main-description">
                    <InputComponent prefix="%" defaultValue="5,00" />
                </span>
                <div className="sub-detail-content">
                    <span className="detail">Increase</span>
                    <span className="detail">Reset</span>
                </div>
            </div>
            
            <div className="bet-detail">
                <Row>
                <Col>
                    <div className="stop-on-profit bet-info-detail">
                        <span className="title">Stop On Profit</span>
                        <span className="main-description">
                            <InputComponent prefix="%" defaultValue="5,00" />
                        </span>
                    </div>
                </Col>
                <Col>
                    <div className="stop-on-loss bet-info-detail">
                        <span className="title">Stop On Loss</span>
                        <span className="main-description">1</span>
                        <div className="sub-detail-content">
                            <span className="detail">i</span>
                        </div>
                    </div>
                </Col>
                </Row>
            </div>

            <div className="play-button start-auto-bet">
                <span>Start Autobet</span>
            </div>
            
        </div>
    );
}

export default AutoBet;