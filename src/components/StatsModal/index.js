import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import {Tab, Nav} from 'react-bootstrap';
import './index.scss';


import MyStats from './MyStats'
import GameStats from './GameStats'
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
            <Tab.Container id="left-tabs-example" defaultActiveKey="myStats">
                <Modal.Header closeButton closeVariant='white'>
                    <Nav variant="pills" className="nav-tabs modal-nav-tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="myStats">My Stats</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="gameStats">Game Stats</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Modal.Header>
                <Modal.Body>
                    <Tab.Content>
                        <Tab.Pane eventKey="myStats">
                            <MyStats chartOptions={chartOptions} chartSeries={chartSeries} userName={userName} stats={stats}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="gameStats">
                            <GameStats chartOptions={chartOptions} chartSeries={chartSeries} userName={userName} stats={stats}/>
                        </Tab.Pane>
                    
                    </Tab.Content>
                </Modal.Body>
            </Tab.Container>
            
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