<?php
header("Content-Type: application/json");
require('./db.php');

$response = array();


if (isset($_SESSION["publicKey"])) {
    $sql = "SELECT amount, multiplier, amount*multiplier as payout, crashgamebets.createDatetime  FROM `crashgamebets` join `users` on `users`.`id` = `crashgamebets`.`userId` join `crashgame` on `crashgame`.`id` = `crashgamebets`.`gameId` where publicKey = ? and `crashgamebets`.`multiplier` <= `crashgame`.`result` ORDER BY `crashgamebets`.`createDatetime` DESC LIMIT 10;";
    $stmt = mysqli_stmt_init($con);
    mysqli_stmt_prepare($stmt,$sql);
    mysqli_stmt_bind_param($stmt, "s", $_SESSION['publicKey']);

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