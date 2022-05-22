<?php

function calculateGameProgress($gameStartTime, $gameEndMultiplier, $stepsPerSecond = 5, $pauseBetweenGameInSeconds = 5) {
    // Calculate current Game Result by how many milliseconds have passed since game start
    $milisecondsSinceGameStart = microtime(true) - $gameStartTime - $pauseBetweenGameInSeconds;
    $currentGameResult = round($milisecondsSinceGameStart * ($stepsPerSecond / 10), 1);

    if($currentGameResult < 0){
        // Between each Game there is a pause in which the game has not started yet, if someone makes a request while the game did not start yet the game result will be negative 
        // This Game did not start yet!
        $currentGameResult = -1;
    }

    // Break the Loop if the Game Result is reached
    if($currentGameResult >= $gameEndMultiplier) {
        // Game Finished
        $currentGameResult = $gameEndMultiplier;
    }

    return $currentGameResult;
}

?>