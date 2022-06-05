import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import {Tab, Nav} from 'react-bootstrap';
import './index.scss';
import {connect} from 'react-redux'
import {getStats} from '../../actions/userActions';

const ChartDataType = [
    'ALL',
    'H',
    'D',
    'W',
    'M'
];
const StatsModal = (props) => {
    const { show, onHide, stats, getStats, userName } = props;
    const [chartDataType, setChartDataType] = useState(ChartDataType[0])
    const chartOptions = {
        chart: {
            type: 'area',
            id: "basic-bar",
            zoom: {
                enabled: false
            },
            background: 'rgba(52, 52, 52, 0)'

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
            curve: 'straight',
            width: 1
        },
        fill: {
            type: 'gradient',
            gradient: {
              opacityFrom: 0.6,
              opacityTo: 0.8,
            }
          },
        tooltip: {
            enabled: true
        },
        theme: {
            mode: 'dark'
        },
        colors: ['#F001F4']
    }
    useEffect(
        () => {
            if(show) {
                getStats()
            }
        },
        [show],
    );
    const chartSeries = [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]

    return (
        <Modal show={show} onHide={onHide} className="monkey-modal stats-modal">
            <Tab.Container id="left-tabs-example" defaultActiveKey="deposit">
                <Modal.Header closeButton closeVariant='white'>
                    <Nav variant="pills" className="nav-tabs modal-nav-tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="deposit">My Stats</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="withdraw">Game Stats</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Modal.Header>
            </Tab.Container>
            <Modal.Body>
                <h5 className="title-midle mb-3 poppin-bold-txt">{userName}</h5>
                <p className="mt-3 poppin-light-txt"><span className="pink-monkey-text pr-2 poppin-light-txt">Joined:</span>Thu Oct 15 2020[11 months ago]</p>
                

                <ul className="pl-4 stauts-bullet">
                    <li>
                        <div className="share_detail">
                            <span>Games Played:</span>
                            <div>
                                <span>{stats.users}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="share_detail">
                            <span>Total Wagered:</span>
                            <div>
                                <span>X{stats.wagered}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="share_detail">
                            <span>Net Profit:</span>
                            <div>
                                <span>+ X{stats.investorProfit}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="share_detail">
                            <span>Profit All Time High:</span>
                            <div>
                                <span>+ X{stats.investorProfitATH}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="share_detail">
                            <span>Profit All Time Low:</span>
                            <div>
                                <span>- X{stats.investorProfitATH}</span>
                            </div>
                        </div>
                    </li>
                </ul>


                <p className="mt-4"><span className="pink-monkey-text pr-2">Hint:</span>Click and drag to zoom, hold shift to pan.</p>


                <div className="">
                    <div className="chart-header">
                        <h5 className="chart-title">Games played</h5>
                        <div className="chart-data-type">
                            {
                                ChartDataType.map(data => 
                                    <button className={`type ${chartDataType === data ? 'selected-type' : ''}`}
                                        onClick={()=>setChartDataType(data)}>{data}</button>
                                )
                            }
                        </div>
                    </div>
                    <ReactApexChart type="area" options={chartOptions} series={chartSeries} height={200}/>
                
                </div>

                <div className="total-info">
                    <p className="detail">Average daily bet: 1,387</p>
                    <p className="detail">Average weekly bet: 9,709</p>
                    <p className="detail">Average monthly bet: 9,709</p>
                </div>
            </Modal.Body>
        </Modal>
    );
}
const mapStateToProps  = (state) => (
    {
        stats: state.userData.stats,
        userName: state.userData.userName
    }
)
export default connect(mapStateToProps, {getStats})(StatsModal)