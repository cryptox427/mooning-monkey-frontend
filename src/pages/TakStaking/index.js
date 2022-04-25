import { Row, Col } from "react-bootstrap";
import LogoFooterComponent from "../../components/LogoFooterComponent";
import './index.scss';

const TakStaking = (props) => {
    return (
        <div className="staking-container">
            <div className="gradient-font staking-container-title">STAKING</div>
            <div className="main">
                <Row>
                    <Col sm={12} lg={7}>
                        <div className="staking-container-left">
                            <div className="staking-container-left-top">
                                <div className="title">Available Staked TAK Balance 10’000</div>
                                <div className="stake-component">
                                    <div className="title">Stake Amount</div>
                                    <div className="info">
                                        <div className="">Amount</div>
                                        <div className="">10'000 <span>max</span></div>
                                    </div>
                                </div>
                                <div className="lock-component">
                                    <div className="title">Lock in period (Days)</div>
                                    <div className="info">
                                        <div className="item">0</div>
                                        <div className="item">7</div>
                                        <div className="item">30</div>
                                        <div className="item">60</div>
                                        <div className="item">90</div>
                                        <div className="item">120</div>
                                    </div>
                                </div>
                                <div className="stake-component">
                                    <div className="">Rewards</div>
                                    <div className="info">
                                        <div></div>
                                        <div>2'498 <span>$TAK</span></div>
                                    </div>
                                </div>
                                <div className="explain-component">
                                    <div className="left">Only one TAK Staking per wallet is allowed. And, the minimum of the "TAB" TAK staked will be locked in for the full duration of the stake period.</div>
                                    <div className="right">On BSCscan.com View Contract</div>
                                </div>
                            </div>
                            <div className="staking-container-left-bottom">
                                <div className="button-group">
                                    <div className="button">STAKE</div>
                                    <div className="button">UNSTAKE</div>
                                    <div className="button">CLAIM</div>
                                </div>
                                <div className="view-history">View History</div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} lg={5}>
                        <div className="staking-container-right">
                            <div className="staking-container-right-top">
                                <Row>
                                    <Col>
                                        <div className="title">Market Data</div>
                                        <div className="detail">
                                            <div className="sub-title">Total Tak Reward Pool</div>
                                            <div className="info">X TAK</div>
                                        </div>
                                        <div className="detail">
                                            <div className="sub-title">Total Tak Rewards Left</div>
                                            <div className="info">X TAK</div>
                                        </div>
                                        <div className="detail">
                                            <div className="sub-title">TAK Circ. Supply Staked</div>
                                            <div className="info">X%</div>
                                        </div>
                                        <div className="detail">
                                            <div className="sub-title">TVL</div>
                                            <div className="info">$X</div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="title">My Data</div>
                                        <div className="detail">
                                            <div className="sub-title">My TAK Staked</div>
                                            <div className="info">X TAK</div>
                                        </div>
                                        <div className="detail">
                                            <div className="sub-title">My TAK Earned</div>
                                            <div className="info">X TAK</div>
                                        </div>
                                        <div className="detail">
                                            <div className="sub-title">Locked Until</div>
                                            <div className="info">XX/XX/XX</div>
                                        </div>
                                        <div className="detail">
                                            <div className="sub-title">APY</div>
                                            <div className="info">X%</div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="chart-option">
                                    <div className="">STAKING REWARD</div>
                                    <div className="item-list">
                                        <span className="item">H</span>
                                        <span className="item">D</span>
                                        <span className="item">W</span>
                                        <span className="item">M</span>
                                        <span className="item">ALL</span>
                                    </div>
                                </div>
                            </div>
                            <div className="staking-container-right-bottom">
                                <div className="button">
                                     Tutorial Video
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <LogoFooterComponent />
        </div>
    );
}

export default TakStaking;