import LogoWithGlowImg from '../../../src/assets/images/logo-with-glow.png';
import './index.scss'

const LogoFooterComponent = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={LogoWithGlowImg} />
            </div>
            <div className='footer-info'>
                <div className='gradient-font'>DISCLAIMER</div>
                <div className=''>MooningMonkey.com offers games with an element of chance. By using this site you ensure that you are at least 18 years of age. You accept that we are not responsible for any violation of your local laws pertaining to online gaming and games of chance. Play responsibly and have a great time on MooningMonkey.com. May the luck be with you.</div>
            </div>
        </div>
    );
}

export default LogoFooterComponent;