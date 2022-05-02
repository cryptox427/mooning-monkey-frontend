import { Table, Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Pagination from 'react-responsive-pagination';
import './index.scss';

const TableComponent = (props) => {
    const { dataList, showPagination, showPerPage } = props;
    const headerList = Object.keys(dataList[0]);
    const [currentPage, setCurrentPage] = useState(4);

    const totalPages = 17;

    return (
        <div className='custom-table'>
            <Table>
                <thead>
                    <tr className='custom-table-tr'>
                        {
                            headerList.map((header, index) => 
                                <th key={index}>{header}</th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        dataList.length > 0 &&
                            dataList.map((data, index) => 
                                <tr key={index} className={index % 2 && "obb"}>
                                    {
                                        headerList.map((header, index) => 
                                            <td key={index}>
                                                <div>
                                                    {data[header]}
                                                </div>
                                            </td>
                                        )
                                    }
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

export default TableComponent;