import { useEffect } from 'react';
import {connect} from 'react-redux'
import './index.scss'
import {serverUrl} from '../../utils/constant'
<<<<<<< HEAD
import {getAllBets, getOnlinePlayerCount, setGameResult, removeAllBets, changeGameState} from '../../actions/gameActions'
=======
import {getAllBets, getOnlinePlayerCount, setGameResult, setLatestResults, removeAllBets, changeGameState} from '../../actions/gameActions'
>>>>>>> 0e97ed38460346099c5d585c06b769ec1c6b349e
import {endBet} from '../../actions/betActions'
import {GAME_STATE} from '../../utils/types'

let valueTimer = null;
let currentValue = -10;
const evtSource = new EventSource(serverUrl+"getGameProgress.php");

const GameDataController = (props) => {
<<<<<<< HEAD
    const { getAllBets, getOnlinePlayerCount, setGameResult, gameState, removeAllBets, changeGameState, endBet } = props;
=======
    const { getAllBets, setLatestResults, getOnlinePlayerCount, setGameResult, gameState, removeAllBets, changeGameState, endBet } = props;
>>>>>>> 0e97ed38460346099c5d585c06b769ec1c6b349e

    useEffect(() => {
        //continueVauleSet()
    }, [])
    const continueVauleSet = () => {
        if(valueTimer) {
            clearInterval(valueTimer)
        }
        valueTimer = setInterval(() => valueSetter(), 1000);
    }
    const valueSetter = () => {
        currentValue = currentValue + 1
        gameValueHandler(currentValue)
    }

    const startGame = () => {
        console.log("gameState", gameState)
        getAllBets();
        getOnlinePlayerCount();
        changeGameState(GAME_STATE.RUNNING);
        
    }

    const endGame = () => {
        endBet();
        changeGameState(GAME_STATE.CRASHED);
<<<<<<< HEAD
=======
        setLatestResults()
>>>>>>> 0e97ed38460346099c5d585c06b769ec1c6b349e
    }

    const waitGame = () => {
        removeAllBets();
        setGameResult(0);
        changeGameState(GAME_STATE.WAITING);
    }

    const gameValueHandler = (eventData) => {
        switch(eventData.status) {
            case "Preparing":
                if(gameState !== GAME_STATE.WAITING) {
                    waitGame();
                }
                break;
            case "Running":
                if(gameState !== GAME_STATE.RUNNING) {
                    startGame();
                    
                }
                setGameResult(eventData.value);
                break;
            case "Finished":
                if(gameState !== GAME_STATE.CRASHED) {
                    endGame();
                }
                break;
        }
    }
    evtSource.onmessage = (event) => {
        let eventData = JSON.parse(event.data);
        gameValueHandler(eventData)
    }
    return (
        <>
            
        </>
    );
}

const mapStateToProps  = (state) => (
    {
        gameResult: state.betGameData.gameResult,
        gameState: state.betGameData.gameState
    }
)

<<<<<<< HEAD
export default connect(mapStateToProps, {getAllBets, getOnlinePlayerCount, setGameResult, removeAllBets, endBet, changeGameState})(GameDataController)
=======
export default connect(mapStateToProps, {getAllBets, getOnlinePlayerCount, setGameResult, setLatestResults, removeAllBets, endBet, changeGameState})(GameDataController)
>>>>>>> 0e97ed38460346099c5d585c06b769ec1c6b349e
