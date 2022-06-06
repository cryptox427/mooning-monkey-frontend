import { useEffect, useState } from 'react';

import ReactApexChart from 'react-apexcharts';
import {connect} from 'react-redux'
import FlipNumbers from "react-flip-numbers";
import AspectRatioImg from '../../assets/images/aspect_ratio_white_24dp.svg'
import FullScreenImg from '../../assets/images/fullscreen_white_24dp.svg'

import BackgroundVideo from '../../assets/video/MoonBackground.mp4'
import './index.scss'
import {serverUrl} from '../../utils/constant'
import AnimatedNumber from "react-animated-number";

import {getAllBets, getOnlinePlayerCount, setGameResult, removeAllBets, changeGameState} from '../../actions/gameActions'
import {endBet} from '../../actions/betActions'
import {GAME_STATE} from '../../utils/types'
import AnimNumberDisplayer from './AnimNumberDisplayer'
import SettingModal from './SettingModal'


const testData = [ 
    {
        time: 1,
        crashValue: 1
    },
    {
        time: 2,
        crashValue: 3
    },
    {
        time: 3,
        crashValue: 8
    },
    {
        time: 4,
        crashValue: 9
    },
    {
        time: 5,
        crashValue: 1
    },
    {
        time: 6,
        crashValue: 6
    },
    {
        time: 8,
        crashValue: 1
    },
    {
        time: 9,
        crashValue: 1
    },
    {
        time: 10,
        crashValue: 1
    },
    {
        time: 12,
        crashValue: 1
    },
    {
        time: 14,
        crashValue: 1
    },
    {
        time: 18,
        crashValue: 1
    },
    {
        time: 19,
        crashValue: 1
    },
    {
        time: 20,
        crashValue: 40
    }];
