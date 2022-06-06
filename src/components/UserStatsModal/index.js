import { Modal } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import { useState, useEffect } from 'react';
import './index.scss';
import {connect} from 'react-redux'
import {getUserStats, addFriend} from '../../actions/userActions';

const ChartDataType = [
    'ALL',
    'H',
    'D',
    'W',
    'M'
];
const UserStatsModal = (props) => {
    const { show, onHide, userName, clickAddBtn } = props;
    const [userStats, setUserStats] = useState({

    });
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
        async () => {
            if(show) {
                const statsData = await getUserStats(userName)
                if(statsData.length > 0) {
                    setUserStats ({
                        ...userStats,
                        betAmount: statsData[0][0],
                        totalWagered: statsData[0][1],
                        netProfit: statsData[0][2],
                        profitATH: statsData[0][3],
                        profitATL: statsData[0][4]
                    })
                }
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
            <Modal.Header closeButton closeVariant='white'>
                <Modal.Title><span>User Stats</span></Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <h5 className="title-midle mb-3 poppin-bold-txt">{userName}</h5>
                <p className="mt-3 poppin-light-txt"><span className="pink-monkey-text pr-2 poppin-light-txt">Joined:</span>Thu Oct 15 2020[11 months ago]</p>

                <div className="change-box-bottom-btn mt-3 three-dif-btn">
                    <button className="tip-btn">
                        Tip
                    </button>
                    <button onClick={()=>clickAddBtn(userName)} className="cta-btn add-friend-btn">
                        + Add Friend
                    </button>
                    <button className="block-user-btn">
                        Block User
                    </button>

                </div>

                <ul className="pl-4 stauts-bullet">
                    <li>
                        <div className="share_detail">
                            <span>Games Played:</span>
                            <div>
                                <span>{Number(userStats.betAmount).toFixed(2)}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="share_detail">
                            <span>Total Wagered:</span>
                            <div>
                                <span>{Number(userStats.totalWagered).toFixed(2)}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="share_detail">
                            <span>Net Profit:</span>
                            <div>
                                <span>+ {Number(userStats.netProfit).toFixed(2)}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="share_detail">
                            <span>Profit All Time High:</span>
                            <div>
                                <span>+ {Number(userStats.profitATH).toFixed(2)}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="share_detail">
                            <span>Profit All Time Low:</span>
                            <div>
                                <span>- {Number(userStats.profitATL).toFixed(2)}</span>
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

    }
)
export default connect(mapStateToProps, {addFriend})(UserStatsModal)