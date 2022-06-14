import { useEffect, useState } from "react";

import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import AspectRatioImg from "../../assets/images/aspect_ratio_white_24dp.svg";
import FullScreenImg from "../../assets/images/fullscreen_white_24dp.svg";

import BackgroundVideo from "../../assets/video/MoonBackground.mp4";
import "./index.scss";
import {
  getAllBets,
  getOnlinePlayerCount,
  setGameResult,
  removeAllBets,
  changeGameState,
} from "../../actions/gameActions";
import { endBet } from "../../actions/betActions";
import { GAME_STATE } from "../../utils/types";
import SettingModal from "./SettingModal";

const testData = [
  {
    time: 1,
    crashValue: 1,
  },
  {
    time: 2,
    crashValue: 3,
  },
  {
    time: 3,
    crashValue: 8,
  },
  {
    time: 4,
    crashValue: 9,
  },
  {
    time: 5,
    crashValue: 1,
  },
  {
    time: 6,
    crashValue: 6,
  },
  {
    time: 8,
    crashValue: 1,
  },
  {
    time: 9,
    crashValue: 1,
  },
  {
    time: 10,
    crashValue: 1,
  },
  {
    time: 12,
    crashValue: 1,
  },
  {
    time: 14,
    crashValue: 1,
  },
  {
    time: 18,
    crashValue: 1,
  },
  {
    time: 19,
    crashValue: 1,
  },
  {
    time: 20,
    crashValue: 40,
  },
];
let perpareTimer = null;
const prepareVideoTime = 5;
const ChartComponent = (props) => {
  const { gameResult, gameState, displayValues } = props;

  // const [gameData, setGameData] = useState({
  //     currentState: GAME_STATE.WAITING,
  //     crashValues: [],
  //     displayValues: []
  // });
  useEffect(() => {
    switch (gameState) {
      case GAME_STATE.RUNNING:
        roundStartAction();
        break;
      case GAME_STATE.WAITING:
        prepareLoop();
        break;
    }
  }, [gameState]);
  const prepareAction = () => {
    if (document.getElementById("bgVideo"))
      document.getElementById("bgVideo").currentTime = 0;
  };
  const prepareLoop = () => {
    if (perpareTimer) {
      clearInterval(perpareTimer);
    }
    perpareTimer = setInterval(() => prepareAction(), prepareVideoTime * 1000);
  };
  const roundStartAction = () => {
    if (perpareTimer) {
      clearInterval(perpareTimer);
    }
    if (document.getElementById("bgVideo"))
      document.getElementById("bgVideo").currentTime = prepareVideoTime;
  };
  const chartOptions = {
    markers: {
      size: 0,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    theme: {
      mode: "dark",
    },
    grid: {
      show: true, // you can either change hear to disable all grids
      xaxis: {
        lines: {
          show: false, //or just here to disable only x axis grids
        },
      },
      yaxis: {
        position: "right",
        lines: {
          show: false, //or just here to disable only y axis
        },
      },
    },
    xaxis: {
      type: "numeric",
      tickAmount: 5,
      labels: {
        hideOverlappingLabels: true,
      },
    },
    yaxis: [
      {
        opposite: true,
        title: {},
        logarithmic: false,
        decimalsInFloat: 1,
        tickAmount: 6,
        min: 0,
        max: 50,
        axisTicks: {
          show: true,
          borderType: "solid",
          color: "#78909C",
          width: 6,
          offsetX: 0,
          offsetY: 0,
        },
        axisBorder: {
          show: true,
          color: "#78909C",
          offsetX: 0,
          offsetY: 0,
        },
      },
    ],

    fill: {
      type: "solid",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },

    colors: ["#ff66ff"],
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    chart: {
      zoom: {
        enabled: false,
      },
      animations: {
        enabled: false,
      },
    },
  };

  return (
    <>
      <div className="play-chart">
        <div className="bg">
          <video loop autoPlay muted id="bgVideo">
            <source src={BackgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="graph-container">
            {gameState === GAME_STATE.RUNNING && (
              <ReactApexChart
                className="moon-graph"
                height="90%"
                options={{
                  ...chartOptions,
                  xaxis: { categories: displayValues.map((data) => data.time) },
                }}
                series={[
                  {
                    type: "line",
                    name: "series-1",
                    data: displayValues.map((data) => data.crashValue),
                  },
                ]}
              />
            )}
          </div>

          <div
            className={`game-value ${
              gameState === GAME_STATE.RUNNING ? "show" : "hidden"
            }`}
          >
            <div className="value"></div>
            <div className="title">Current Payout</div>
          </div>
          <div
            className={`crashed-game ${
              gameState === GAME_STATE.CRASHED ? "show" : "hidden"
            }`}
          >
            <div className="title-top">CRASHED</div>
            <div className="value">
              {Number(gameResult).toFixed(2)}
              <span>X</span>
            </div>
            <div className="title-bottom">Round Over</div>
          </div>
          <div
            className={`waiting-round ${
              gameState === GAME_STATE.WAITING ? "show" : "hidden"
            }`}
          >
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
          <SettingModal />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  gameResult: state.betGameData.gameResult,
  displayValues: state.betGameData.displayValues,

  gameState: state.betGameData.gameState,
});

export default connect(mapStateToProps, {
  getAllBets,
  getOnlinePlayerCount,
  setGameResult,
  removeAllBets,
  endBet,
  changeGameState,
})(ChartComponent);