const timeValues = [1,2,3,4,5,6,7,8,9,10];
const realValues = [1,2,3];
const evtSource = new EventSource(serverUrl+"getGameProgress.php");
const MainChartComponent = (props) => {
    const { getAllBets, getOnlinePlayerCount, setGameResult, removeAllBets, changeGameState, endBet } = props;
    
    const [testValue, setTestValue] = useState(9);
    const [gameData, setGameData] = useState({
        currentState: GAME_STATE.WAITING,
        currentValue: 0,
        crashValues: [],
        displayValues: []
    });


    useEffect(() => {
        console.log(testValue)
    }, [testValue])
    const chartOptions = {
        markers: {
            size: 0
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        theme: {
            mode: 'dark'
        },
        grid: {
            show: true,      // you can either change hear to disable all grids
            xaxis: {
              lines: {
                show: false  //or just here to disable only x axis grids
               }
             },  
            yaxis: {
            position: 'right',
              lines: { 
                show: false  //or just here to disable only y axis
               }
            },   
        },
        xaxis: {
            type: 'numeric',
            tickAmount: 5,
            labels: {
              hideOverlappingLabels: true
            }
          },
        yaxis: [
            {
                opposite: true,
                title: {
                },
                logarithmic: false,
                decimalsInFloat: 1,
                tickAmount: 6,
                min: 0,
                max: 50,
                axisTicks: {
                    show: true,
                    borderType: 'solid',
                    color: '#78909C',
                    width: 6,
                    offsetX: 0,
                    offsetY: 0
                },
                axisBorder: {
                    show: true,
                    color: '#78909C',
                    offsetX: 0,
                    offsetY: 0
                },
            }
        ],
        
        fill: {
            type: 'solid',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
            },
        },
       
        colors: ['#ff66ff'],
        dataLabels: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        chart: {
            zoom: {
                enabled: false
            },
            animations: {
                enabled: false
            }
        }
    }
    const options = {
        chart: {
          height: 350,
          type: "line",
          stacked: false
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#FF1654", "#247BA0"],
        series: [
          {
            name: "Series A",
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
          },
          {
            name: "Series B",
            data: [20, 29, 37, 36, 44, 45, 50, 58]
          }
        ],
        stroke: {
          width: [4, 4]
        },
        plotOptions: {
          bar: {
            columnWidth: "20%"
          }
        },
        xaxis: {
          categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
        },
        yaxis: [
          {
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#FF1654"
            },
            labels: {
              style: {
                colors: "#FF1654"
              }
            },
            title: {
              text: "Series A",
              style: {
                color: "#FF1654"
              }
            }
          },
          {
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#247BA0"
            },
            labels: {
              style: {
                colors: "#247BA0"
              }
            },
            title: {
              text: "Series B",
              style: {
                color: "#247BA0"
              }
            }
          }
        ],
        tooltip: {
          shared: false,
          intersect: true,
          x: {
            show: false
          }
        },
        legend: {
          horizontalAlign: "left",
          offsetX: 40
        }
      };

    const startGame = () => {
        setGameResult(0);
        getAllBets();
        getOnlinePlayerCount();
        changeGameState(GAME_STATE.RUNNING);
        
    }

    const endGame = () => {
        setGameResult(gameData.currentValue);
        endBet();
        changeGameState(GAME_STATE.CRASHED);
    }

    const waitGame = () => {
        removeAllBets();
        setGameResult(-1);
        changeGameState(GAME_STATE.WAITING);
        document.getElementById('bgVideo').currentTime = 0
    }

    

    
    
    //messageCounter = window.setInterval(getMesssage, 2000);
    evtSource.onmessage = (event) => {
        let eventData = event.data;
        if(eventData === "Finished")
        {
            if(gameData.currentState !== GAME_STATE.CRASHED) {
                endGame();
            }
            setGameData({
                ...gameData,
                currentState: GAME_STATE.CRASHED,
                crashValues: [],
                displayValues: []
            })
        }
        else {
            eventData = Number(eventData);
            if(eventData <= 0) {
                if(gameData.currentState !== GAME_STATE.WAITING) {
                    waitGame();
                }
                setGameData({
                    ...gameData,
                    currentValue: 0,
                    currentState: GAME_STATE.WAITING,
                    crashValues: [],
                    displayValues: []
                })
            }
            else {
                if(gameData.currentState !== GAME_STATE.RUNNING) {
                    startGame();
                }
                let timeValue = gameData.crashValues.length > 0 ? gameData.crashValues[gameData.crashValues.length-1].time+1 : 1;
                let crashValues = [...gameData.crashValues, 
                    {
                        time: timeValue,
                        crashValue: eventData
                    }]
                let displayValues = [];
                if(crashValues.length > 10) {
                    for(let i = 0 ; i < 9 ; i ++) {
                        displayValues = [...displayValues, crashValues[parseInt(i * crashValues.length / 10)]]
                    }
                    displayValues = [...displayValues, crashValues[crashValues.length - 1]]
                }
                else {
                    displayValues = crashValues;
                }
                setGameData({
                    currentValue: eventData,
                    currentState: GAME_STATE.RUNNING,
                    crashValues: crashValues,
                    displayValues: displayValues
                })
                setGameResult(eventData);
            }
        } 
        //console.log("chartSeries", chartSeries, "gameValues", gameValues, "times", times);
    }
    return (
        <>
            <div className="play-chart">
                <div className="bg" >
                    <video loop autoPlay muted id="bgVideo">
                        <source
                        src={BackgroundVideo }
                        type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                
                    <div  className="graph-container">
                        {   
                            gameData.currentState === GAME_STATE.RUNNING &&
                            <ReactApexChart className="moon-graph" options={{...chartOptions, xaxis: {categories: gameData.displayValues.map(data => data.time)}}} series={[
                                {
                                    type: 'line',
                                    name: "series-1",
                                    data: gameData.displayValues.map(data => data.crashValue)
                                }
                            ]}/>
                        }
                    </div>
                
                    <div className={`game-value ${gameData.currentState === GAME_STATE.RUNNING ? "show": "hidden"}`}>
                        
                        <div className="value">
                            <AnimatedNumber
                                value={gameData.currentValue}
                                style={{
                                    fontSize: 100
                                }}
                                duration={200}
                                formatValue={(n) => n.toFixed(2)}
                            /><span>X</span>
                        </div>
                        <div className="title">Current Payout</div>
                    </div>
                    <div className={`crashed-game ${gameData.currentState === GAME_STATE.CRASHED ? "show": "hidden"}`}>
                        <div className="title-top">CRASHED</div>
                        <div className="value">{gameData.currentValue}<span>X</span></div>
                        <div className="title-bottom">Round Over</div>
                    </div>
                    <div className={`waiting-round ${gameData.currentState === GAME_STATE.WAITING ? "show": "hidden"}`}>
                        <div className="title">Preparing Round</div>
                    </div>
                </div>
            </div>
            <div className="chart-bottom-btns">
                <div className="left-three-btns">
                    <a href="#">
                        <img src={AspectRatioImg} alt="" />

                    </a>
                    <a href="#">
                        <img src={FullScreenImg} alt="" />

                    </a>
                    <SettingModal/>
                </div>
            </div>
        </>
    );
}

const mapStateToProps  = (state) => (
    {
    
    }
)

export default connect(mapStateToProps, {getAllBets, getOnlinePlayerCount, setGameResult, removeAllBets, endBet, changeGameState})(MainChartComponent)