import './index.scss';
import React from 'react';
import { FaCircle } from 'react-icons/fa';

import bnb1Img from '../../../assets/images/playpage/bnb1.png';
import bnb2Img from '../../../assets/images/playpage/bnb2.png';

const PlayerCell = (props) => {
    const { p_address, p_name, wager, mulitplayer, payout, p_state, pay_type } = props;
    return (
        <tr>
            <td className={"player " + p_state}>
                <div className="player-div">
                    <FaCircle></FaCircle>
                    {" " + p_address + " " + p_name}
                </div>
            </td>
            <td className={"wager " + p_state}>{wager}</td>
            <td className={"multi " + p_state}>{mulitplayer}</td>
            <td className={"payout " + p_state}>
                {payout}
                <img style={{display: pay_type == "bnb1" ? "block" : "none"}} src={bnb1Img}></img>
                <img style={{display: pay_type == "bnb2" ? "block" : "none"}} src={bnb2Img}></img>
            </td>
        </tr>
    );
}

export default PlayerCell;