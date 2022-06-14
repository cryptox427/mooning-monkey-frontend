import { useEffect } from 'react';
import {connect} from 'react-redux'
import './index.scss'
import {serverUrl} from '../../utils/constant'
import {getAllBets, getOnlinePlayerCount, setGameResult, removeAllBets, changeGameState} from '../../actions/gameActions'
import {endBet} from '../../actions/betActions'
import {GAME_STATE} from '../../utils/types'

let valueTimer = null;
let currentValue = -10;
const evtSource = new EventSource(serverUrl+"getGameProgress.php");

const GameDataController = (props) => {
    const { getAllBets, getOnlinePlayerCount, setGameResult, gameState, removeAllBets, changeGameState, endBet } = props;

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

export default connect(mapStateToProps, {getAllBets, getOnlinePlayerCount, setGameResult, removeAllBets, endBet, changeGameState})(GameDataController)