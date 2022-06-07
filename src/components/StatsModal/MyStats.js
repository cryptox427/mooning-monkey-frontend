import { Fragment, useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

import {getMyStatsChartData} from '../../actions/userActions';
import {MY_STATS_CHART_TYPE} from '../../utils/types';

import './index.scss';

const ChartTimeFrame = [
    'ALL',
    'H',
    'D',
    'W',
    'M'
];
const testData = [[4,"22-05-22"],[64,"22-05-23"],[8,"22-06-06"]];
const MyStats = (props) => {
    const { stats, userName, chartOptions, chartSeries } = props;
    const [chartTimeFrame, setChartTimeFrame] = useState(ChartTimeFrame[0])
    const [chartData, setChartData] = useState({
        dataType: '',
        timeFrame: ChartTimeFrame[0],
        data: []
    })
    const onClickChartBtn = async (chartType) => {
        const _chartData = testData//await getMyStatsChartData(chartType, chartData.timeFrame)
        setChartData({
            ...chartData,
            dataType: chartType,
            data: _chartData
        })
    }
    const onClickTimeFrameBtn = async (timeFrame) => {
        const _chartData = await getMyStatsChartData(chartData.dataType, timeFrame)
        setChartData({
            ...chartData,
            timeFrame: timeFrame,
            data: _chartData
        })
    }
    
    useEffect(
        () => {
            onClickChartBtn(MY_STATS_CHART_TYPE.GAME_PLAYED)
        },
        [],
    );
    return (
        <div className="my-stats">
        <h5 className="title-midle mb-3 poppin-bold-txt">{userName}</h5>
                <p className="mt-3 poppin-light-txt"><span className="pink-monkey-text pr-2 poppin-light-txt">Joined:</span>Thu Oct 15 2020[11 months ago]</p>
                

                <ul className="pl-4 stauts-bullet">
                    <li key={1}>
                        <div className="share_detail">
                            <button className="chart-data-get-btn" onClick={()=>onClickChartBtn(MY_STATS_CHART_TYPE.GAME_PLAYED)}>Games Played:</button>
                            <div>
                                <span>{stats.betAmount}</span>
                            </div>
                        </div>
                    </li>
                    <li  key={2}>
                        <div className="share_detail">
                            <button className="chart-data-get-btn" onClick={()=>onClickChartBtn(MY_STATS_CHART_TYPE.TOTAL_WAGERED)}>Total Wagered:</button>
                            <div>
                                <span>{stats.totalWagered}</span>
                            </div>
                        </div>
                    </li>
                    <li key={3}>
                        <div className="share_detail">
                            <button className="chart-data-get-btn" onClick={()=>onClickChartBtn(MY_STATS_CHART_TYPE.NET_PROFIT)}>Net Profit:</button>
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
                    {
                        chartData.dataType !== '' &&
                        <div className="chart-header">
                            {
                                chartData.dataType === MY_STATS_CHART_TYPE.GAME_PLAYED &&
                                <h5 className="chart-title">Games played</h5>
                            }
                            {
                                chartData.dataType === MY_STATS_CHART_TYPE.TOTAL_WAGERED &&
                                <h5 className="chart-title">Total Wagered</h5>
                            }
                            {
                                chartData.dataType === MY_STATS_CHART_TYPE.NET_PROFIT &&
                                <h5 className="chart-title">Net Profit</h5>
                            }
                            <div className="chart-data-type">
                                {
                                    ChartTimeFrame.map(data => 
                                        <button className={`type ${chartData.timeFrame === data ? 'selected-type' : ''}`}
                                            onClick={()=>onClickTimeFrameBtn(data)}>{data}</button>
                                    )
                                }
                            </div>
                        </div>
                    }
                    {
                        chartData.data.length > 0 &&
                        <ReactApexChart type="area"
                            height={200}
                            options={{...chartOptions, xaxis: {categories: chartData.data.map(data => data[1])}}} series={[
                                {
                                    type: 'area',
                                    name: "",
                                    data: chartData.data.map(data => data[0])
                                }
                            ]}
                        />
                    
                    }
                    
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