import { Table } from 'react-bootstrap';

import './index.scss';
import BNB1Img from '../../assets/images/playpage/bnb1.png';
import BNB2Img from '../../assets/images/playpage/bnb2.png';

const loadedData = false;
const TransActionTableComponent = (props) => {
    const { dataList } = props;
 
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
                        dataList.length > 0 &&
                        dataList.map((data, index) => 
                            <tr key={index} className={`transaction-cell ${index % 2 && "obb"}`}>
                                <td><div>
                                    {data[2]}
                                </div></td>
                                <td><span className='green-font'>{data[3]}</span></td>
                                <td><div>
                                    <div>
                                        
                                        <img className='coin-type' src={BNB1Img} alt="bnb1" />
                                        {data[0]}
                                        
                                    </div>
                                </div></td>
                                <td><div>
                                <div>
                                    <img src={BNB2Img} className='coin-type' alt="bnb2" />
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

export default TransActionTableComponent