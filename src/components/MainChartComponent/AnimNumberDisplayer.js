import React, {useState} from 'react';
import AnimatedNumber from "react-animated-number";

const AnimNumberDisplayer = () => {
  const [value, setValue] = useState(0);
  const handleChangeValue = (e) => {
    setValue(Number(e.target.value))
  };
  return (
    <div title="About">
      <input
            type="number"
            onChange={handleChangeValue}
            value={value}
          />
      <AnimatedNumber
          value={value}
          style={{
            fontSize: 100
          }}
          duration={1000}
          formatValue={(n) => n.toFixed(2)}
          frameStyle={(percentage) =>
            percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
          }
        />
      <h3>About page</h3>
    </div>
  );
};

export default AnimNumberDisplayer;
