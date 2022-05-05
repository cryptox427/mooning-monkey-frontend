import { useState } from 'react';
import { Form } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
import AspectRatioImg from '../../assets/images/aspect_ratio_white_24dp.svg'
import FullScreenImg from '../../assets/images/fullscreen_white_24dp.svg'
import TuneImg from '../../assets/images/tune_white_24dp.svg'
import './index.scss';

const MainChartComponent = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const chartOptions = {
        chart: {
            type: 'area',
            id: "basic-bar",
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom',
            }
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
            curve: 'straight'
        },
        tooltip: {
            enabled: true
        },
        theme: {
            mode: 'dark'
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
            },
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
        <>
            <div className="play-chart">
                <div className="bg" >
                    <ReactApexChart options={chartOptions} series={chartSeries} type="area" height={500} />
                </div>
            </div>
            <div className="chart-bottom-btns">
                <div className="left-three-btns">
                    <a href="#">
                        <img src={AspectRatioImg} alt="" />

                    </a>
                    <a href="#">
                        <img src={FullScreenImg} alt="" />

                    </a>

                    <div className="btn-group dropup">
                        <a href="#" type="button" className="btn btn-secondary bg-transparent border-0 shadow-none p-0"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => setShowAnimation(!showAnimation)}>
                        <img src={TuneImg} alt="" />

                        </a>

                        <div className={`absolute prevent-drop timeline-bg ${showAnimation ? 'show' : 'hidden'}`}>
                            <h6 className="pink">Animation</h6>

                            <ul className="nav nav-pills mb-3 tabs-common" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                                    role="tab" aria-controls="pills-home" aria-selected="true">3D</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
                                    role="tab" aria-controls="pills-profile" aria-selected="false">2D</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact"
                                    role="tab" aria-controls="pills-contact" aria-selected="false">Original</a>
                                </li>
                            </ul>

                            <h6 className="pink">Sound</h6>

                            <div className="toggle-switches">
                                <table className="table table-borderless">
                                    <tr className="odd">
                                        <td>Take Off</td>
                                        <td>
                                        <div className="custom-control custom-switch d-flex">
                                            <Form>
                                                <Form.Check 
                                                    type="switch"
                                                    id="custom-switch"
                                                />    
                                            </Form>
                                            <label className="custom-control-label" htmlFor="customSwitch1">On</label>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Take Off</td>
                                        <td>
                                        <div className="custom-control custom-switch d-flex">
                                            <Form>
                                                <Form.Check 
                                                    type="switch"
                                                    id="custom-switch"
                                                />    
                                            </Form>
                                            <label className="custom-control-label" htmlFor="customSwitch1">On</label>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr className="odd">
                                        <td>Take Off</td>
                                        <td>
                                        <div className="custom-control custom-switch d-flex">
                                            <Form>
                                                <Form.Check 
                                                    type="switch"
                                                    id="custom-switch"
                                                />    
                                            </Form>
                                            <label className="custom-control-label" htmlFor="customSwitch1">On</label>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Take Off</td>
                                        <td>
                                        <div className="custom-control custom-switch d-flex">
                                            <Form>
                                                <Form.Check 
                                                    type="switch"
                                                    id="custom-switch"
                                                />    
                                            </Form>
                                            <label className="custom-control-label" htmlFor="customSwitch1">On</label>
                                        </div>
                                        </td>
                                    </tr>

                                </table>

                                <div className="volume-btn">
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                        d="M11.8084 0.0297091C11.7486 0.00314119 11.6825 -0.00586684 11.6178 0.00373207C11.5531 0.013331 11.4925 0.0411946 11.4429 0.0839795L5.75193 4.99744H0.338349C0.248613 4.99744 0.162537 5.03316 0.0990844 5.09671C0.0356316 5.16026 0 5.24642 0 5.3363V11.6595C0 11.7493 0.0356316 11.8355 0.0990844 11.899C0.162537 11.9626 0.248613 11.9983 0.338349 11.9983H5.75193L11.4362 16.9118C11.499 16.964 11.5779 16.9927 11.6595 16.993C11.7064 17.0023 11.7547 17.0023 11.8016 16.993C11.8603 16.9667 11.9102 16.9239 11.945 16.8697C11.9799 16.8156 11.9982 16.7525 11.9978 16.6881V0.368568C12.0058 0.299317 11.9917 0.229347 11.9577 0.168529C11.9237 0.107711 11.8715 0.0591293 11.8084 0.0297091Z"
                                        fill="white" />
                                        <path
                                        d="M15.3436 14.9999C15.2538 14.9991 15.1677 14.9643 15.1021 14.9024C15.0698 14.8699 15.0441 14.8313 15.0265 14.7888C15.009 14.7463 15 14.7008 15 14.6547C15 14.6087 15.009 14.563 15.0265 14.5205C15.0441 14.478 15.0698 14.4395 15.1021 14.4071C16.5137 12.9697 17.3059 11.0263 17.3059 9.00076C17.3059 6.97523 16.5137 5.03185 15.1021 3.59442C15.038 3.52781 15.0027 3.43814 15.004 3.34525C15.0053 3.25237 15.0431 3.16374 15.109 3.09899C15.1748 3.03423 15.2635 2.99873 15.3554 3.00003C15.4473 3.00134 15.5349 3.03936 15.5989 3.10597C17.137 4.67381 18 6.79264 18 9.00076C18 11.2089 17.137 13.3275 15.5989 14.8954C15.5655 14.9293 15.5257 14.9559 15.4818 14.9739C15.4379 14.9919 15.3909 15.0008 15.3436 14.9999Z"
                                        fill="white" />
                                        <path
                                        d="M14.3235 13C14.2486 12.999 14.1759 12.9714 14.1163 12.9213C14.0511 12.8588 14.0106 12.7707 14.0033 12.6756C13.996 12.5805 14.0226 12.486 14.0774 12.4124C14.902 11.3125 15.3534 9.92812 15.3534 8.49881C15.3534 7.0695 14.902 5.68499 14.0774 4.58508C14.0497 4.54959 14.0286 4.50828 14.0155 4.46363C14.0024 4.41898 13.9975 4.37199 14.0012 4.32521C14.0048 4.27844 14.0168 4.23287 14.0366 4.19134C14.0564 4.14981 14.0835 4.11311 14.1163 4.08337C14.1828 4.0227 14.2682 3.99326 14.3541 4.0013C14.44 4.00934 14.5197 4.05424 14.5761 4.12642C15.4964 5.35573 16 6.90225 16 8.49881C16 10.0954 15.4964 11.6417 14.5761 12.871C14.545 12.9116 14.5063 12.9441 14.4627 12.9664C14.419 12.9887 14.3715 13.0001 14.3235 13Z"
                                        fill="white" />
                                        <path
                                        d="M13.521 10.9999C13.426 11.0012 13.3325 10.9853 13.2514 10.9543C13.1347 10.9086 13.0511 10.8362 13.0182 10.7524C12.9852 10.6685 13.0057 10.5798 13.0752 10.5053C13.6579 9.90067 13.9659 9.20757 13.9659 8.50088C13.9659 7.7942 13.6579 7.10094 13.0752 6.49631C13.0398 6.45956 13.0162 6.4188 13.0059 6.37634C12.9956 6.33389 12.9988 6.29061 13.0151 6.24891C13.0315 6.20721 13.0608 6.16783 13.1013 6.13324C13.1418 6.09865 13.1929 6.0695 13.2514 6.04728C13.3099 6.02506 13.3749 6.01021 13.4425 6.00374C13.5101 5.99728 13.5791 5.99919 13.6455 6.00946C13.712 6.01974 13.7745 6.0382 13.8296 6.06365C13.8847 6.0891 13.9313 6.12112 13.9667 6.15787C14.6429 6.86568 15 7.67556 15 8.50088C15 9.3262 14.6429 10.1359 13.9667 10.8437C13.9202 10.8917 13.8547 10.9314 13.7766 10.9588C13.6985 10.9861 13.6104 11.0003 13.521 10.9999Z"
                                        fill="white" />
                                    </svg>

                                    <form>
                                        <div className="form-group mb-0">
                                        <input type="range" className="form-control-range" id="formControlRange" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainChartComponent;