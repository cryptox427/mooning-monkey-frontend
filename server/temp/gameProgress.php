<?php

function calculateGameProgress($gameStartTime, $gameEndMultiplier, $stepsPerSecond = 5, $pauseBetweenGameInSeconds = 6.82) {
    // Calculate current Game Result by how many milliseconds have passed since game start
    $milisecondsSinceGameStart = microtime(true) - $gameStartTime - $pauseBetweenGameInSeconds + 3590;

    $currentPrepareTime = (number_format((float)$milisecondsSinceGameStart , 2, '.', '') * -1) - 1.82;

    if($currentPrepareTime < 0){
        $currentPrepareTime = 0;
    }

    if($milisecondsSinceGameStart < 0){
        $milisecondsSinceGameStart = 0;
    }

    //$currentGameResult = round($milisecondsSinceGameStart / $stepsPerSecond, 1);
    $currentGameResult = $milisecondsSinceGameStart * $milisecondsSinceGameStart * 0.01 ;

    
    /*if($currentGameResult < 0){
        // Between each Game there is a pause in which the game has not started yet, if someone makes a request while the game did not start yet the game result will be negative 
        // This Game did not start yet!
        $currentGameResult = -1;
    }*/

    // Break the Loop if the Game Result is reached
    if($currentGameResult >= $gameEndMultiplier) {
        // Game Finished
        $currentGameResult = $gameEndMultiplier;
    }

    /*
    if( $currentGameResult <= 0){
        return "preparing, current time " . $currentPrepareTime;
    }*/


    return number_format((float)$currentGameResult, 2, '.', '');
}

?>