<?php
header("Content-Type: application/json");
require('./db.php');

$timeframe = stripslashes($_GET['timeframe']);
$timeframe = mysqli_real_escape_string($con, $timeframe);


if (isset($_SESSION["publicKey"])) {
    
    switch ($timeframe) {
        case "H":
            $sql = "SELECT count(*) as gamesPlayed, DATE_FORMAT(createDatetime,'%y-%m-%d %H:00') as date FROM `crashgamebets` where userId = (SELECT id from users where publicKey = '" . $_SESSION["publicKey"] . "') group by date LIMIT 24;";
            break;
        case "D":
            $sql = "SELECT count(*) as gamesPlayed, DATE_FORMAT(createDatetime,'%y-%m-%d') as date FROM `crashgamebets` where userId = (SELECT id from users where publicKey = '" . $_SESSION["publicKey"] . "') group by date LIMIT 14;";
            break;
        case "W":
            $sql = "SELECT count(*) as gamesPlayed, DATE_FORMAT(createDatetime,'%y-%m-%d') as date FROM `crashgamebets` where userId = (SELECT id from users where publicKey = '" . $_SESSION["publicKey"] . "') group by WEEK(createDatetime) LIMIT 52;";
            break;
        case "M":
            $sql = "SELECT count(*) as gamesPlayed, DATE_FORMAT(createDatetime,'%m') as date FROM `crashgamebets` where userId = (SELECT id from users where publicKey = '" . $_SESSION["publicKey"] . "') group by date LIMIT 12;";
            break;
        case "ALL":
            $sql = "SELECT count(*) as gamesPlayed, DATE_FORMAT(createDatetime,'%y-%m-%d') as date FROM `crashgamebets` where userId = (SELECT id from users where publicKey = '" . $_SESSION["publicKey"] . "') group by date LIMIT 14;";
            break;
    }

    
    $stmt = mysqli_stmt_init($con);
    mysqli_stmt_prepare($stmt,$sql);

    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    $response = array(
        'status' => true,
        'message' => 'Success',
        'data' => mysqli_fetch_all($result)
    );

} else {
    $response = array(
        'status' => true,
        'message' => 'Not logged in'
    );
}

echo json_encode($response);


?>