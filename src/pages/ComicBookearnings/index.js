import { Dropdown } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Web3 from "web3";
import LogoFooterComponent from "../../components/LogoFooterComponent";
import TimerComponent from "../../components/TimerComponent";
import { CONTRACTS, CONTRACTS_TYPE } from "../../utils/constants";
import USDImg from "../../assets/images/usd.png";
import "./index.scss";

const { L1MonkeyData } = require("../MonkeyEarning/evolution1_merkle_data");
const { ethers } = require("ethers");
const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

let web3;

const ComicBookearnings = (props) => {
  const { account, library, chainId } = useWeb3React();

  const chartOptions = {
    chart: {
      type: "area",
      id: "basic-bar",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      horizontalAlign: "left",
    },
    xaxis: {
      type: "datetime",
      categories: [
        133333330000000, 133333331000000, 133333332000000, 133333333000000,
        133333334000000, 133333335000000, 133333336000000, 133333337000000,
      ],
    },
    stroke: {
      curve: "straight",
    },
    tooltip: {
      enabled: true,
    },
    theme: {
      mode: "dark",
    },
    colors: ["#F001F4"],
  };

  const chartSeries = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  const metadata1 = CONTRACTS[CONTRACTS_TYPE.NFTMINT][4]?.abi;
  const addr1 = CONTRACTS[CONTRACTS_TYPE.NFTMINT][4]?.address;

  const metadata2 = CONTRACTS[CONTRACTS_TYPE.NFTSTAKING][4]?.abi;
  const addr2 = CONTRACTS[CONTRACTS_TYPE.NFTSTAKING][4]?.address;

  const [loading, setLoading] = useState(false);
  const [myNFTData, setMyNFTData] = useState([]);
  const [tokenIdList, setTokenIdList] = useState([]);
  const [allApprove, setAllApprove] = useState(false);

  const [myStakedNFTData, setMyStakedNFTData] = useState([]);
  const [unstakedcount, setUnstakedcount] = useState(0);
  const [stakedcount, setStakedcount] = useState(0);

  let base_uri =
    "https://ipfs.io/ipfs/QmT7a4eC1VnwPLK7wzF8jFZU5jDpuPi9KqQ8Kq386tpere/";

  function encodeLeaf(tokenId, rarity) {
    const encoded = ethers.utils.solidityKeccak256(
      ["uint256", "uint256"],
      [tokenId, rarity]
    );
    return encoded;
  }

  const leaves = [L1MonkeyData.map((x) => encodeLeaf(x.tokenId, x.rarity))];
  const trees = leaves.map(
    (evoLeafs) =>
      new MerkleTree(evoLeafs, keccak256, {
        sortPairs: true,
      })
  );

  async function getProof(evolution, monkey) {
    return trees[evolution].getHexProof(
      encodeLeaf(monkey.tokenId, monkey.rarity)
    );
  }

  const stakeAll = async () => {
    console.log(account, chainId, library);
    if (account && chainId && library) {
      setLoading(true);

      web3 = new Web3(library.provider);
      let NFT_Staking_Contract = new web3.eth.Contract(metadata2, addr2);

      let NFT_Mint_Contract = new web3.eth.Contract(metadata1, addr1);

      let new_pms = [];
      for (let i = 0; i < myNFTData.length; i++) {
        let token = myNFTData[i];
        let tokenId = Number(token.slice(1, token.length));
        const { rarity } = L1MonkeyData.find((x) => x.tokenId === tokenId);

        let proof = await getProof(0, { tokenId: tokenId, rarity: rarity });
        let new_pm = [
          {
            tokenId: tokenId,
            C: rarity,
            proof: proof,
            evolution: 0,
            timeStaked: Math.floor(Date.now() / 1000),
          },
        ];
        new_pms.push(new_pm);
      }

      if (new_pms.length === 0) {
        return;
      }

      try {
        // const approve_result = await NFT_Mint_Contract.methods.approve(addr2, tokenId).send({from: account});
        const gas = await NFT_Staking_Contract.methods
          .stake(new_pms)
          .estimateGas({ from: account });
        console.log("gas ", gas);
        let result = await NFT_Staking_Contract.methods
          .stake(new_pms)
          .send({ from: account });
        console.log(result);
        console.log("done! Congratrations!");
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }
  };

  const unStakeAll = async () => {
    if (account && chainId && library) {
      setLoading(true);
      web3 = new Web3(library.provider);
      let NFT_Staking_Contract = new web3.eth.Contract(metadata2, addr2);
      try {
        let result = await NFT_Staking_Contract.methods
          .unstake()
          .send({ from: account });
        console.log(result);
        console.log("unstake done! Congratrations!");
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (account && chainId && library) {
        web3 = new Web3(library.provider);

        let NFT_Mint_Contract = new web3.eth.Contract(metadata1, addr1);
        let NFT_Staking_Contract = new web3.eth.Contract(metadata2, addr2);
        try {
          const approve_result = await NFT_Mint_Contract.methods
            .isApprovedForAll(account, addr2)
            .call();
          console.log(approve_result);
          setAllApprove(approve_result);
          if (!approve_result) {
            const setAppr = await NFT_Mint_Contract.methods
              .setApprovalForAll(addr2, true)
              .send({ from: account });
            console.log("SUCCESS Approved !!!");
          }

          let temp_array = [];
          let allow_result = await NFT_Staking_Contract.methods
            .getNFTsByOwner(account, 0)
            .call();
          console.log("Funcking...........................", allow_result);

          for (let i = 0; i < allow_result.length; i++) {
            let temp_url = base_uri + allow_result[i] + ".json";

            let temp_json = await fetch(temp_url);
            temp_json = await temp_json.json();
            temp_array.push(temp_json);
          }
          setStakedcount(allow_result.length);
          setTokenIdList(allow_result);
          setMyNFTData(temp_array);

          temp_array = [];

          allow_result = await NFT_Staking_Contract.methods
            .getStakedMonkeysByUser(account)
            .call();
          console.log("Funcking+++++++++++++++++++++++++++", allow_result);
          for (let i = 0; i < allow_result.length; i++) {
            let temp_url = base_uri + allow_result[i].tokenId + ".json";

            let temp_json = await fetch(temp_url);
            temp_json = await temp_json.json();
            temp_array.push(temp_json);
          }
          setUnstakedcount(allow_result.length);
          setMyStakedNFTData(temp_array);
        } catch (err) {
          console.log(err);
        }
      }
    })();
  }, [chainId, library, account, loading]);

  return (
    <div className="earning-container">
      <div className="gradient-font earning-container-title">
        MY COMICS EARNINGS
      </div>
      <div className="sub-container staking-container">
        <div className="staking-container-top">
          <div className="gradient-font container-title">
            NFT STAKING OVERIVEW
          </div>
          <div className="staking-container-top-btns">
            <div className="gradient-btn first" onClick={stakeAll}>
              STAKE ALL
            </div>
            <div className="gradient-btn" onClick={unStakeAll}>
              UNSTAKE ALL
            </div>
          </div>
        </div>
        <div className="staking-container-bottom">
          <div className="staking-container-bottom-item">
            <div className="pink-font">AVG PAYOUT</div>
            <div className="">209</div>
          </div>
          <div className="staking-container-bottom-item">
            <div className="pink-font">AVG PAYOUT</div>
            <div className="">871</div>
          </div>
          <div className="staking-container-bottom-item">
            <div className="pink-font">AVG PAYOUT</div>
            <div className="">63</div>
          </div>
          <div className="staking-container-bottom-item">
            <div className="pink-font">UNSTAKED</div>
            <div className="">9</div>
          </div>
          <div className="staking-container-bottom-item">
            <div className="pink-font">UNLINKED</div>
            <div className="">76</div>
          </div>
        </div>
      </div>
      <div className="sub-container assets-container">
        <div className="gradient-font assets-container-title container-title">
          MY ASSETS
        </div>
        <div className="assets-container-body">
          <div className="assets-container-body-part">
            <div className="assets-container-body-part-item">
              <div className="left">
                <div className="pink-font">Mooning Monkey</div>
                <div className="text-sm">Owned: 7</div>
                <div className="text-sm">Next Claimable</div>
                <div className="text-sm">Amount: 1349 TAK</div>
              </div>
              <div className="right"></div>
            </div>
            <div className="assets-container-body-part-item">
              <div className="left">
                <div className="pink-font">Galactic Gorilla</div>
                <div className="text-sm">Owned: 9</div>
                <div className="text-sm">Next Claimable</div>
                <div className="text-sm">Amount: 3698 TAK</div>
              </div>
              <div className="right"></div>
            </div>
          </div>
          <div className="assets-container-body-part">
            <div className="assets-container-body-part-item">
              <div className="left">
                <div className="pink-font">Alien Gorilla</div>
                <div className="text-sm">Owned: 0</div>
                <div className="text-sm">Next Claimable</div>
                <div className="text-sm">Amount: 0 TAK</div>
              </div>
              <div className="right"></div>
            </div>
            <div className="assets-container-body-part-item">
              <div className="left">
                <div className="pink-font">Eternal Yeti</div>
                <div className="text-sm">Owned: 0</div>
                <div className="text-sm">Next Claimable</div>
                <div className="text-sm">Amount: 0 TAK</div>
              </div>
              <div className="right"></div>
            </div>
          </div>
        </div>
        <div className="pink-font">
          You can stake or unstake at anytime, but daily claimable airdrops will
          only start after 24H of staking your NFTs being staked.
        </div>
      </div>
      <div className="sub-container airdrop-container">
        <div className="airdrop-container-top">
          <div className="gradient-font container-title">
            MY DAILY CLAIMABLE TAK AIRDROP
          </div>

          <div className="">
            NEXT CLAIMABLE TAK: <TimerComponent />
          </div>
        </div>
        <div className="airdrop-container-middle">
          <div className="airdrop-container-middle-left">
            <div className="">
              <span className="pink-font">Available TAK to claim:</span> X TAK
            </div>
            <div className="">Corresponding $USDT value: $247</div>
          </div>
          <div className="gradient-btn">CLAIM</div>
        </div>
        <div className="airdrop-container-status">
          <div className="item">
            <div className="title">Today</div>
            <div className="value">
              <img src={USDImg} alt="usd_image" />
              <div className="">$447</div>
            </div>
          </div>
          <div className="item">
            <div className="title">This week</div>
            <div className="value">
              <img src={USDImg} alt="usd_image" />
              <div className="">$447</div>
            </div>
          </div>
          <div className="item">
            <div className="title">This month</div>
            <div className="value">
              <img src={USDImg} alt="usd_image" />
              <div className="">$447</div>
            </div>
          </div>
          <div className="item">
            <div className="title">This year</div>
            <div className="value">
              <img src={USDImg} alt="usd_image" />
              <div className="">$447</div>
            </div>
          </div>
          <div className="item">
            <div className="title">Lifetime</div>
            <div className="value">
              <img src={USDImg} alt="usd_image" />
              <div className="">$447</div>
            </div>
          </div>
        </div>
        <div className="airdrop-container-bottom">
          <div className="pink-font">
            In order to start earning profit from the game, you’ll need to stake
            your NFTs as well.
          </div>
          <div className="white-btn">View History</div>
        </div>
      </div>
      <div className="sub-container airdrop-container">
        <div className="airdrop-container-top">
          <div className="gradient-font container-title">
            WEEKLY GAME PROFIT SHARING
          </div>
          <div className="">
            NEXT CLAIMABLE TAK: <TimerComponent />
          </div>
        </div>
        <div className="airdrop-container-middle">
          <div className="airdrop-container-middle-left">
            <div className="">
              <span className="pink-font">Available TAK to claim:</span> X TAK
            </div>
            <div className="">Corresponding $USDT value: $247</div>
          </div>
          <div className="gradient-btn">CLAIM</div>
        </div>
        <div className="airdrop-container-status">
          <div className="item">
            <div className="title">Today</div>
            <div className="value">
              <img src={USDImg} alt="usd_image" />
              <div className="">$447</div>
            </div>
          </div>
          <div className="item">
            <div className="title">This week</div>
            <div className="value">
              <img src={USDImg} alt="usd_image" />
              <div className="">$447</div>
            </div>
          </div>
          <div className="item">
            <div className="title">This month</div>
            <div className="value">
              <img src={USDImg} alt="usd_image" />
              <div className="">$447</div>
            </div>
          </div>
          <div className="item">
            <div className="title">This year</div>
            <div className="value">
              <img src={USDImg} alt="usd_image" />
              <div className="">$447</div>
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="airdrop-container-bottom">
          <div className="pink-font">
            In order to start earning profit from the game, you’ll need to stake
            your NFTs as well.
          </div>
          <div className="white-btn">View History</div>
        </div>
      </div>
      <div className="sub-container chart-container">
        <Tabs
          defaultActiveKey="my_assets"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="my_assets" title="MY ASSETS">
            <div className="chart-container-select">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">MY STATS</Dropdown.Toggle>
              </Dropdown>
            </div>
            <ReactApexChart
              type="area"
              options={chartOptions}
              series={chartSeries}
              height={300}
            />
          </Tab>
          <Tab eventKey="game_stats" title="GAME STATS">
            <div className="chart-container-select">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">MY STATS</Dropdown.Toggle>
              </Dropdown>
            </div>
            <ReactApexChart
              type="area"
              options={chartOptions}
              series={chartSeries}
              height={300}
            />
          </Tab>
          <Tab eventKey="tak_usdt_chart" title="TAK/USDT CHART">
            <div className="chart-container-select">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">MY STATS</Dropdown.Toggle>
              </Dropdown>
            </div>
            <ReactApexChart
              type="area"
              options={chartOptions}
              series={chartSeries}
              height={300}
            />
          </Tab>
        </Tabs>
      </div>
      <LogoFooterComponent />
    </div>
  );
};

export default ComicBookearnings;
