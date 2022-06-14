import './index.scss';
import React from 'react';
import { FaCircle } from 'react-icons/fa';

import bnb1Img from '../../../assets/images/playpage/bnb1.png';
import bnb2Img from '../../../assets/images/playpage/bnb2.png';

const PlayerCell = (props) => {
    const { p_address, p_name, wager, mulitplayer, payout, pay_type, gameResult } = props;
    let p_state = "white-moon-text";
    if(gameResult < 0) {
        p_state = "white-moon-text";
    }
    else {
        p_state = gameResult > mulitplayer ? "active" : "red-moon-text";
    }
    return (
        <tr>
            <td className={"player " + p_state}>
                <div className="player-div">
                    <FaCircle></FaCircle>
                    {" " + p_address + " " + p_name}
                </div>
            </td>
            <td className={"wager " + p_state}>${wager}</td>
            <td className={"multi " + p_state}>{mulitplayer}x</td>
            <td className={"payout " + p_state}>
                {Number(wager)*Number(mulitplayer)}
                <img style={{display: pay_type == "bnb1" ? "block" : "none"}} src={bnb1Img}></img>
                <img style={{display: pay_type == "bnb2" ? "block" : "none"}} src={bnb2Img}></img>
            </td>
        </tr>
    );
}

export default PlayerCell;