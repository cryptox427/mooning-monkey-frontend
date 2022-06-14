import { Table, Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Pagination from 'react-responsive-pagination';
import './index.scss';
import DataCell from './DataCell';

const MobileDataList = (props) => {
    const { dataList} = props;
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
                            <DataCell event={data[2]} 
                                    status={data[3]} 
                                    amount={data[0]} 
                                    fee={data[1]} 
                                    created_at={data[4]} 
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

export default MobileDataList