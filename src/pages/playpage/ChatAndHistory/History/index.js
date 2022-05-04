import './index.scss';
import ContainerComponent from "../../../../components/ContainerComponent";
import TabsBottomRainBow from "../../../../components/TabsBottomRainBow";
import HistoryTable from "./HistoryTable.js";

const History = (props) => {
    const tabDataList = [
        {
            title: "All",
            component: <HistoryTable/>
        },
        {
            title: "High Wins",
            component: <HistoryTable/>
        },
        {
            title: "Lucky Wins",
            component: <HistoryTable/>
        }
    ];
    return (
        <div className="flex flex-col histroy">
            <TabsBottomRainBow tabDataList={tabDataList}/>
        </div>
                    
    );
}

export default History;