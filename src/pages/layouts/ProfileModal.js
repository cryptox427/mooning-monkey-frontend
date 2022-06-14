import CashBackImg from '../../assets/images/cashback.svg';
import ComicBookImg from '../../assets/images/comic-book.svg';
import DocsImg from '../../assets/images/docs.svg';
import MonkeyImg from '../../assets/images/monkey.svg';
import PlayImg from '../../assets/images/play.svg';
import ReferralImg from '../../assets/images/referral.svg';
import TakImg from '../../assets/images/tak.svg';
import TransactionImg from '../../assets/images/transaction.svg';
import WinningImg from '../../assets/images/winning-bonus.svg';
import AvatarImg from '../../assets/images/user-img.png';

const ProfileModal = () => {

    return (
        <>
            <div className="absolute dropdown-profile showProfile" aria-labelledby="dropdownMenuLink"  >
                                                        <div className="drop-profile-section">
                                                        <div className="profile-user">
                                                            <img src={AvatarImg} alt="" width="42" />
                                                        </div>
                                                        <div className="profile-details text-left">
                                                            <div className="pink font-weight-bold">VIP LEVEL 1</div>
                                                            <div className="text-light"><span>VIP 0</span> <span>Novice</span></div>
                                                        </div>
                                                        </div>
                                
                                                        <hr className="my-4" style={{backgroundColor: "#515189"}} />
                                                    
                                                        <a className="dropdown-item" href="#">
                                                        <img src={PlayImg} alt="" width="20" className="mr-2" />
                                                        Action</a>
                                                        <a className="dropdown-item" href="#">
                                                        <img src={TransactionImg} alt="" width="20" className="mr-2" />
                                                        Transaction History</a>
                                                        <a className="dropdown-item" href="#">
                                                        <img src={TakImg} alt="" width="20" className="mr-2" />
                                                        TAK Staking</a>
                                                        <a className="dropdown-item" href="#">
                                                        <img src={MonkeyImg} alt="" width="20" className="mr-2" />
                                                        Monkey Earnings</a>
                                                        <a className="dropdown-item" href="#">
                                                        <img src={ComicBookImg} alt="" width="20" className="mr-2" />
                                                        Comic Book Earnings</a>
                                                        <a className="dropdown-item" href="#">
                                                        <img src={MonkeyImg} alt="" width="20" className="mr-2" />
                                                        Mooning Monkey Earnings</a>
                                                        <a className="dropdown-item" href="#">
                                                        <img src={CashBackImg} alt="" width="20" className="mr-2" />
                                                        Cashback</a>
                                                        <a className="dropdown-item" href="#">
                                                        <img src={WinningImg} alt="" width="20" className="mr-2" />
                                                        Winning Bonus</a>
                                                        <a className="dropdown-item" href="#">
                                                        <img src={ReferralImg} alt="" width="20" className="mr-2" />
                                                        Referral Program</a>
                                                        <a className="dropdown-item" href="#">
                                                        <img src={DocsImg} alt="" width="20" className="mr-2" />
                                                        Docs</a>
                                                        
                                                    </div>
                                       
        </>
    )
}

export default ProfileModal;