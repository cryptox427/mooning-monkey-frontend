import { Table, Dropdown, Pagination } from 'react-bootstrap';
import './index.scss';

const TableComponent = (props) => {
    const { dataList, showPagination, showPerPage } = props;
    const headerList = Object.keys(dataList[0]);

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
                                            <td key={index}>{data[header]}</td>
                                        )
                                    }
                                </tr>
                            )
                    }
                </tbody>
            </Table>
            <div className='custom-table-bottom'>
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
                <div className=''>
                    {
                        showPagination && 
                            <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Ellipsis />

                                <Pagination.Item>{10}</Pagination.Item>
                                <Pagination.Item>{11}</Pagination.Item>
                                <Pagination.Item active>{12}</Pagination.Item>
                                <Pagination.Item>{13}</Pagination.Item>
                                <Pagination.Item>{14}</Pagination.Item>

                                <Pagination.Ellipsis />
                                <Pagination.Item>{20}</Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                    }
                </div>
            </div>
        </div>
    );
}

export default TableComponent;