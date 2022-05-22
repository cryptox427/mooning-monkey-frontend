<?php
header("Content-Type: application/json");
require('./db.php');

$response = array();


$sql = "SELECT users.publicKey, amount, multiplier, amount*multiplier as payout, crashgamebets.createDatetime FROM `crashgamebets` join `users` on `users`.`id` = `crashgamebets`.`userId` join `crashgame` on `crashgame`.`id` = `crashgamebets`.`gameId` where `crashgamebets`.`multiplier` <= `crashgame`.`result` ORDER BY amount*multiplier DESC LIMIT 10;";
$stmt = mysqli_stmt_init($con);
mysqli_stmt_prepare($stmt,$sql);

mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
$transactionsFound = false;
while($row = mysqli_fetch_assoc($result)){
    $response = array(
        'status' => true,
        'message' => 'Success',
        'data' => mysqli_fetch_all($result)
    );
}

echo json_encode($response);


?>