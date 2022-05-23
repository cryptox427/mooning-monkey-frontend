import {connect} from 'react-redux'

import './index.scss';
import ContainerComponent from "../../../../components/ContainerComponent";
import TabsBottomRainBow from "../../../../components/TabsBottomRainBow";
import HistoryTable from "./HistoryTable.js";
import {GAME_HISTORY_TYPE} from "../../../../utils/types";
import {getHistoryData} from "../../../../actions/gameActions"

const History = (props) => {
    const { getHistoryData, gameHistory } = props;
    
    const clickHistoryTab = (historyType) => {
        getHistoryData(historyType)
    }
    if(!gameHistory) {
        clickHistoryTab(GAME_HISTORY_TYPE.ALL)
    }
    const tabDataList = [
        {
            title: "All",
            component: <HistoryTable/>,
            clickFunc: ()=>clickHistoryTab(GAME_HISTORY_TYPE.ALL)
        },
        {
            title: "High Wins",
            component: <HistoryTable/>,
            clickFunc: ()=>clickHistoryTab(GAME_HISTORY_TYPE.HIGH_WINS)
        },
        {
            title: "Lucky Wins",
            component: <HistoryTable/>,
            clickFunc: ()=>clickHistoryTab(GAME_HISTORY_TYPE.LUCKY_WINS)
        }
    ];
    return (
        <div className="flex flex-col histroy">
            <TabsBottomRainBow tabDataList={tabDataList}/>
        </div>
                    
    );
}

const mapStateToProps  = (state) => (
    { 
        gameHistory: state.betGameData.gameHistory
    }
)
export default connect(mapStateToProps, {getHistoryData})(History)