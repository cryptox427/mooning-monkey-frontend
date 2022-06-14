import React, { useState, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";

import { useWeb3React } from "@web3-react/core";
import { Hearts } from  'react-loader-spinner';
import Web3 from 'web3';
import LogoFooterComponent from "../../components/LogoFooterComponent";
import AmountImg from '../../assets/images/amount.svg';
import ClockImg from '../../assets/images/clock.svg';
import StarImg from '../../assets/images/star.svg';
import BNBImg from '../../assets/images/bnb.png';
import MonkeyImg from '../../assets/images/monkey.png';
import './index.scss';
import { EtherscanProvider } from '@ethersproject/providers';

//handsome
import { CONTRACTS, CONTRACTS_TYPE } from '../../utils/constants';
import { injected } from "../../components/wallet/connectors";
import axios from "axios";
// import BigNumber from 'bignumber.js';
// import BigNumber from 'big-number';
import { BigNumber } from "@ethersproject/bignumber";
import { ethers } from 'ethers';




let web3 ;

const TakStaking = (props) => {

    let chartSeries = [
        {
          name: "series-1",
          data: [0, 0, 0, 0, 0, 0, 0, 0]
        }
    ]


    const { active, account, library, chainId, connector, activate, deactivate } = useWeb3React();
    let metadata0 = CONTRACTS[CONTRACTS_TYPE.TAKTOKEN][4]?.abi;
    let addr0 = CONTRACTS[CONTRACTS_TYPE.TAKTOKEN][4]?.address;

    let metadata1 = CONTRACTS[CONTRACTS_TYPE.TAKTOKENSTAKE][4]?.abi;
    let addr1 = CONTRACTS[CONTRACTS_TYPE.TAKTOKENSTAKE][4]?.address;

    const [approveAmount, setAmountValue] = useState(0);
    const [claimAmount, setClaimAmount] = useState(0);
    const [amountStake, setAmountStake] = useState(0);
    const [lockduration, setLockDuration] = useState(0);
    const [loading, setLoading] = useState(false);
    const [myBalance, setMyBalance] = useState(0);
    const [chartdata, setChartData] = useState([]);

    const [amount, setAmount] = useState(0);
    const [totalRewards, setTotalRewards] = useState(0);
    const [myRewards, setMyRewards] = useState(0);
    const [rewardSum, setRewardSum] = useState(0);
    const [staked, setStakeState] = useState(null);

    // useEffect(() => {
    //     if (!active && localStorage.getItem("accountStatus")) {
    //         activate(injected);
    //     }
    // }, [])


    useEffect(() => {
        (async () => {
            if (account && chainId && library) {
                web3 = new Web3(library.provider);
                let contract0 = new web3.eth.Contract(metadata0, addr0);
                let contract1 = new web3.eth.Contract(metadata1, addr1);

                const walletInfo = await axios.get(`https://deep-index.moralis.io/api/v2/0x2D9A3804Bf88666B67424D301F0C5c815dc5438f?chain=rinkeby`, {
                    headers: {'x-api-key': 'C9ceiK2PKyLkB2y065rR8ZD4jZitcSXMba3SrIZblvFHR5Qsw2kIdO20RRPCgpI1'}
                })

                let results  = walletInfo.data.result;

                // results.map(result, i)
                for(let i = 0; i < results.length; i++)
                {
                    let tempdate = new Date(results[i].block_timestamp);
                    let now = new Date();
                    let total = 0;


                    if(results[i].to_address == account)
                    {
                        let duration = getDifferenceInDays(now, tempdate);
                        chartSeries[0].data[Math.floor(duration)] += results[i].value;

                        total += results[i].value;

                        setChartData(chartSeries);
                        setRewardSum(total);
                    }
                }

                try
                {
                    let amount_claimable = await contract1.methods.getAmountClaimable().call();
                    console.log(amount_claimable);
                    console.log('staked.amount');
                    setAmount(amount_claimable);

                    let allow_result = await contract0.methods.allowance(account, addr1).call();
                    setAmountValue(allow_result);
                    console.log("A++++++++++++++++++++", allow_result)

                    let balance = await contract0.methods.balanceOf(account).call();
                    setMyBalance(balance / (10 ** 18));

                    let temp_val = await contract1.methods.totalRewardsClaimed(account).call();
                    // totalRewards_tmp = new BigNumber(totalRewards_tmp).dividedBy(10 ** 18);
                    temp_val = temp_val / (10 ** 18);
                    console.log("lastRewardsPool::::::::::::: ", temp_val)
                    setTotalRewards(Math.floor(temp_val));

                    temp_val = await contract1.methods.userToRewards(account).call();
                    temp_val = temp_val / (10 ** 18);
                    console.log("MyRewardsPool: ", temp_val);
                    setMyRewards(Math.floor(temp_val));

                    temp_val = await contract1.methods.stakeStructs(account).call();
                    console.log("MYstakeStructs: ", temp_val);
                    // setMyRewards(Math.floor(temp_val));
                    let stakeState = await contract1.methods.isStaked(account).call();
                    setStakeState(stakeState);

                }
                catch(err)
                {
                    console.log(err);
                }
            }
        })();
    }, [chainId, library, account, loading])

    async function isStaked() {
            if (account && chainId && library) {
                let contract1 = new web3.eth.Contract(metadata1, addr1);
                let result = await contract1.methods.isStaked(account).call();
                return result;
            }
    }

    function getDifferenceInDays(date1, date2) {
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / (1000 * 60 * 60 * 24);
      }




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
        colors: ['#F001F4']
    }



    // const changeStakeAmount = () => {

    // }

    function connect() {
        setLoading(true);
        activate(injected, async (error) => {
            console.log(error);
        });
        setLoading(false);
    }


    const changeStakeAmount = (e) => {
        setAmountStake(e.target.value);
    }


    async function approve() {
        if (account && chainId && library) {
            setLoading(true);
            web3 = new Web3(library.provider);
            let contract0 = new web3.eth.Contract(metadata0, addr0);

            let contract1 = new web3.eth.Contract(metadata1, addr1);


            try
            {
                // let approve = await contract1.methods.approvedAddresses(account).call();
                // let amountToApprove = new BigNumber(10000 * (10 ** 18));

                let amountToApprove = BigNumber.from(10000 + "000000000000000000");
                // let amountToApprove = BigNumber.from('1000000000000000000000000');


                console.log('****************************************************************', typeof amountToApprove, amountToApprove);



                let allow_result = await contract0.methods.approve(addr1, amountToApprove).send({from: account});

                // let allow_result = await contract0.methods.approve(account, amountToApprove).send({from: account});

                allow_result = await contract0.methods.allowance(account, addr1).call();
                setAmountValue(allow_result);

                let amount_reward = await  contract1.methods.getAmountClaimable().call();
                setClaimAmount(amount_reward);
            }
            catch(err)
            {
                console.log(err);
            }
            setLoading(false);
        }
    }

    async function clickStake() {
        if(amountStake > 10000)
        {
            alert("Max amount over.");
            return;
        }

        if (account && chainId && library) {

            setLoading(true);
            web3 = new Web3(library.provider);

            let contract1 = new web3.eth.Contract(metadata1, addr1);

            try
            {
                // let approve = await contract1.methods.approvedAddresses(account).call();
                // let amountToStake = new BigNumber(amountStake * (10 ** 18)).toString();
                let amountToStake = BigNumber.from(amountStake + "000000000000000000");//Once

                console.log('================================================', amountToStake, lockduration)
                let mint_result = await contract1.methods.stake(amountToStake, lockduration).send({from: account});

            }
            catch(err)
            {
                console.log(err);
                console.log("User can stake only once per time. To do another stake, please finish previous stake.");
            }
            setLoading(false);
        }
    }

    async function clickUnStake() {
        if (account && chainId && library) {

            setLoading(true);
            web3 = new Web3(library.provider);

            let contract1 = new web3.eth.Contract(metadata1, addr1);

            try
            {
                // let approve = await contract1.methods.approvedAddresses(account).call();
                let mint_result = await contract1.methods.unstake().send({from: account});

            }
            catch(err)
            {
                console.log(err);
                console.log("Contract does not have enough TAKs for unstake and reward");
            }
            setLoading(false);
        }
    }

    async function clickClaim() {
        if (account && chainId && library) {

            setLoading(true);
            web3 = new Web3(library.provider);

            let contract1 = new web3.eth.Contract(metadata1, addr1);

            try
            {
                // let approve = await contract1.methods.approvedAddresses(account).call();
                let mint_result = await contract1.methods.claim().send({from: account});

            }
            catch(err)
            {
                console.log(err);
                console.log("Contract does not have enough TAKs");
            }
            setLoading(false);
        }
    }

    const clickLockDuration = (day) => {
        setLockDuration(day);
    }

    //amountStake
    if(loading)
    {
        return (
            <div className="staking-container">
                <div style={{margin:'15% 40%'}}>
                    <Hearts color="#F001F4" height={280} width={280}/>
                </div>
            </div>
        )
    }
    else
    return (
        <div className="staking-container">
            <div className="gradient-font staking-container-title">STAKING</div>
            <div className="main">
                <Row>
                    <Col sm={12} lg={12} xl={7}>
                        <div className="staking-container-left">
                            <div className="staking-container-left-top">
                                <div className="title">
                                    Available Staked TAK Balance {Math.floor(myBalance)}
                                    <div style={{float:'right'}}>{amount}</div>
                                </div>
                                <div className="stake-component ph-hide wnd-show">
                                    <div className="title">
                                        <img src={AmountImg} alt="amount" />
                                        Stake Amount
                                    </div>
                                    <div className="info">
                                        <input type='number' className='stake-amount' placeholder = 'Amount' onChange={changeStakeAmount} />
                                        {/* <div className="">Amount</div> */}
                                        <div className="">10000 <span>max</span></div>
                                    </div>
                                </div>
                                <div className="stake-component ph-show wnd-hide">
                                    <div className="info stake-component-first">
                                        <div className="title">
                                            <img src={AmountImg} alt="amount" />
                                            Stake Amount
                                        </div>
                                        <div className="">10'000 <span>max</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lock-component">
                                    <div className="title">
                                        <img src={ClockImg} alt="clock" />
                                        Lock in period (Weeks)
                                    </div>
                                    <div className="info">
                                        <div className={`item ${lockduration == 0 ? 'active' : ''}`} onClick={() => clickLockDuration(0)}>0</div>
                                        <div className={`item ${lockduration == 1 ? 'active' : ''}`} onClick={() => clickLockDuration(1)}>1</div>
                                        <div className={`item ${lockduration == 2 ? 'active' : ''}`} onClick={() => clickLockDuration(2)}>2</div>
                                        <div className={`item ${lockduration == 3 ? 'active' : ''}`} onClick={() => clickLockDuration(3)}>3</div>
                                        <div className={`item ${lockduration == 4 ? 'active' : ''}`} onClick={() => clickLockDuration(4)}>4</div>
                                        <div className={`item ${lockduration == 52 ? 'active' : ''}`} onClick={() => clickLockDuration(52)}>52</div>
                                    </div>
                                </div>
                                <div className="stake-component ph-hide wnd-show">
                                    <div className="title">
                                        <img src={StarImg} alt="star" />
                                        Rewards
                                    </div>
                                    <div className="info">
                                        <div></div>
                                        <div><span className="pink-font">{claimAmount}</span> <span>$TAK</span></div>
                                    </div>
                                </div>
                                <div className="stake-component ph-show wnd-hide">
                                    
                                    <div className="info">
                                    <div className="title">
                                        <img src={StarImg} alt="star" />
                                        Rewards
                                    </div>
                                        <div><span className="pink-font">{claimAmount}</span> <span>$TAK</span></div>
                                    </div>
                                </div>
                                <div className="explain-component">
                                    <div className="left">Only one TAK Staking per wallet is allowed. And, the minimum of the "TAB" TAK staked will be locked in for the full duration of the stake period.</div>
                                    <div className="right ph-hide wnd-show">
                                        On BSCscan.com<br />View Contract
                                        <img src={BNBImg} alt="bnb_image" />
                                    </div>
                                    <div className="right ph-show wnd-hide">
                                        View Contract
                                        <div>
                                            On BSCscan.com
                                            <img src={BNBImg} alt="bnb_image" />
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="staking-container-left-bottom">
                                {!account && (
                                    <div className="button-group">
                                        <div className="button" onClick={connect}>Connect Wallet</div>
                                    </div>
                                )}

                                {account && (approveAmount > 0) && (
                                    <div className="button-group">
                                        {
                                            staked == false ?
                                                (<div className="button" onClick={clickStake}>STAKE</div>)
                                            :
                                                (
                                                    <>
                                                        <div className="button" onClick={clickUnStake}>UNSTAKE</div>
                                                        <div className="button" onClick={clickClaim}>CLAIM</div>
                                                    </>
                                                )
                                        }

                                    </div> )
                                }
                                {/* <div className="button-group">
                                    <div className="button" onClick={clickStake}>STAKE</div>
                                    <div className="button" onClick={clickUnStake}>UNSTAKE</div>
                                    <div className="button" onClick={clickClaim}>CLAIM</div>
                                </div> */}


                                {account && (approveAmount == 0) && (
                                    <div className="button-group">
                                        <div className="button" onClick={approve}>approve</div>
                                    </div> )
                                }
                                <div className="view-history white-btn"><a target = "_blank" href = "https://rinkeby.etherscan.io/address/0xc60e678f3A0cDFDc70cfF8A90Ff6A836D74Ff5a9">View History</a></div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} lg={12} xl={5}>
                        <div className="staking-container-right">
                            <div className="staking-container-right-top">
                                <Row className="ph-hide wnd-show">
                                    <Col sm={12} md={6}>
                                        <div className="title">Market Data</div>
                                        <div className="detail">
                                            <div className="sub-title">Total Tak Reward Pool</div>
                                            <div className="info">{totalRewards} TAK</div>
                                        </div>
                                        <div className="detail">
                                            <div className="sub-title">Total Tak Rewards Left</div>
                                            <div className="info">{claimAmount} TAK</div>
                                        </div>
                                        {/* <div className="detail">
                                            <div className="sub-title">TAK Circ. Supply Staked</div>
                                            <div className="info">X%</div>
                                        </div>
                                        <div className="detail">
                                            <div className="sub-title">TVL</div>
                                            <div className="info">$X</div>
                                        </div> */}
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <div className="title">My Data</div>
                                        <div className="detail">
                                            <div className="sub-title">My TAK Staked</div>
                                            <div className="info">{myRewards} TAK</div>
                                        </div>
                                        <div className="detail">
                                            <div className="sub-title">My TAK Earned</div>
                                            <div className="info">{rewardSum} TAK</div>
                                        </div>
                                        {/* <div className="detail">
                                            <div className="sub-title">Locked Until</div>
                                            <div className="info">XX/XX/XX</div>
                                        </div>
                                        <div className="detail">
                                            <div className="sub-title">APY</div>
                                            <div className="info">X%</div>
                                        </div> */}
                                    </Col>
                                </Row>
                                <div className="ph-show wnd-hide">
                                </div>
                                <div className="chart-option">
                                    <div className="">STAKING REWARD</div>
                                    <div className="item-list">
                                        <span className="item">H</span>
                                        <span className="item">D</span>
                                        <span className="item">W</span>
                                        <span className="item">M</span>
                                        <span className="item">ALL</span>
                                    </div>
                                </div>
                                <ReactApexChart type="area" options={chartOptions} series={chartdata} height={200}/>
                            </div>
                            <div className="staking-container-right-bottom">
                                <div className="button">
                                     Tutorial Video
                                </div>
                                <img src={MonkeyImg} alt="monkey_image" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <LogoFooterComponent />
        </div>
    );
}

export default TakStaking;