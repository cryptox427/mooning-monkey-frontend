import { Modal } from "react-bootstrap";
import './index.scss';

const StatsModal = (props) => {
    const { show, onHide } = props;

    return (
        <Modal show={show} onHide={onHide} >
            <Modal.Header style={{backgroundColor: '#100F25', borderBottom: 'none'}} closeButton>
                <Modal.Title><span style={{color: '#F001F4'}}>STATS</span></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#100F25', color: 'white'}}>
            <h5 className="popup_title mb-3">Username</h5>
                <p className="mt-3"><span className="pink pr-2">Joined:</span>Thu Oct 15 2020[11 months ago]</p>

                <div className="change-box-bottom-btn mt-3 three-dif-btn">
                <a href="#" className="cta-btn cta-cancel first-btn" style={{backgroundColor: "linear-gradient(90deg, #5BFE26 0%, #ADFD37 55.18%, #EFFC45 100%) !important", color: "black !important"}}>
                    Cancel
                </a>
                <a href="#" className="cta-btn second-btn" id="showToast" style={{backgroundColor: "linear-gradient(270deg, #F044E8 0%, #6A51C9 100%) !important"}}>
                    Submit
                </a>
                <a href="#" className="cta-btn third-btn" id="showToast" style={{backgroundColor: "linear-gradient(270deg, #FE8642 0%, #E7251F 100%) !important"}}>
                    Submit
                </a>

                </div>

                <p className="mt-4"><span className="pink pr-2">Hint:</span>Click and drag to zoom, hold shift to pan.</p>

                <ul className="pl-4 stauts-bullet">
                <li>
                    <div className="share_detail">
                    <span>Users</span>
                    <div>
                        <span style={{color: "#6968B8"}}>X %</span>
                        <span>$0.0001</span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Bets</span>
                    <div>
                        <span style={{color: "#6968B8"}}>X %</span>
                        <span>$0.0001</span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Bankroll</span>
                    <div>
                        <span style={{color: "#6968B8"}}>X %</span>
                        <span> X amount</span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Wagered</span>
                    <div>
                        <span style={{color: "#6968B8"}}>X %</span>
                        <span> X amount</span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Return to the player</span>
                    <div>
                        <span style={{color: "#6968B8"}}>X %</span>
                        <span> X amount</span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Investors profit</span>
                    <div>
                        <span style={{color: "#6968B8"}}>X %</span>
                        <span> X amount</span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Investors all-time high profit   </span>
                    <div>
                        <span style={{color: "#6968B8"}}>X %</span>
                        <span> X amount</span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Commission</span>
                    <div>
                        <span style={{color: "#6968B8"}}>X %</span>
                        <span> X amount</span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Total cashback</span>
                    <div>
                        <span style={{color: "#6968B8"}}>X %</span>
                        <span> X amount</span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Total winning bonus</span>
                    <div>
                        <span style={{color: "#6968B8"}}>X %</span>
                        <span> X amount</span>
                    </div>
                    
                </div>
                </li>
                <li>
                    <div className="share_detail">
                    <span>Total Shared profit with the community</span>
                    <div>
                        <span style={{color: "#6968B8"}}>X %</span>
                        <span> X amount</span>
                    </div>
                    
                </div>
                </li>
                
                
                
                </ul>


                <p className="mt-4"><span className="pink pr-2">Hint:</span>Click and drag to zoom, hold shift to pan.</p>


                <div className="chart-section">
                <div id="div_g" style={{width: "100%", height: "300px"}}></div>
                </div>

                <p className="text-center">Interested in participating in the bankroll? Click <a href="#" className="pink">here </a>  to invest!</p>
            </Modal.Body>
        </Modal>
    );
}

export default StatsModal;