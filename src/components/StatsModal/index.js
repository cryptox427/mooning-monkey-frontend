import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import {Tab, Nav} from 'react-bootstrap';
import './index.scss';


import MyStats from './MyStats'
import GameStats from './GameStats'
import {connect} from 'react-redux'
import {getStats, getUserStats} from '../../actions/userActions';

const ChartDataType = [
    'ALL',
    'H',
    'D',
    'W',
    'M'
];
const StatsModal = (props) => {
<<<<<<< HEAD
    const { show, onHide, stats, getStats, userName } = props;
=======
    const { show, onHide, stats, getStats, userName, logged } = props;
>>>>>>> 0e97ed38460346099c5d585c06b769ec1c6b349e
    const [userStats, setUserStats] = useState({

    });
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
        fill: {
            colors: ['#f401c7', '#F044E8']
        },
        stroke: {
            curve: 'straight',
            width: 1
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
<<<<<<< HEAD
                onClickMyStats()
=======
                onClickGameStats()
>>>>>>> 0e97ed38460346099c5d585c06b769ec1c6b349e
            }
        },
        [show],
    );
    const onClickMyStats = async () => {
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
    const onClickGameStats = async () => {
        getStats()
    }
    const chartSeries = [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]

    return (
        <Modal show={show} onHide={onHide} className="monkey-modal stats-modal">
<<<<<<< HEAD
            <Tab.Container id="left-tabs-example" defaultActiveKey="myStats">
                <Modal.Header closeButton closeVariant='white'>
                    <Nav variant="pills" className="nav-tabs modal-nav-tabs">
                        <Nav.Item>
                            <Nav.Link onClick={()=>onClickMyStats()} eventKey="myStats">My Stats</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=>onClickGameStats()} eventKey="gameStats">Game Stats</Nav.Link>
                        </Nav.Item>
=======
            <Tab.Container id="left-tabs-example" defaultActiveKey="gameStats">
                <Modal.Header closeButton closeVariant='white'>
                    <Nav variant="pills" className="nav-tabs modal-nav-tabs">
                        
                        <Nav.Item>
                            <Nav.Link onClick={()=>onClickGameStats()} eventKey="gameStats">Game Stats</Nav.Link>
                        </Nav.Item>
                        {
                            logged &&   
                            <Nav.Item>
                                <Nav.Link onClick={()=>onClickMyStats()} eventKey="myStats">My Stats</Nav.Link>
                            </Nav.Item>
                        }
>>>>>>> 0e97ed38460346099c5d585c06b769ec1c6b349e
                    </Nav>
                </Modal.Header>
                <Modal.Body>
                    <Tab.Content>
<<<<<<< HEAD
                        <Tab.Pane eventKey="myStats">
                            <MyStats chartOptions={chartOptions} chartSeries={chartSeries} userName={userName} stats={userStats}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="gameStats">
                            <GameStats chartOptions={chartOptions} chartSeries={chartSeries} userName={userName} stats={stats}/>
                        </Tab.Pane>
                    
=======
                        {
                            logged &&
                            <Tab.Pane eventKey="myStats">
                                <MyStats chartOptions={chartOptions} chartSeries={chartSeries} userName={userName} stats={userStats}/>
                            </Tab.Pane>
                        }
                        <Tab.Pane eventKey="gameStats">
                            <GameStats chartOptions={chartOptions} chartSeries={chartSeries} userName={userName} stats={stats}/>
                        </Tab.Pane>
                        
>>>>>>> 0e97ed38460346099c5d585c06b769ec1c6b349e
                    </Tab.Content>
                </Modal.Body>
            </Tab.Container>
            
        </Modal>
    );
}
const mapStateToProps  = (state) => (
    {
        stats: state.userData.stats,
<<<<<<< HEAD
        userName: state.userData.userName
=======
        userName: state.userData.userName,
        logged: state.userData.logged,
        
>>>>>>> 0e97ed38460346099c5d585c06b769ec1c6b349e
    }
)
export default connect(mapStateToProps, {getStats})(StatsModal)