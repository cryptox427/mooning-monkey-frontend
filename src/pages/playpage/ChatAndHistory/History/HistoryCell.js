import './index.scss';
import React from 'react';

import bnb1Img from '../../../../assets/images/playpage/bnb1.png';
import bnb2Img from '../../../../assets/images/playpage/bnb2.png';

const HistoryCell = (props) => {
    const { h_game, h_address, h_time, h_wager, h_mult, h_payout, pay_type } = props;
    return (
        <tr>
            <td className="game ">{h_game}</td>
            <td className="address">{h_address}</td>
            <td className="time">{h_time}</td>
            <td className="wager">
                {h_wager}
                <img style={{display: pay_type == "bnb1" ? "block" : "none"}} src={bnb1Img}></img>
                <img style={{display: pay_type == "bnb2" ? "block" : "none"}} src={bnb2Img}></img>
            </td>
            <td className="mult">{h_mult}</td>
            <td className="payout">
                {h_payout}
                <img style={{display: pay_type == "bnb1" ? "block" : "none"}} src={bnb1Img}></img>
                <img style={{display: pay_type == "bnb2" ? "block" : "none"}} src={bnb2Img}></img>
            </td>
            
        </tr>
    );
}

export default HistoryCell;