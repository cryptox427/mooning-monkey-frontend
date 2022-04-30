import React, { useEffect, useState } from "react";

const TimerComponent = (props) => {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`${year}-05-25T10:59-0500`) - +new Date();
      
        let timeLeft = {};
      
        if (difference > 0) {
          timeLeft = {
            
            D: Math.floor(difference / (1000 * 60 * 60 * 24)),
            H: Math.floor((difference / (1000 * 60 * 60)) % 24),
            M: Math.floor((difference / 1000 / 60) % 60),
            S: Math.floor((difference / 1000) % 60)
          };
        }
      
        return timeLeft;
    }
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearTimeout(timer);
    });
    
    const timerComponents = [];
    
    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
        return;
      }
    
      timerComponents.push(
        <span>
          {timeLeft[interval]}{interval}{" "}
        </span>
      );
    });
    
    return (
        <React.Fragment>
            {timerComponents}
        </React.Fragment>
    );
}

export default TimerComponent;