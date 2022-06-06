<?php
header("Content-Type: application/json");
require('./db.php');

$response = array();


$sql = "SELECT users.username, users.publicKey, amount, multiplier, ROUND(amount*multiplier, 2) as payout, crashgamebets.createDatetime FROM `crashgamebets` join `users` on `users`.`id` = `crashgamebets`.`userId` join `crashgame` on `crashgame`.`id` = `crashgamebets`.`gameId` where `crashgamebets`.`multiplier` <= `crashgame`.`result` ORDER BY `crashgamebets`.`createDatetime` DESC LIMIT 10;";
$stmt = mysqli_stmt_init($con);
mysqli_stmt_prepare($stmt,$sql);

mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
$response = array(
    'status' => true,
    'message' => 'Success',
    'data' => mysqli_fetch_all($result)
);

echo json_encode($response);

?>