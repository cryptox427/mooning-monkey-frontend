import { IoMdSend } from 'react-icons/io';
import { FiPaperclip } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';

import emoji from '../../../../assets/images/playpage/emoji.png';
import warningImg from '../../../../assets/images/playpage/warning-icon.svg';
import './index.scss';


const ScamedPage = (props) => {
    const { closePage } = props;
    return (
        <div className="warning-for-chat">
            <div className="w-close-icon" onClick={()=>closePage()}>
                <svg width={16} height={16} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.31364 0.651535C2.00788 -0.0426993 3.13346 -0.0426993 3.82769 0.651535L16.7923 13.6161L29.7568 0.651535C30.4511 -0.0426993 31.5766 -0.0426993 32.2709 0.651535C32.9651 1.34577 32.9651 2.47135 32.2709 3.16558L19.3063 16.1301L32.2709 29.0947C32.9651 29.789 32.9651 30.9145 32.2709 31.6088C31.5766 32.303 30.4511 32.303 29.7568 31.6088L16.7923 18.6442L3.82769 31.6088C3.13346 32.303 2.00788 32.303 1.31364 31.6088C0.61941 30.9145 0.61941 29.789 1.31364 29.0947L14.2782 16.1301L1.31364 3.16558C0.61941 2.47135 0.61941 1.34577 1.31364 0.651535Z" fill="white" />
                </svg>
            </div>
            <div className="w-wrap">
                <div className="w-top">
                    <div className="w-img">
                        <img src={warningImg} alt="" width={60} />
                    </div>
                    <div className="warning">
                        <h5 className="mb-1 title">Warning !</h5>
                        <h3 className="mb-0 description">Signs you are being scammed</h3>
                    </div>
                </div>
                <div className="w-details">
                    <ul className="pl-4 stauts-bullet">
                        <li>
                        They claim they want you to <span className="pink-monkey-text">gamble for them.</span>  
                        </li>
                        <li>
                        They want to <span className="pink-monkey-text">share an account. </span> 
                        </li>
                        <li>
                        They want you to <span className="pink-monkey-text"> share your screen with them </span> using a program like TeamViewer.
                        </li>
                    </ul>
                    <div className="text-right">
                        <button onClick={closePage} className="cta-btn understand-btn">
                            I understand
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScamedPage;