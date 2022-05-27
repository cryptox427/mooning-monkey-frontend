<?php
header("Content-Type: application/json");
require('./db.php');

// Gets top 100 from leaderboard

$response = array();


$sql = "SELECT users.username, ";
$sql = $sql. "(select ABS(sum(value)) from transactions where userId = crashgamebets.userId and information like '%crashgame%' and value < 0) as wagered, ";
$sql = $sql. "(select sum(value) from transactions where userId = crashgamebets.userId and information like '%crashgame%') as profit, ";
$sql = $sql. "(select (select sum(value) from transactions t2 where t2.id <= t1.id and t2.userId = t1.userId) as profitATH from transactions t1 where t1.userId = crashgamebets.userId ORDER BY profitATH DESC LIMIT 1) as profitATH, ";
$sql = $sql. "(select (select sum(value) from transactions t2 where t2.id <= t1.id and t2.userId = t1.userId) as profitATL from transactions t1 where t1.userId = crashgamebets.userId ORDER BY profitATL ASC LIMIT 1) as profitATL, ";
$sql = $sql. "(select count(*) from transactions where userId = crashgamebets.userId and information like '%crashgame%' and value < 0) as bets ";
$sql = $sql. "FROM `crashgamebets` join `users` on `users`.`id` = `crashgamebets`.`userId` ";
$sql = $sql. "group by userId ";
$sql = $sql. "LIMIT 100";
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