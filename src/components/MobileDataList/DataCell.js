import { Table, Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Pagination from 'react-responsive-pagination';
import './index.scss';

const DataCell = (props) => {
    const { event, status, amount, fee, txn_hash, created_at } = props;
    const [displayDetail, setDisplaySetting] = useState(false);
    const changeDisplaySetting = () => {
        setDisplaySetting(!displayDetail);
    }

    return (
        <div className='data-cell'>
            <div className='main-data row'>
                <div className='event col-4'>{event}</div>
                <div className='status col-4'>{status}</div>
                <div className='amount col-2'>{amount}</div>
                <div className={`switch-button col-1 ${displayDetail ? 'active' : ''}`} onClick={() => changeDisplaySetting()}></div>
            </div>
            {
                displayDetail &&
                <div className='extra-data'>
                    <div className='fee row'>
                        <div className="title col-5">
                            Fee
                        </div>
                        <div className="col-6">
                            {fee}
                        </div>
                    </div>
                    <div className='txn-hash row'>
                        <div className="title col-5">
                            Txn Hash
                        </div>
                        <div className="col-6">
                            {txn_hash}
                        </div>
                        
                    </div>
                    <div className='created-at row'>
                        <div className="title col-5">
                            Created at
                        </div>
                        <div className="col-6">
                            {created_at}
                        </div>
                        
                    </div>
                </div>
            }
            
        </div>
    );
}

export default DataCell;