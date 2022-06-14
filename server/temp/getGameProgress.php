<?php
//date_default_timezone_set("America/New_York");
header("Cache-Control: no-store");
header("Content-Type: text/event-stream");
require('./db.php');
require('./gameProgress.php');

session_write_close(); // Allow multiple requests from same user

$stepsPerSecond = 10;

$gameStartTime;
$gameEndMultiplier;

$sql = "SELECT * FROM `crashgame` where crashgame.endDatetime is null ORDER BY createDatetime DESC LIMIT 1";
$stmt = mysqli_stmt_init($con);
mysqli_stmt_prepare($stmt,$sql);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
while($row = mysqli_fetch_assoc($result)){
    $gameStartTime = strtotime($row['createDatetime']);
    $gameEndMultiplier = $row['result'];
    break;
}
mysqli_commit($con);

while (true) {
    // Calculate the current Game Result and out ouput it
    $currentGameResult = calculateGameProgress($gameStartTime, $gameEndMultiplier, $stepsPerSecond);

    if(microtime(true) - $gameStartTime - 5 + 3590< 0){
        $currentGameStatus = "Preparing";
    } else if( $currentGameResult == $gameEndMultiplier){
        $currentGameStatus = "Finished";
    } else{
        $currentGameStatus = "Running";
    }

    echo "data: " . '{"value": ' . $currentGameResult . ',"status": "' . $currentGameStatus . '","secondsSinceStart": "' . microtime(true) - $gameStartTime - 5 + 3590 . '","startTime": "' . $gameStartTime . '"}', "\n\n";

    //echo "data: " . $currentGameResult, "\n\n";

    if (ob_get_contents()) ob_end_flush();
    flush();

    // Break the Loop if the Game Result is reached
    if($currentGameStatus == "Finished") {
        //echo "data: Finished", "\n\n";
        break;
    }

    // Break the loop if the client aborted the connection (closed the page)
    if ( connection_aborted() ) break;

    usleep( 1000000/$stepsPerSecond );
}

?>