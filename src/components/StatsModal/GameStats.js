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
const GameStats = (props) => {
    const { stats, userName, chartOptions, chartSeries } = props;
    const [chartDataType, setChartDataType] = useState(ChartDataType[0])

    return (
        <div className="game-stats">
            <ul className="pl-4 stauts-bullet">
                <li key={1}>
                    <div className="share_detail">
                        <span>Users:</span>
                        <div>
                            <span>{stats.users}</span>
                        </div>
                    </div>
                </li>
                <li key={2}>
                    <div className="share_detail">
                        <span>Bets:</span>
                        <div>
                            <span>{stats.bets}</span>
                        </div>
                    </div>
                </li>
                <li key={3}>
                    <div className="share_detail">
                        <span>Bankroll:</span>
                        <div>
                            <span>x</span>
                        </div>
                    </div>
                </li>
                <li key={4}>
                    <div className="share_detail">
                        <span>Wagered:</span>
                        <div>
                            <span>${Number(stats.wagered).toFixed(2)}</span>
                        </div>
                    </div>
                </li>
                <li key={5}>
                    <div className="share_detail">
                        <span>Return to player:</span>
                        <div>
                            <span>x</span>
                        </div>
                    </div>
                </li>
                <li key={6}>
                    <div className="share_detail">
                        <span>Investors' profit:</span>
                        <div>
                            <span>${Number(stats.investorProfit).toFixed(2)}</span>
                        </div>
                    </div>
                </li>
                <li key={7}>
                    <div className="share_detail">
                        <span>Investors' all-time high profit:</span>
                        <div>
                            <span>${Number(stats.investorProfitATH).toFixed(2)}</span>
                        </div>
                    </div>
                </li>
                <li key={8}>
                    <div className="share_detail">
                        <span>Commission:</span>
                        <div>
                            <span>x</span>
                        </div>
                    </div>
                </li>
                <li key={9}>
                    <div className="share_detail">
                        <span>Total cashback:</span>
                        <div>
                            <span>x</span>
                        </div>
                    </div>
                </li>
                <li key={10}>
                    <div className="share_detail">
                        <span>Total winning bonus:</span>
                        <div>
                            <span>x</span>
                        </div>
                    </div>
                </li>
                <li key={11}>
                    <div className="share_detail">
                        <span>Total shared profit with the community:</span>
                        <div>
                            <span>x</span>
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
export default GameStats