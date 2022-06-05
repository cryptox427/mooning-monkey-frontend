import { Table, Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Pagination from 'react-responsive-pagination';
import {connect} from 'react-redux'

import './index.scss';
import {getLeaderBoards} from '../../../actions/gameActions';


const LeaderBoardTable = (props) => {
    const {dataList} = props;
    const [currentPage, setCurrentPage] = useState(4);
    const totalPages = 17;
 
    console.log("dataList4", dataList)
    return (
        <div className='custom-table leaderboard-table'>
            <Table>
                <thead>
                    <tr className='custom-table-tr'>
                        <th>#Player</th>
                        <th>Wargered</th>
                        <th>Profit</th>
                        <th>Profit(ATH)</th>
                        <th>Profit(ATL)</th>
                        <th>Bets</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataList &&
                        dataList.map(data => 
                            <tr>
                                <td>{data.player}</td>
                                <td>{Number(data.wargered).toFixed(2)}</td>
                                <td>{Number(data.profit).toFixed(2)}</td>
                                <td>{Number(data.profitAth).toFixed(2)}</td>
                                <td>{Number(data.profitAtl).toFixed(2)}</td>
                                <td>{Number(data.bets).toFixed(2)}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div> 
    );
}

const mapStateToProps  = (state) => (
    {

    }
)

export default connect(mapStateToProps, {})(LeaderBoardTable)