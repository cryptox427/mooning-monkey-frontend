import { Dropdown } from 'react-bootstrap';
import ReactApexChart from "react-apexcharts";
import React, { useEffect, useState } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import LogoFooterComponent from '../../components/LogoFooterComponent';
import TimerComponent from '../../components/TimerComponent';
import USDImg from '../../assets/images/usd.png';
import './index.scss'

const ComicBookearnings = (props) => {
    const chartOptions = {
        chart: {
            type: 'area',
            id: "basic-bar",
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            horizontalAlign: 'left'
        },
        xaxis: {
            type: "datetime",
            categories: [133333330000000, 133333331000000, 133333332000000, 133333333000000, 133333334000000, 133333335000000, 133333336000000, 133333337000000]
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
        colors: ['#F001F4']
    }

    const chartSeries = [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]

    return (
        <div className='earning-container'>
            <div className='gradient-font earning-container-title'>MY COMICS EARNINGS</div>
            <div className='sub-container staking-container'>
                <div className='staking-container-top'>
                    <div className='gradient-font container-title'>NFT STAKING OVERIVEW</div>
                    <div className='staking-container-top-btns'>
                        <div className='gradient-btn first'>STAKE ALL</div>
                        <div className='gradient-btn'>UNSTAKE ALL</div>
                    </div>
                </div>
                <div className='staking-container-bottom'>
                    <div className='staking-container-bottom-item'>
                        <div className='pink-font'>AVG PAYOUT</div>
                        <div className=''>209</div>
                    </div>
                    <div className='staking-container-bottom-item'>
                        <div className='pink-font'>AVG PAYOUT</div>
                        <div className=''>871</div>
                    </div>
                    <div className='staking-container-bottom-item'>
                        <div className='pink-font'>AVG PAYOUT</div>
                        <div className=''>63</div>
                    </div>
                    <div className='staking-container-bottom-item'>
                        <div className='pink-font'>UNSTAKED</div>
                        <div className=''>9</div>
                    </div>
                    <div className='staking-container-bottom-item'>
                        <div className='pink-font'>UNLINKED</div>
                        <div className=''>76</div>
                    </div>
                </div>
            </div>
            <div className='sub-container assets-container'>
                <div className='gradient-font assets-container-title container-title'>MY ASSETS</div>
                <div className='assets-container-body'>
                    <div className='assets-container-body-part'>
                        <div className='assets-container-body-part-item'>
                            <div className='left'>
                                <div className='pink-font'>Mooning Monkey</div>
                                <div className='text-sm'>Owned: 7</div>
                                <div className='text-sm'>Next Claimable</div>
                                <div className='text-sm'>Amount: 1349 TAK</div>
                            </div>
                            <div className='right'></div>
                        </div>
                        <div className='assets-container-body-part-item'>
                            <div className='left'>
                                <div className='pink-font'>Galactic Gorilla</div>
                                <div className='text-sm'>Owned: 9</div>
                                <div className='text-sm'>Next Claimable</div>
                                <div className='text-sm'>Amount: 3698 TAK</div>
                            </div>
                            <div className='right'></div>
                        </div>
                    </div>
                    <div className='assets-container-body-part'>
                        <div className='assets-container-body-part-item'>
                            <div className='left'>
                                <div className='pink-font'>Alien Gorilla</div>
                                <div className='text-sm'>Owned: 0</div>
                                <div className='text-sm'>Next Claimable</div>
                                <div className='text-sm'>Amount: 0 TAK</div>
                            </div>
                            <div className='right'></div>
                        </div>
                        <div className='assets-container-body-part-item'>
                            <div className='left'>
                                <div className='pink-font'>Eternal Yeti</div>
                                <div className='text-sm'>Owned: 0</div>
                                <div className='text-sm'>Next Claimable</div>
                                <div className='text-sm'>Amount: 0 TAK</div>
                            </div>
                            <div className='right'></div>
                        </div>
                    </div>
                </div>
                <div className='pink-font'>You can stake or unstake at anytime, but daily claimable airdrops will only start after 24H  of staking your NFTs being staked.</div>
            </div>
            <div className='sub-container airdrop-container'>
                <div className='airdrop-container-top'>
                    <div className='gradient-font container-title'>MY DAILY CLAIMABLE TAK AIRDROP</div>
                    
                    <div className=''>NEXT CLAIMABLE TAK: <TimerComponent/></div>
                    
                </div>
                <div className='airdrop-container-middle'>
                    <div className='airdrop-container-middle-left'>
                        <div className=''><span className='pink-font'>Available TAK to claim:</span> X TAK</div>
                        <div className=''>Corresponding $USDT value: $247</div>
                    </div>
                    <div className='gradient-btn'>CLAIM</div>
                </div>
                <div className='airdrop-container-status'>
                    <div className='item'>
                        <div className='title'>Today</div>
                        <div className='value'>
                            <img src={USDImg} alt="usd_image" />
                            <div className=''>$447</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title'>This week</div>
                        <div className='value'>
                            <img src={USDImg} alt="usd_image" />
                            <div className=''>$447</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title'>This month</div>
                        <div className='value'>
                            <img src={USDImg} alt="usd_image" />
                            <div className=''>$447</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title'>This year</div>
                        <div className='value'>
                            <img src={USDImg} alt="usd_image" />
                            <div className=''>$447</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title'>Lifetime</div>
                        <div className='value'>
                            <img src={USDImg} alt="usd_image" />
                            <div className=''>$447</div>
                        </div>
                    </div>
                </div>
                <div className='airdrop-container-bottom'>
                    <div className='pink-font'>In order to start earning profit from the game, you’ll need to stake your NFTs as well.</div>
                    <div className='white-btn'>View History</div>
                </div>
            </div>
            <div className='sub-container airdrop-container'>
                <div className='airdrop-container-top'>
                    <div className='gradient-font container-title'>WEEKLY GAME PROFIT SHARING</div>
                    <div className=''>NEXT CLAIMABLE TAK: <TimerComponent/></div>
                </div>
                <div className='airdrop-container-middle'>
                    <div className='airdrop-container-middle-left'>
                        <div className=''><span className='pink-font'>Available TAK to claim:</span> X TAK</div>
                        <div className=''>Corresponding $USDT value: $247</div>
                    </div>
                    <div className='gradient-btn'>CLAIM</div>
                </div>
                <div className='airdrop-container-status'>
                    <div className='item'>
                        <div className='title'>Today</div>
                        <div className='value'>
                            <img src={USDImg} alt="usd_image" />
                            <div className=''>$447</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title'>This week</div>
                        <div className='value'>
                            <img src={USDImg} alt="usd_image" />
                            <div className=''>$447</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title'>This month</div>
                        <div className='value'>
                            <img src={USDImg} alt="usd_image" />
                            <div className=''>$447</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title'>This year</div>
                        <div className='value'>
                            <img src={USDImg} alt="usd_image" />
                            <div className=''>$447</div>
                        </div>
                    </div>
                    <div className=''></div>
                </div>
                <div className='airdrop-container-bottom'>
                    <div className='pink-font'>In order to start earning profit from the game, you’ll need to stake your NFTs as well.</div>
                    <div className='white-btn'>View History</div>
                </div>
            </div>
            <div className='sub-container chart-container'>
                <Tabs defaultActiveKey="my_assets"
                      transition={false}
                      id="noanim-tab-example"
                      className="mb-3"
                    >
                    <Tab eventKey="my_assets" title="MY ASSETS">
                        <div className='chart-container-select'>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    MY STATS
                                </Dropdown.Toggle>
                            </Dropdown>
                        </div>
                        <ReactApexChart type="area" options={chartOptions} series={chartSeries} height={300}/>
                    </Tab>
                    <Tab eventKey="game_stats" title="GAME STATS">
                        <div className='chart-container-select'>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    MY STATS
                                </Dropdown.Toggle>
                            </Dropdown>
                        </div>
                        <ReactApexChart type="area" options={chartOptions} series={chartSeries} height={300}/>
                    </Tab>
                    <Tab eventKey="tak_usdt_chart" title="TAK/USDT CHART">
                        <div className='chart-container-select'>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    MY STATS
                                </Dropdown.Toggle>
                            </Dropdown>
                        </div>
                        <ReactApexChart type="area" options={chartOptions} series={chartSeries} height={300}/>
                    </Tab>
                </Tabs>
                
            </div>
            <LogoFooterComponent />
        </div>
    );
}

export default ComicBookearnings;