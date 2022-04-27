import LogoFooterComponent from '../../components/LogoFooterComponent';
import USDImg from '../../assets/images/usd.png';
import './index.scss'

const MonkeyEarning = (props) => {
    return (
        <div className='earning-container'>
            <div className='gradient-font earning-container-title'>MY MONKEY EARNINGS</div>
            <div className='sub-container staking-container'>
                <div className='staking-container-top'>
                    <div className='gradient-font'>NFT STAKING OVERIVEW</div>
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
            <div className='sub-container'></div>
            <div className='sub-container airdrop-container'>
                <div className='airdrop-container-top'>
                    <div className='gradient-font'>MY DAILY CLAIMABLE TAK AIRDROP</div>
                    <div className=''>NEXT CLAIMABLE TAK: 19H 23M 39S</div>
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
                    <div className=''>View History</div>
                </div>
            </div>
            <div className='sub-container airdrop-container'>
                <div className='airdrop-container-top'>
                    <div className='gradient-font'>WEEKLY GAME PROFIT SHARING</div>
                    <div className=''>NEXT CLAIMABLE TAK: 19H 23M 39S</div>
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
                    <div className=''>View History</div>
                </div>
            </div>
            <div className='sub-container'></div>
            <LogoFooterComponent />
        </div>
    );
}

export default MonkeyEarning;