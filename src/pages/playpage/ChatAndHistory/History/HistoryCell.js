import './index.scss';
import React from 'react';

import bnb1Img from '../../../../assets/images/playpage/bnb1.png';
import bnb2Img from '../../../../assets/images/playpage/bnb2.png';
import {GAME_HISTORY_TYPE} from "../../../../utils/types";

const HistoryCell = (props) => {
    const { h_game, h_address, h_time, h_wager, h_mult, h_payout, pay_type, type, h_username } = props;
    return (
        <tr>
            <td className="game">{h_game}</td>
            {
                type !== GAME_HISTORY_TYPE.MY_WAGER &&
                <td className="username">{h_username}</td>
            }
            {
                type !== GAME_HISTORY_TYPE.MY_WAGER &&
                <td className="address">{h_address.substring(0, 8)}</td>
            }
            
            <td className="time">{h_time}</td>
            <td className="wager">
                <div className="wager-container">
                    <img style={{display: pay_type == "bnb1" ? "block" : "none"}} src={bnb1Img}></img>
                    <img style={{display: pay_type == "bnb2" ? "block" : "none"}} src={bnb2Img}></img>
                    <p>${h_wager}</p>
                </div>
            </td>
            <td className="mult">{h_mult}x</td>
            <td className="payout">
                
                <img style={{display: pay_type == "bnb1" ? "block" : "none"}} src={bnb1Img}></img>
                <img style={{display: pay_type == "bnb2" ? "block" : "none"}} src={bnb2Img}></img>
                <p>${h_payout}</p>
            </td>
            
        </tr>
    );
}

export default HistoryCell;