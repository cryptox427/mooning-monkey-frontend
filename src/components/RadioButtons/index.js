import React, { useState, useRef, useEffect } from "react";
import "./index.scss";

const RadioButtons = (props) => {
    const {values} = props
  const [curValue, setValue] = useState(values[0])
  return (
    <div className="radio-button-group">
      {
        values.map(value => {
          return (
            <button className={`radio-button ${curValue===value? 'selected' : ''}`} onClick={()=>setValue(value)}>{value}</button>
          )
        })
      }
    </div>
  );
};

export default RadioButtons;
