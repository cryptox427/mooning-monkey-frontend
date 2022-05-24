import { Table, Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Pagination from 'react-responsive-pagination';
import {connect} from 'react-redux'

import './index.scss';

const loadedData = false;
const LeaderBoardTable = (props) => {
    const {dataList} = props;
    const [currentPage, setCurrentPage] = useState(4);
    const totalPages = 17;
 
    
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
                                <td>{data.wagered}</td>
                                <td>{data.profit}</td>
                                <td>{data.profitAth}</td>
                                <td>{data.profitAtl}</td>
                                <td>{data.bets}</td>
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