import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import './index.scss';
import {connect} from 'react-redux'
import {getStats} from '../../actions/userActions';

const StatsModal = (props) => {
    const { show, onHide, stats, getStats } = props;
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
            <Modal.Header closeButton closeVariant='white'>
                <Modal.Title><span>STATS</span></Modal.Title>

            </Modal.Header>
            <Modal.Body>

                <div className="mt-4"><span className="pink-monkey-text pr-2">Hint:</span>Click and drag to zoom, hold shift to pan.</div>

                <ul className="pl-4 stauts-bullet">
                <li>
                    <div className="share_detail">
                    <span>Users</span>
                    <div>
                        
                        <span>{stats.users}</span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Bets</span>
                    <div>
                   
                        <span>{stats.bets}</span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Bankroll</span>
                    <div>
                        <span style={{color: "#6968B8"}}>X %</span>
                        <span> X </span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Wagered</span>
                    <div>
                        <span> $ {stats.wagered}</span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Return to the player</span>
                    <div>
                        <span style={{color: "#6968B8"}}>X %</span>
                        <span> X</span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Investors profit</span>
                    <div>
                        
                        <span> $ {stats.investorProfit}</span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Investors all-time high profit   </span>
                    <div>
                        
                        <span> $ {stats.investorProfitATH}</span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Commission</span>
                    <div>
                        <span style={{color: "#6968B8"}}>X %</span>
                        <span> X</span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Total cashback</span>
                    <div>
                        <span style={{color: "#6968B8"}}>X %</span>
                        <span> X</span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Total winning bonus</span>
                    <div>
                        <span style={{color: "#6968B8"}}>X %</span>
                        <span> X </span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Total Shared profit with the community</span>
                    <div>
                        <span style={{color: "#6968B8"}}>X %</span>
                        <span> X </span>
                    </div>
                    
                </div>
                </li>
                
                
                
                </ul>


                <p className="mt-4"><span className="pink-monkey-text pr-2">Hint:</span>Click and drag to zoom, hold shift to pan.</p>


                <div className="">
                <div >
                    <ReactApexChart type="area" options={chartOptions} series={chartSeries} height={200}/>
                </div>
                </div>

                <p className="text-center">Interested in participating in the bankroll? Click <a href="#" className="pink-monkey-text">here </a>  to invest!</p>
            </Modal.Body>
        </Modal>
    );
}
const mapStateToProps  = (state) => (
    {
        stats: state.userData.stats
    }
)
export default connect(mapStateToProps, {getStats})(StatsModal)