import './index.scss';
import ContainerComponent from "../../../components/ContainerComponent";
import PlayerCell from "./PlayerCell.js";

const Players = (props) => {
    return (
        <ContainerComponent>
        <div className="w-80 p-4 m-auto flex flex-col players">
            <div className="title">players</div>
            <div className="player-table">
                <table className="table">
                    <PlayerCell p_address="Address" p_name="Name" wager="$2.50" mulitplayer="1.20x" payout="+$2.50" p_state="hidden" pay_type="bnb1"/>
                    <PlayerCell p_address="Address" p_name="Name" wager="$2.50" mulitplayer="1.20x" payout="+$2.50" p_state="hidden" pay_type="bnb1"/>
                    <PlayerCell p_address="Address" p_name="Name" wager="$2.50" mulitplayer="1.20x" payout="+$2.50" p_state="hidden" pay_type="bnb1"/>
                    <PlayerCell p_address="Address" p_name="Name" wager="$2.50" mulitplayer="1.20x" payout="+$2.50" p_state="active" pay_type="bnb2"/>
                    <PlayerCell p_address="Address" p_name="Name" wager="$2.50" mulitplayer="1.20x" payout="+$2.50" p_state="active" pay_type="bnb2"/>
                    <PlayerCell p_address="Address" p_name="Name" wager="$2.50" mulitplayer="1.20x" payout="+$2.50" p_state="active" pay_type="bnb2"/>
                </table>
            </div>
        </div>
        </ContainerComponent>
    );
}

export default Players;