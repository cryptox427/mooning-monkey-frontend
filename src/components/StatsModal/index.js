import { Modal } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import './index.scss';

const StatsModal = (props) => {
    const { show, onHide } = props;
    const chartOptions = {
        chart: {
            type: 'area',
            id: "basic-bar",
            zoom: {
                enabled: false
            },
            background: 'rgba(52, 52, 52, 0)'

        },
        dataLabels: {
            enabled: false
        },
        legend: {
            horizontalAlign: 'left'
        },
        labels: [30, 40, 45, 50, 49, 60, 70, 91],
        xaxis: {
            categories: [17, 18, 19, 20, 21, 22, 23, 24]
        },
        stroke: {
            curve: 'straight',
            width: 1
        },
        fill: {
            type: 'gradient',
            gradient: {
              opacityFrom: 0.6,
              opacityTo: 0.8,
            }
          },
        tooltip: {
            enabled: true
        },
        theme: {
            mode: 'dark'
        },
        colors: ['#F001F4']
    }

    const chartSeries = [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]

    return (
        <Modal show={show} onHide={onHide} className="monkey-modal stats-modal">
            <Modal.Header closeButton closeVariant='white'>
                <Modal.Title><span>STATS</span></Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <h5 className="title-midle mb-3 poppin-bold-txt">Username</h5>
                <p className="mt-3 poppin-light-txt"><span className="pink-monkey-text pr-2 poppin-light-txt">Joined:</span>Thu Oct 15 2020[11 months ago]</p>

                <div className="change-box-bottom-btn mt-3 three-dif-btn">
                    <button className="cta-btn cta-cancel first-btn poppin-bold-txt" style={{backgroundColor: "linear-gradient(90deg, #5BFE26 0%, #ADFD37 55.18%, #EFFC45 100%) !important", color: "black !important"}}>
                        Tip
                    </button>
                    <button className="cta-btn second-btn poppin-bold-txt" id="showToast" style={{backgroundColor: "linear-gradient(270deg, #F044E8 0%, #6A51C9 100%) !important"}}>
                        + Add Friend
                    </button>
                    <button className="cta-btn third-btn poppin-bold-txt" id="showToast" style={{backgroundColor: "linear-gradient(270deg, #FE8642 0%, #E7251F 100%) !important"}}>
                        Block User
                    </button>

                </div>

                <div className="mt-4"><span className="pink-monkey-text pr-2">Hint:</span>Click and drag to zoom, hold shift to pan.</div>

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


                <p className="mt-4"><span className="pink-monkey-text pr-2">Hint:</span>Click and drag to zoom, hold shift to pan.</p>


                <div className="">
                <div >
                    <ReactApexChart type="area" options={chartOptions} series={chartSeries} height={200}/>
                </div>
                </div>

                <p className="text-center">Interested in participating in the bankroll? Click <a href="#" className="pink-monkey-text">here </a>  to invest!</p>
            </Modal.Body>
        </Modal>
    );
}

export default StatsModal;