import './index.scss';
import ContainerComponent from "../../../../components/ContainerComponent";
import HistoryCell from "./HistoryCell.js";

const History = (props) => {
    return (
        <div className="w-80 m-auto flex flex-col players">
            <div className="player-table">
                <table className="table">
                    <tr>
                        <th className="h-player">Players: 20</th>
                        <th className="h-wager">Wager</th>
                        <th className="h-multi">Multiplayer</th>
                        <th className="h-payout">Payout</th>
                    </tr>
                    <HistoryCell game="Crash" address="Name" time="10:36 AM" wager="$81.45" mult="1.23x" payout="$100.00"/>
                </table>
            </div>
        </div>
    );
}

export default History;