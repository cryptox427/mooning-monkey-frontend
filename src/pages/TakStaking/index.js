import { Row, Col } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import LogoFooterComponent from "../../components/LogoFooterComponent";
import AmountImg from '../../assets/images/amount.svg';
import ClockImg from '../../assets/images/clock.svg';
import StarImg from '../../assets/images/star.svg';
import BNBImg from '../../assets/images/bnb.png';
import MonkeyImg from '../../assets/images/monkey.png';
import './index.scss';

const TakStaking = (props) => {
    const chartOptions = {
        chart: {
            type: 'area',
            id: "basic-bar",
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            horizontalAlign: 'left'
        },
        labels: [30, 40, 45, 50, 49, 60, 70, 91],
        xaxis: {
            categories: [17, 18, 19, 20, 21, 22, 23, 24]
        },
        stroke: {
            curve: 'straight'
        },
        tooltip: {
            enabled: true
        },
        theme: {
            mode: 'dark'
        },
        colors: ['#F001F4']
    }

    const chartSeries = [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]

    return (
        <div className="staking-container">
            <div className="gradient-font staking-container-title">STAKING</div>
            <div className="main">
                <Row>
                    <Col sm={12} lg={12} xl={7}>
                        <div className="staking-container-left">
                            <div className="staking-container-left-top">
                                <div className="title">
                                    Available Staked TAK Balance 10’000
                                </div>
                                <div className="stake-component row">
                                    <div className="title col-lg-4 col-md-12">
                                        <img src={AmountImg} alt="amount" />
                                        Stake Amount
                                    </div>
                                    <div className="info col-lg-6 col-md-12">
                                        <div className="">Amount</div>
                                        <div className="">10'000 <span>max</span></div>
                                    </div>
                                </div>
                                <div className="lock-component row">
                                    <div className="title col-lg-4 col-md-12">
                                        <img src={ClockImg} alt="clock" />
                                        Lock in period (Days)
                                    </div>
                                    <div className="info col-lg-6 col-md-12">
                                        <div className="item">0</div>
                                        <div className="item">7</div>
                                        <div className="item">30</div>
                                        <div className="item">60</div>
                                        <div className="item">90</div>
                                        <div className="item">120</div>
                                    </div>
                                </div>
                                <div className="stake-component row">
                                    <div className="title col-lg-4 col-md-12">
                                        <img src={StarImg} alt="star" />
                                        Rewards
                                    </div>
                                    <div className="info col-lg-6 col-md-12">
                                        <div></div>
                                        <div><span className="pink-font">2'498</span> <span>$TAK</span></div>
                                    </div>
                                </div>
                                <div className="explain-component row">
                                    <div className="left col-lg-9 col-md-12">Only one TAK Staking per wallet is allowed. And, the minimum of the "TAB" TAK staked will be locked in for the full duration of the stake period.</div>
                                    <div className="right col-lg-3 col-md-12">
                                        On BSCscan.com<br />View Contract
                                        <img src={BNBImg} alt="bnb_image" />
                                    </div>
                                </div>
                            </div>
                            <div className="staking-container-left-bottom">
                                <div className="button-group">
                                    <div className="button">STAKE</div>
                                    <div className="button">UNSTAKE</div>
                                    <div className="button">CLAIM</div>
                                </div>
                                <div className="view-history white-btn">View History</div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} lg={12} xl={5}>
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
                                <ReactApexChart type="area" options={chartOptions} series={chartSeries} height={200}/>
                            </div>
                            <div className="staking-container-right-bottom">
                                <div className="button">
                                     Tutorial Video
                                </div>
                                <img src={MonkeyImg} alt="monkey_image" />
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