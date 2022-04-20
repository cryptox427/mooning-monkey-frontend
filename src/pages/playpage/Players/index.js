import './index.scss';
import ContainerComponent from "../../../components/ContainerComponent";

const Players = (props) => {
    return (
        <ContainerComponent>
        <div className="w-80 p-4 m-auto flex flex-col players">
            <div className="title">players</div>
            <div className="player-table">
                <table className="table">
                    <tr>
                        <th>Wager</th>
                        <th>Mult</th>
                        <th>Payout</th>
                    </tr>
                    <tr>
                        <td>X amount</td>
                        <td>2.50X</td>
                        <td>X amount</td>
                    </tr>
                    <tr>
                        <td>X amount</td>
                        <td>2.50X</td>
                        <td>X amount</td>
                    </tr>
                    <tr>
                        <td>X amount</td>
                        <td>2.50X</td>
                        <td>X amount</td>
                    </tr>
                </table>
            </div>
        </div>
        </ContainerComponent>
    );
}

export default Players;