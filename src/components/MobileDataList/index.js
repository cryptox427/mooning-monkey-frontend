import { Table, Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Pagination from 'react-responsive-pagination';
import './index.scss';
import DataCell from './DataCell';

const MobileDataList = (props) => {
    const { dataList, showPagination, showPerPage } = props;
    const [currentPage, setCurrentPage] = useState(4);

    const totalPages = 17;

    return (
        <div className='mobile-data-list'>

            <div className='mobile-data-list-header row'>
                <div className='event col-4'>Event</div>
                <div className='status col-4'>Status</div>
                <div className='amount col-4'>Amount</div>
                
            </div>    
            <div className='mobile-data-list-main'>
           
                <ul className='data-list'>
                {
                        dataList.length > 0 &&
                            dataList.map((data, index) => 
                            <li key={index}>
                            <DataCell event={data.event} 
                                        status={data.status} 
                                        amount={data.amount} 
                                        fee={data.fee} 
                                        created_at={data.creditedOn} 
                                    >
                            </DataCell>
                        </li>
                                
                            )
                    }
                </ul>
            </div>
    </div>
        
    );
}

export default MobileDataList;