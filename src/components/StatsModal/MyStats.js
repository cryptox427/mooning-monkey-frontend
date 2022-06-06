import { Fragment, useState } from "react";
import ReactApexChart from "react-apexcharts";
import './index.scss';

const ChartDataType = [
    'ALL',
    'H',
    'D',
    'W',
    'M'
];
const MyStats = (props) => {
    const { stats, userName, chartOptions, chartSeries } = props;
    const [chartDataType, setChartDataType] = useState(ChartDataType[0])

    return (
        <div className="my-stats">
        <h5 className="title-midle mb-3 poppin-bold-txt">{userName}</h5>
                <p className="mt-3 poppin-light-txt"><span className="pink-monkey-text pr-2 poppin-light-txt">Joined:</span>Thu Oct 15 2020[11 months ago]</p>
                

                <ul className="pl-4 stauts-bullet">
                    <li key={1}>
                        <div className="share_detail">
                            <span>Games Played:</span>
                            <div>
                                <span>{stats.betAmount}</span>
                            </div>
                        </div>
                    </li>
                    <li  key={2}>
                        <div className="share_detail">
                            <span>Total Wagered:</span>
                            <div>
                                <span>{stats.totalWagered}</span>
                            </div>
                        </div>
                    </li>
                    <li key={3}>
                        <div className="share_detail">
                            <span>Net Profit:</span>
                            <div>
                                <span>+ {stats.netProfit}</span>
                            </div>
                        </div>
                    </li>
                    <li key={4}>
                        <div className="share_detail">
                            <span>Profit All Time High:</span>
                            <div>
                                <span>+ {stats.profitATH}</span>
                            </div>
                        </div>
                    </li>
                    <li key={5}>
                        <div className="share_detail">
                            <span>Profit All Time Low:</span>
                            <div>
                                <span>- {stats.profitATL}</span>
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
                </div>
    );
}
export default MyStats