import { Modal } from "react-bootstrap";
import './index.scss';

const LeaderboardModal = (props) => {
    const { show, onHide } = props;

    return (
        <Modal show={show} onHide={onHide} className="modal-70W">
            <Modal.Body style={{backgroundColor: '#100F25', color: 'white'}}>
                <div className="modal-header border-0">
                    <h3 className="modal-title" id="exampleModalLabel">Leaderboard</h3>

                    <div className="right-headre-section">
                    <select className="form-control top-select">
                        <option>All time </option>
                        <option>All time </option>
                        <option>All time </option>
                        <option>All time </option>
                    </select>
                    <a href="#">
                        <svg width="24" height="24" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 13C26 9 24.2008 5.4 21.3008 3L25 3L25 1L17 1L17 9L19 9L19 3.80078C22 5.80078 24 9.1 24 13C24 19.1 19.1 24 13 24C6.9 24 2 19.1 2 13C2 6.9 6.9 2 13 2L13 -5.68248e-07C5.8 -8.8297e-07 -2.53526e-07 5.8 -5.68248e-07 13C-8.8297e-07 20.2 5.8 26 13 26C20.2 26 26 20.2 26 13Z" fill="#F001F4"/>
                        </svg>
                        
                    </a>
                    <button type="button" className="close pl-0" data-dismiss="modal" aria-label="Close">
                        <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.4831 33.4831L2 2M33.4831 2L2 33.4831" stroke="white"  strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                        
                    </button>
                    </div>
                    
                </div>
                <div className="modal-body">
                    <div className="table-responsive">
                    <table className="table table-borderless leaderboard-table w-100">
                        <thead>
                        <tr>
                            <th># Player</th>
                            <th>Wagered</th>
                            <th>Profit</th>
                            <th>Profit (ATH)</th>
                            <th>Profit(ATL)</th>
                            <th>Bets</th>
                        </tr>
                        </thead>

                        <tbody> 
                        <tr>
                            <td colSpan="6" style={{height: "15px"}}></td>
                        </tr>



                        <tr className="odd">
                            <td>1 Player name</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                        </tr>
                        <tr>
                            <td>1 Player name</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                        </tr>
                        <tr className="odd">
                            <td>1 Player name</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                        </tr>
                        <tr>
                            <td>1 Player name</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                        </tr>
                        <tr className="odd">
                            <td>1 Player name</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                        </tr>
                        <tr>
                            <td>1 Player name</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                        </tr>
                        <tr className="odd">
                            <td>1 Player name</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                        </tr>
                        <tr>
                            <td>1 Player name</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                        </tr>
                        <tr className="odd">
                            <td>1 Player name</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                        </tr>
                        <tr>
                            <td>1 Player name</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                            <td>Amount</td>
                        </tr>
                        
                        
                        </tbody>
                    </table>
                    </div>


                    <div className="bottom-part-leaderboard">
                    <div className="table-records">
                        <select className="form-control top-select bottom-select">
                        <option>15 Records</option>
                        <option>20 Records</option>
                        <option>25 Records</option>
                        <option>30 Records</option>
                        </select>

                        <div className="text-light">
                        Showing <span>15 </span> out of <span>100</span>
                        </div>
                    </div>


                    <div className="right-pagination">
                        <nav aria-label="...">
                        <ul className="pagination">
                            <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex="-1">
                                <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.2963 3.43248L5.2288 10.5L12.2963 17.5675L10.8828 20.3945L0.988281 10.5L10.8828 0.605469L12.2963 3.43248Z" fill="white"/>
                                <path d="M26.0073 3.43248L18.9397 10.5L26.0073 17.5675L24.5938 20.3945L14.6992 10.5L24.5938 0.605469L26.0073 3.43248Z" fill="white"/>
                                </svg>
                            </a>
                            </li>
                            <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex="-1">
                                <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.1557 3.43248L5.08817 10.5L12.1557 17.5675L10.7422 20.3945L0.847656 10.5L10.7422 0.605469L12.1557 3.43248Z" fill="white"/>
                                </svg>
                                
                            </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active">
                            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                            <a className="page-link" href="#">
                                <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.846259 3.43248L7.91378 10.5L0.846259 17.5675L2.25976 20.3945L12.1543 10.5L2.25976 0.605469L0.846259 3.43248Z" fill="white"/>
                                </svg>
                                
                            </a>
                            </li>
                            <li className="page-item">
                            <a className="page-link" href="#">
                                <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7017 3.43248L21.7693 10.5L14.7017 17.5675L16.1152 20.3945L26.0098 10.5L16.1152 0.605469L14.7017 3.43248Z" fill="white"/>
                                <path d="M0.99079 3.43248L8.05831 10.5L0.99079 17.5675L2.4043 20.3945L12.2988 10.5L2.4043 0.605469L0.99079 3.43248Z" fill="white"/>
                                </svg>
                                                            
                            </a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default LeaderboardModal;