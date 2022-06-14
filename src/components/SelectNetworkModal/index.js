import { Modal } from "react-bootstrap";
import './index.scss';
import Network1Img from '../../assets/images/network1.svg';
import Network2Img from '../../assets/images/network2.svg';
import Network3Img from '../../assets/images/network3.svg';
import Network4Img from '../../assets/images/network4.svg';
import Network5Img from '../../assets/images/network5.svg';
import Network6Img from '../../assets/images/network6.svg';

const SelectNetworkModal = (props) => {
    const { show, onHide } = props;

    return (
        <Modal show={show} onHide={onHide} >
            <Modal.Header style={{backgroundColor: '#100F25', borderBottom: 'none'}} closeButton>
                <Modal.Title><span style={{color: '#F001F4'}}>Select a Network</span></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#100F25', color: 'white'}}>
                <div className="network-boxes">
                    <div className="n-box" data-toggle="modal" data-target="#polygon" >
                    <div className="n-title">
                        Polygon
                    </div>
                    <div className="n-image">
                        <img src={Network1Img} alt="" width="30" />
                    </div>
                    </div>
                    <div className="n-box" data-toggle="modal" data-target="#polygon" >
                    <div className="n-title">
                        OKEx
                    </div>
                    <div className="n-image">
                        <img src={Network2Img} alt="" width="30" />
                    </div>
                    </div>
                    <div className="n-box" data-toggle="modal" data-target="#polygon" >
                    <div className="n-title">
                        Harmony
                    </div>
                    <div className="n-image">
                        <img src={Network3Img} alt="" width="30" />
                    </div>
                    </div>
                    <div className="n-box" data-toggle="modal" data-target="#polygon" >
                    <div className="n-title">
                        Avalanche
                    </div>
                    <div className="n-image">
                        <img src={Network4Img} alt="" width="30" />
                    </div>
                    </div>
                    <div className="n-box" data-toggle="modal" data-target="#polygon" >
                    <div className="n-title font-weight-bold">
                        BSC
                    </div>
                    <div className="n-image">
                        <img src={Network5Img} alt="" width="30" />
                    </div>
                    </div>
                    <div className="n-box" data-toggle="modal" data-target="#polygon" >
                    <div className="n-title font-weight-bold">
                        Fantom
                    </div>
                    <div className="n-image">
                        <img src={Network6Img} alt="" width="30" />
                    </div>
                    </div>
                </div>    
                <p className="text-light mt-3">You are currently browsing <a href="#" className="pink font-weight-bold"> Mooning monkey </a> on the <a href="#" className="pink font-weight-bold">BSC </a>  network</p>
            </Modal.Body>
        </Modal>
    );
}

export default SelectNetworkModal;