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

    if (ob_get_contents()) ob_end_flush();
    flush();

    // Break the Loop if the Game Result is reached
    if($currentGameResult == $gameEndMultiplier) {
        sleep(5);

        $sFile = file_get_contents("http://localhost:3005/startGame.php?apiKey=EkVqPHQhSU76YDMdGHnxSpp5TNd7Rb96n7any2PjBCXpR9QprCH3iWcUJizQvUrabgn7GKfbYg9BxgtQKQaJjxWX5h6u4PLHL9yAf4wNLHLRLc9MRCfb5q3aetWBAXPjPcpPPp6pL5AqZ7BTWdngvhjK5b3Xx8Qthxk33QRdYBC3S8k4J9vEaYmvBmfuwQ7BJRv2KbB7cVy9zPYB2gFit99wx5qMXCfmyBd7bvntE7VftYhJHNx24TiDLKQ5CQvG", False);

        echo "data: Finished", "\n\n";
        break;
    }

    // Break the loop if the client aborted the connection (closed the page)
    if ( connection_aborted() ) break;

    usleep( 1000000/$stepsPerSecond );

}
?>