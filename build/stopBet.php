<?php
    require('./db.php');
    require('./gameProgress.php');

    if (isset($_SESSION["publicKey"]) ) {
        $stepsPerSecond = 5;

        $gameStartTime;
        $gameEndMultiplier;

        $sql = "SELECT * FROM `crashgame` where crashgame.endDatetime is null ORDER BY createDatetime DESC LIMIT 1";
        $stmt = mysqli_stmt_init($con);
        mysqli_stmt_prepare($stmt,$sql);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        while($row = mysqli_fetch_assoc($result)){
            $gameStartTime = strtotime($row['createDatetime']) ;
            $gameEndMultiplier = $row['result'];
            break;
        }
        mysqli_commit($con);

        // Calculate the current Game Result
        $currentGameResult = calculateGameProgress($gameStartTime, $gameEndMultiplier, $stepsPerSecond);

        if($currentGameResult != $gameEndMultiplier && $currentGameResult > 0){
            // Update multiplier to whatever multiplier is currently avaiable as long as the game didnt stop yet && make sure the game started already

            $sql    = "UPDATE crashgamebets SET multiplier=?, stopped=1 WHERE userId=(SELECT id from users where publicKey = '" . $_SESSION["publicKey"] . "') AND gameId=(SELECT id from crashgame ORDER BY createDatetime DESC LIMIT 1) AND stopped=0";
            $stmt = mysqli_stmt_init($con);
            mysqli_stmt_prepare($stmt,$sql);
            mysqli_stmt_bind_param($stmt, "s", $currentGameResult);
            if(mysqli_stmt_execute($stmt)) {
                echo "Success";
            }
        }

    }

?>