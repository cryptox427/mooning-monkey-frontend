import './index.scss';
import React from 'react';

import bnb1Img from '../../../../assets/images/playpage/bnb1.png';
import bnb2Img from '../../../../assets/images/playpage/bnb2.png';
import {GAME_HISTORY_TYPE} from "../../../../utils/types";

const HistoryCell = (props) => {
    const { h_game, h_address, h_time, h_wager, h_mult, h_payout, pay_type, type, h_username } = props;
    return (
        <div className="history-cell">
            <div className="game data-item">{h_game}</div>
            {
                type !== GAME_HISTORY_TYPE.MY_WAGER &&
                <div className="username data-item">{h_username}</div>
            }
            {
                type !== GAME_HISTORY_TYPE.MY_WAGER &&
                <div className="address data-item">{h_address.substring(0, 8)}</div>
            }
            
            <div className="time data-item">{h_time}</div>
            <div className="wager data-item">
                <div className="wager-container">
                    <img style={{display: pay_type == "bnb1" ? "block" : "none"}} src={bnb1Img}></img>
                    <img style={{display: pay_type == "bnb2" ? "block" : "none"}} src={bnb2Img}></img>
                    <p>${h_wager}</p>
                </div>
            </div>
            <div className="mult data-item">{h_mult}x</div>
            <div className="payout data-item">
                
                <img style={{display: pay_type == "bnb1" ? "block" : "none"}} src={bnb1Img}></img>
                <img style={{display: pay_type == "bnb2" ? "block" : "none"}} src={bnb2Img}></img>
                <p>${h_payout}</p>
            </div>
            
        </div>
    );
}

export default HistoryCell;