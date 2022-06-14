import ChartComponent from "./ChartComponent";
import CurrentValueDisplayer from "./CurrentValueDisplayer";
import GameDataController from "./GameDataController";


const MainChartComponent = (props) => {
    return (
        <div className="chart">
            <GameDataController/>
            <ChartComponent/>
            <CurrentValueDisplayer/>
            
        </div>
    );
}

export default MainChartComponent