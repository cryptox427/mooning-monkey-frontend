import React from 'react';
import AnimatedNumber from "react-animated-number";
import {connect} from 'react-redux'
import { useEffect, useState } from 'react';
import {GAME_STATE} from '../../utils/types'

let valueTimer = null;
let currentValue = 0;
const CurrentValueDisplayer = (props) => {
  const {gameResult, gameState} = props
  const [displayValue, setDisplayValue] = useState(0)
  return (
    <div className={`current-value-displayer ${gameState===GAME_STATE.RUNNING? "show": "hidden"}`}>
      <AnimatedNumber
          value={gameResult}
          style={{
            fontSize: 100,
            color: "white"
          }}
          duration={1000}
          formatValue={(n) => n.toFixed(2)}
        />
    </div>
  );

};


const mapStateToProps  = (state) => (
  {
      gameResult: state.betGameData.gameResult,
      gameState: state.betGameData.gameState
  }
)

export default connect(mapStateToProps, {})(CurrentValueDisplayer)
