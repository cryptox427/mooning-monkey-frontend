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
                    <li>
                        <DataCell event="Reward" 
                                    status="Success"
                                    amount="0.05"
                                    fee="0.05"
                                    txn_hash="0x563e...b4js73"
                                    created_at="24-09-2021 16:02"
                                >
                        </DataCell>
                    </li>
                    <li>
                        <DataCell event="Reward" 
                                    status="Success"
                                    amount="0.05"
                                    fee="0.05"
                                    txn_hash="afaewr32rwerw3rff"
                                    created_at="24-09-2021 16:02"
                                >
                        </DataCell>
                    </li>
                    <li>
                        <DataCell event="Reward" 
                                    status="Success"
                                    amount="0.05"
                                    fee="0.05"
                                    txn_hash="afaewr32rwerw3rff"
                                    created_at="24-09-2021 16:02"
                                >
                        </DataCell>
                    </li>
                    <li>
                        <DataCell event="Reward" 
                                    status="Success"
                                    amount="0.05"
                                    fee="0.05"
                                    txn_hash="afaewr32rwerw3rff"
                                    created_at="24-09-2021 16:02"
                                >
                        </DataCell>
                    </li>
                    <li>
                        <DataCell event="Reward" 
                                    status="Success"
                                    amount="0.05"
                                    fee="0.05"
                                    txn_hash="afaewr32rwerw3rff"
                                    created_at="24-09-2021 16:02"
                                >
                        </DataCell>
                    </li>
                    <li>
                        <DataCell event="Reward" 
                                    status="Success"
                                    amount="0.05"
                                    fee="0.05"
                                    txn_hash="afaewr32rwerw3rff"
                                    created_at="24-09-2021 16:02"
                                >
                        </DataCell>
                    </li>
                    <li>
                        <DataCell event="Reward" 
                                    status="Success"
                                    amount="0.05"
                                    fee="0.05"
                                    txn_hash="afaewr32rwerw3rff"
                                    created_at="24-09-2021 16:02"
                                >
                        </DataCell>
                    </li>
                    <li>
                        <DataCell event="Reward" 
                                    status="Success"
                                    amount="0.05"
                                    fee="0.05"
                                    txn_hash="afaewr32rwerw3rff"
                                    created_at="24-09-2021 16:02"
                                >
                        </DataCell>
                    </li>
                    <li>
                        <DataCell event="Reward" 
                                    status="Success"
                                    amount="0.05"
                                    fee="0.05"
                                    txn_hash="afaewr32rwerw3rff"
                                    created_at="24-09-2021 16:02"
                                >
                        </DataCell>
                    </li>
                    <li>
                        <DataCell event="Reward" 
                                    status="Success"
                                    amount="0.05"
                                    fee="0.05"
                                    txn_hash="afaewr32rwerw3rff"
                                    created_at="24-09-2021 16:02"
                                >
                        </DataCell>
                    </li>
                </ul>
            </div>
    </div>
        
    );
}

export default MobileDataList;