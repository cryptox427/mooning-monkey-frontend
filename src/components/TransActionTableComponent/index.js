import { Table, Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Pagination from 'react-responsive-pagination';
import {connect} from 'react-redux'

import './index.scss';
import BNB1Img from '../../assets/images/playpage/bnb1.png';
import BNB2Img from '../../assets/images/playpage/bnb2.png';

const loadedData = false;
const TransActionTableComponent = (props) => {
    const { dataList, showPagination, showPerPage, transactionData, transActionType } = props;
    const { transactionHistory, loading, loaded, networkError } = transactionData;
    const headerList = Object.keys(dataList[0]);
    const [currentPage, setCurrentPage] = useState(4);

    const totalPages = 17;
 
    
    return (
        <div className='custom-table'>
            <Table>
                <thead>
                    <tr className='custom-table-tr'>
                        <th>Event</th>
                        <th>Status</th>
                        <th>Amount</th>
                        <th>Fee</th>
                        <th>Credited On</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactionHistory.length > 0 &&
                        transactionHistory.map((data, index) => 
                                <tr key={index} className={index % 2 && "obb"}>
                                    <td><div>
                                        {data[2]}
                                    </div></td>
                                    <td><span className='green-font'>{data[3]}</span></td>
                                    <td><div>
                                        <div>
                                            
                                                <img className='mr-2' src={BNB1Img} alt="bnb1" />
                                                {data[0]}
                                            
                                        </div>
                                    </div></td>
                                    <td><div>
                                    <div>
                                        <img src={BNB2Img} className='mr-2' alt="bnb2" />
                                        {data[1]}
                                        </div>
                                    </div></td>
                                    <td><div>
                                        {data[4]}
                                    </div></td>
                                </tr>
                                
                            )
                    }
                </tbody>
            </Table>
            {/* <div className='custom-table-bottom'>
                <div className='custom-table-bottom-left'>
                    {
                        showPerPage && 
                            <>
                                <div className='custom-table-bottom-left-select'>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            10 Records
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">10 Records</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">20 Records</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">50 Records</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className='custom-table-bottom-left-status'>Showing 10 out of 100</div>
                            </>
                    }
                </div>
                <div className='pagination-content'>
                    {
                        showPagination && 
                            <Pagination current={currentPage}
                            total={totalPages}
                            onPageChange={setCurrentPage}>  
                            </Pagination>
                    }
                </div>
            </div>*/}
        </div> 
    );
}

const mapStateToProps  = (state) => (
    {
        transactionData: state.transactionData
    }
)

export default connect(mapStateToProps, {})(TransActionTableComponent)