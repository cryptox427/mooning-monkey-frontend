import { useState, useEffect,useRef } from "react";
import { Modal } from "react-bootstrap";
import TakCoinImg from '../../assets/images/tak-coin.svg';
import './index.scss';

const InfoBox = (props) => {
    const { show, onHide, children, className, outSideClickFunc } = props;
    const [status, setStatus] = useState(0);

    function useOutsideAlerter(ref) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                outSideClickFunc(false);
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }
      
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div ref={wrapperRef} className={className}>
            {children}
        </div>    
    );
}

export default InfoBox;